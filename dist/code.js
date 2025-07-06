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
const jobTitles = [
  "UX Designer",
  "UI Designer",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Product Designer",
  "Data Analyst",
  "Data Scientist",
  "Mobile App Developer",
  "DevOps Engineer",
  "AI Engineer",
  "Machine Learning Engineer",
  "Graphic Designer",
  "Visual Designer",
  "Creative Director",
  "Marketing Specialist",
  "Content Strategist",
  "SEO Analyst",
  "Software Engineer",
  "QA Engineer",
  "Cloud Architect",
  "Database Administrator",
  "Web Developer",
  "Technical Writer",
  "IT Support Specialist",
  "Scrum Master",
  "Project Manager",
  "Product Manager",
  "Systems Analyst",
  "Security Analyst",
  "Solutions Architect",
  "AR/VR Designer",
  "Video Editor",
  "Brand Designer",
  "Motion Designer",
  "Business Analyst",
  "Game Developer",
  "CRM Specialist",
  "eCommerce Manager",
  "Community Manager",
  "UX Researcher",
  "HR Manager",
  "Recruiter",
  "Digital Marketer",
  "Social Media Manager",
  "Creative Technologist",
  "Innovation Lead",
  "Technical Lead",
  "Customer Support Engineer",
  "Technical Account Manager",
  "Design Systems Lead",
  "Accessibility Specialist",
  "Penetration Tester",
  "Cloud Security Engineer",
  "SRE (Site Reliability Engineer)",
  "Network Engineer",
  "Blockchain Developer",
  "Embedded Systems Engineer",
  "Animation Specialist",
  "VR Developer",
  "3D Modeler",
  "Legal Consultant",
  "AI Prompt Engineer",
  "IT Auditor",
  "Cybersecurity Specialist",
  "Helpdesk Agent",
  "Platform Engineer",
  "No-code Developer",
  "Low-code Developer",
  "Game Tester",
  "Unity Developer",
  "Unreal Developer",
  "Firmware Engineer",
  "Simulation Engineer",
  "Creative Producer",
  "Growth Marketer",
  "UX Copywriter",
  "Brand Strategist",
  "Innovation Consultant",
  "Quality Assurance Tester",
  "Customer Success Manager",
  "Support Analyst",
  "Interaction Designer",
  "Storyteller",
  "Frontend Architect",
  "Digital Illustrator",
  "Infographic Designer",
  "Technical Evangelist",
  "UI Engineer",
  "API Developer",
  "Design Educator",
  "Webflow Developer",
  "Notion Specialist",
  "Chatbot Designer",
  "Prompt Designer",
  "Generative AI Designer",
  "Web3 Developer",
  "Smart Contract Developer",
  "Figma Plugin Developer",
  "AI Trainer",
  "Voice UX Designer",
  "Creative Coder",
  "Product Illustrator"
];
const locations = [
  "Accra, Ghana",
  "Kumasi, Ghana",
  "Tamale, Ghana",
  "Takoradi, Ghana",
  "Cape Coast, Ghana",
  "Sunyani, Ghana",
  "Ho, Ghana",
  "Bolgatanga, Ghana",
  "Wa, Ghana",
  "Tema, Ghana",
  "Kasoa, Ghana",
  "Koforidua, Ghana",
  "Nkawkaw, Ghana",
  "Techiman, Ghana",
  "Madina, Ghana",
  "Ashaiman, Ghana",
  "Swedru, Ghana",
  "Obuasi, Ghana",
  "Konongo, Ghana",
  "Akim Oda, Ghana",
  "Sekondi, Ghana",
  "Nsawam, Ghana",
  "Winneba, Ghana",
  "Suhum, Ghana",
  "Dormaa Ahenkro, Ghana",
  "Bibiani, Ghana",
  "Navrongo, Ghana",
  "Prestea, Ghana",
  "Goaso, Ghana",
  "Ejura, Ghana",
  "London, UK",
  "New York, USA",
  "Berlin, Germany",
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Nairobi, Kenya",
  "Johannesburg, South Africa",
  "Kigali, Rwanda",
  "Paris, France",
  "Tokyo, Japan",
  "Toronto, Canada",
  "Dubai, UAE",
  "Istanbul, Turkey",
  "Cairo, Egypt",
  "Madrid, Spain",
  "Barcelona, Spain",
  "Lisbon, Portugal",
  "Brussels, Belgium",
  "Amsterdam, Netherlands",
  "Rome, Italy",
  "Chicago, USA",
  "Los Angeles, USA",
  "San Francisco, USA",
  "Vancouver, Canada",
  "Ottawa, Canada",
  "Abidjan, Ivory Coast",
  "Ouagadougou, Burkina Faso",
  "Yaoundé, Cameroon",
  "Lomé, Togo",
  "Bamako, Mali",
  "Monrovia, Liberia",
  "Dakar, Senegal",
  "Cotonou, Benin",
  "Banjul, Gambia",
  "Freetown, Sierra Leone",
  "Port Harcourt, Nigeria",
  "Benin City, Nigeria",
  "Ilorin, Nigeria",
  "Ibadan, Nigeria",
  "Zaria, Nigeria",
  "Uyo, Nigeria",
  "Kano, Nigeria",
  "Kaduna, Nigeria",
  "Enugu, Nigeria",
  "Warri, Nigeria",
  "Owerri, Nigeria",
  "Abeokuta, Nigeria",
  "Awka, Nigeria",
  "Onitsha, Nigeria",
  "Kumawu, Ghana",
  "Ada, Ghana",
  "Hohoe, Ghana",
  "Akatsi, Ghana",
  "Aflao, Ghana",
  "Axim, Ghana",
  "Tarkwa, Ghana",
  "Elmina, Ghana",
  "Yendi, Ghana",
  "Wulensi, Ghana",
  "Bawku, Ghana",
  "Nzulezu, Ghana",
  "Sogakope, Ghana",
  "Anloga, Ghana",
  "Berekum, Ghana",
  "Aburi, Ghana",
  "Akim Swedru, Ghana",
  "Begoro, Ghana",
  "Kwahu, Ghana",
  "Donkorkrom, Ghana",
  "Keta, Ghana"
];
const phoneNumbers = [
  "0241234567",
  "0549876543",
  "0273456789",
  "0201239876",
  "0504567890",
  "0261112233",
  "0559988776",
  "0234567891",
  "0591122334",
  "0283344556",
  "0244455667",
  "0547766554",
  "0278899001",
  "0209988776",
  "0506677889",
  "0262233445",
  "0553344556",
  "0231122334",
  "0595566778",
  "0289988776"
];

figma.showUI(__html__, { width: 300, height: 550 });
figma.ui.onmessage = async (msg) => {
  const selection = figma.currentPage.selection;
  if ([
    "generate-name",
    "generate-email",
    "generate-bio",
    "generate-job",
    "generate-phone",
    "generate-location",
    "generate-username",
    "generate-profile"
  ].includes(msg.type)) {
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
function getRandomJobTitle() {
  return jobTitles[Math.floor(Math.random() * jobTitles.length)];
}
function getRandomPhoneNumber() {
  const phone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
  return `+233${phone}`;
}
function getRandomLocation() {
  return locations[Math.floor(Math.random() * locations.length)];
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
function generateUsername(name) {
  const base = name.toLowerCase().replace(/[^a-z]/g, "");
  const suffix = Math.floor(Math.random() * 9e3) + 1e3;
  return `@${base}${suffix}`;
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
