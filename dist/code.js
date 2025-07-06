const names = [
  "Kwame Boakye",
  "Ama Serwaa",
  "Yaw Antwi",
  "Esi Aba",
  "Kojo Mensah",
  "Akua Owusu",
  "Kofi Sarpong",
  "Adwoa Asantewaa",
  "Yaw Osei",
  "Afia Boateng",
  "Maame Efua",
  "Kwabena Nkrumah",
  "Nana Yaw",
  "Serwaa Akoto",
  "Yaw Appiah",
  "Afua Gifty",
  "Kwaku Manu",
  "Abena Konadu",
  "Adu Sarfo",
  "Clementina Naa",
  "Kojo Antwi",
  "Akosua Abrafi",
  "Yaw Sarkodie",
  "Ama Tawia",
  "Ebenezer Teye",
  "Afi Agyeiwaa",
  "Sarpong Agyemang",
  "Yaw Mensima",
  "Abena Danso",
  "Kwesi Oppong",
  "Akua Sarpoma",
  "Yaw Ofori",
  "Afia Owusuaa",
  "Kojo Frimpong",
  "Esi Sika"
];
const bios = [
  "Loves waakye and slow jams.",
  "Accra-born. Always online.",
  "Designing screens & chasing dreams.",
  "Friday vibes and fufu nights.",
  "Building apps and eating kelewele.",
  "Tech bro, but with Ghanaian jollof.",
  "Twi speaker, UI tweaker.",
  "Creative soul from Kumasi.",
  "Fixing designs one pixel at a time.",
  "Part-time designer, full-time foodie.",
  "UX for breakfast, light soup for dinner.",
  "Design dey bee, chale.",
  "Trying not to break the design system.",
  "Sometimes I prototype in my sleep.",
  "Living for free WiFi and good vibes.",
  "Cape Coast raised, globally made.",
  "Pixel pusher with a thing for plantain.",
  "Figma during the day, Netflix at night.",
  "Smooth with grids, rough with network.",
  "Design meets Ghana spice — that's me."
];

figma.showUI(__html__, { width: 300, height: 460 });
figma.ui.onmessage = async (msg) => {
  const selection = figma.currentPage.selection;
  if (msg.type === "generate-name" || msg.type === "generate-email" || msg.type === "generate-bio" || msg.type === "generate-profile") {
    if (selection.length === 0) {
      figma.notify("Please select one or more text layers.");
      return;
    }
    for (const node of selection) {
      if (node.type === "TEXT") {
        try {
          await figma.loadFontAsync(node.fontName);
          if (msg.type === "generate-name") {
            node.characters = getRandomName();
          } else if (msg.type === "generate-email") {
            node.characters = getRandomEmail();
          } else if (msg.type === "generate-bio") {
            node.characters = getRandomBio();
          } else if (msg.type === "generate-profile") {
            const profile = getRandomProfile();
            node.characters = `${profile.name}
${profile.email}
${profile.bio}`;
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
          const fills = [
            {
              type: "IMAGE",
              scaleMode: "FILL",
              imageHash: image.hash
            }
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
function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}
function getRandomBio() {
  return bios[Math.floor(Math.random() * bios.length)];
}
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z]/g, "") + Math.floor(Math.random() * 100);
}
function getRandomEmail() {
  const name = getRandomName();
  const domains = [
    "gmail.com",
    "yahoo.com",
    "ug.edu.gh",
    "ashesi.edu.gh",
    "outlook.com"
  ];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${slugify(name)}@${domain}`;
}
function getRandomProfile() {
  const name = getRandomName();
  return {
    name,
    email: getRandomEmail(),
    bio: getRandomBio()
  };
}
async function fetchImageBytes(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}
