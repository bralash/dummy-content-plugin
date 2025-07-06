// code.ts
import { names, bios, jobTitles, phoneNumbers, locations } from "./data";

figma.showUI(__html__, { width: 300, height: 500 });

let currentCountry: keyof typeof names = "ghana"; // default

figma.ui.onmessage = async msg => {
    const selection = figma.currentPage.selection;
    const country: keyof typeof names = msg.country || "ghana";
    if (msg.type === "set-country") {
        if (msg.country === "ghana" || msg.country === "nigeria") {
            currentCountry = msg.country;
            figma.notify(`Switched to ${currentCountry.toUpperCase()} data`);
        }
        return;
    }

    if (
        msg.type === "generate-name" ||
        msg.type === "generate-email" ||
        msg.type === "generate-bio" ||
        msg.type === "generate-job" ||
        msg.type === "generate-phone" ||
        msg.type === "generate-location" ||
        msg.type === "generate-username" ||
        msg.type === "generate-profile"
    ) {
        if (selection.length === 0) {
            figma.notify("Please select one or more text layers.");
            return;
        }

        for (const node of selection) {
            if (node.type === "TEXT") {
                try {
                    await figma.loadFontAsync(node.fontName as FontName);

                    const generators: Record<string, () => string> = {
                        "generate-name": getRandomName,
                        "generate-email": getRandomEmail,
                        "generate-bio": getRandomBio,
                        "generate-job": getRandomJob,
                        "generate-phone": getRandomPhoneNumber,
                        "generate-location": getRandomLocation,
                        "generate-username": getRandomUsername,
                        "generate-profile": () => {
                            const profile = getRandomProfile();
                            return `${profile.name}\n${profile.email}\n${profile.bio}`;
                        },
                    };

                    let value = "";
                    if (generators[msg.type]) {
                        value = generators[msg.type]();
                    }

                    if (value) node.characters = value;
                } catch (err) {
                    figma.notify("Could not load font or update text.");
                }
            }
        }

        figma.notify("Text updated successfully.");
    }

    if (msg.type === "generate-avatar") {
        const avatarUrl = msg.url;
        if (!avatarUrl) {
            figma.notify("No avatar URL provided.");
            return;
        }

        if (selection.length === 0) {
            figma.notify("Select a shape or image frame to apply avatar.");
            return;
        }

        for (const node of selection) {
            if ("fills" in node && node.type !== "TEXT") {
                try {
                    const imageBytes = await fetchImageBytes(avatarUrl);
                    const image = figma.createImage(imageBytes);
                    const fills: ImagePaint[] = [
                        {
                            type: "IMAGE",
                            scaleMode: "FILL",
                            imageHash: image.hash,
                        },
                    ];
                    node.fills = fills;
                } catch (err) {
                    figma.notify("Failed to fetch avatar image.");
                }
            } else {
                figma.notify(
                    "Avatar can only be applied to shape/image layers."
                );
            }
        }

        figma.notify("Avatar applied to canvas.");
    }
};

function getRandomFrom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName(): string {
    return getRandomFrom(names[currentCountry]);
}

function getRandomBio(): string {
    return getRandomFrom(bios[currentCountry]);
}

function getRandomJob(): string {
    return getRandomFrom(jobTitles[currentCountry]);
}

function getRandomPhoneNumber(): string {
    return getRandomFrom(phoneNumbers[currentCountry]);
}

function getRandomLocation(): string {
    return getRandomFrom(locations[currentCountry]);
}

function getRandomUsername(): string {
    const name = getRandomName()
        .toLowerCase()
        .replace(/[^a-z]/g, "");
    const suffix = Math.floor(Math.random() * 1000);
    return `@${name}${suffix}`;
}

function getRandomEmail(): string {
    const name = getRandomName();
    const domains = [
        "gmail.com",
        "yahoo.com",
        "ug.edu.gh",
        "ashesi.edu.gh",
        "outlook.com",
    ];
    const domain = getRandomFrom(domains);
    return `${slugify(name)}@${domain}`;
}

function slugify(name: string): string {
    return (
        name.toLowerCase().replace(/[^a-z]/g, "") +
        Math.floor(Math.random() * 100)
    );
}

function getRandomProfile() {
    return {
        name: getRandomName(),
        email: getRandomEmail(),
        bio: getRandomBio(),
    };
}

async function fetchImageBytes(url: string): Promise<Uint8Array> {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return new Uint8Array(arrayBuffer);
}
