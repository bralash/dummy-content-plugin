import { names, bios, jobTitles, locations, phoneNumbers } from "./data";

figma.showUI(__html__, { width: 300, height: 550 });

figma.ui.onmessage = async (msg) => {
  const selection = figma.currentPage.selection;

  if (
    [
      "generate-name",
      "generate-email",
      "generate-bio",
      "generate-job",
      "generate-phone",
      "generate-location",
      "generate-username",
      "generate-profile"
    ].includes(msg.type)
  ) {
    if (selection.length === 0) {
      figma.notify("Please select one or more text layers.");
      return;
    }

    for (const node of selection) {
      if (node.type === "TEXT") {
        try {
          await figma.loadFontAsync(node.fontName as FontName);

          if (msg.type === "generate-name") {
            node.characters = getRandomName();
          } else if (msg.type === "generate-email") {
            node.characters = getRandomEmail();
          } else if (msg.type === "generate-bio") {
            node.characters = getRandomBio();
          } else if (msg.type === "generate-job") {
            node.characters = getRandomJobTitle();
          } else if (msg.type === "generate-phone") {
            node.characters = getRandomPhoneNumber();
          } else if (msg.type === "generate-location") {
            node.characters = getRandomLocation();
          } else if (msg.type === "generate-username") {
            node.characters = generateUsername(getRandomName());
          } else if (msg.type === "generate-profile") {
            const profile = getRandomProfile();
            node.characters = `${profile.name}\n${profile.email}\n${profile.bio}`;
          }
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
        figma.notify("Avatar can only be applied to shape/image layers.");
      }
    }

    figma.notify("Avatar applied to canvas.");
  }
};

function getRandomName(): string {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomBio(): string {
  return bios[Math.floor(Math.random() * bios.length)];
}

function getRandomJobTitle(): string {
  return jobTitles[Math.floor(Math.random() * jobTitles.length)];
}

function getRandomPhoneNumber(): string {
  const phone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
  return `+233${phone}`;
}

function getRandomLocation(): string {
  return locations[Math.floor(Math.random() * locations.length)];
}

function slugify(name: string): string {
  return (
    name.toLowerCase().replace(/[^a-z]/g, "") +
    Math.floor(Math.random() * 100)
  );
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
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${slugify(name)}@${domain}`;
}

function generateUsername(name: string): string {
  const base = name.toLowerCase().replace(/[^a-z]/g, "");
  const suffix = Math.floor(Math.random() * 9000) + 1000;
  return `@${base}${suffix}`;
}

function getRandomProfile(): {
  name: string;
  email: string;
  bio: string;
} {
  const name = getRandomName();
  return {
    name,
    email: getRandomEmail(),
    bio: getRandomBio(),
  };
}

async function fetchImageBytes(url: string): Promise<Uint8Array> {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}