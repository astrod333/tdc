export interface Developer {
  name: string;
  twitter: string; // Just the username without the URL
  portfolio: string;
  github?: string | null;
  avatar?: string;
}

export const developers: Developer[] = [
  {
    name: "Alpha Olomi",
    twitter: "",
    portfolio: "https://alphaolomi.dev",
    github: "alphaolomi",
  },
  {
    name: "Amina bahati kalonge",
    twitter: "",
    portfolio: "https://m1n4h.github.io",
    github: "m1n4h",
  },
  {
    name: "Athumani Mwinami",
    twitter: "",
    portfolio: "https://mwinami.github.io",
    github: "mwinamijr",
    avatar: "https://github.com/mwinamijr.png",
  },
  {
    name: "Dadi Nasser Utenga",
    twitter: "",
    portfolio: "https://Dady.ditronics.co.tz",
    github: "dadyutenga",
    avatar: "https://github.com/dadyutenga.png",
  },
  {
    name: "Daniel Josephat",
    twitter: "",
    portfolio: "https://danmollel.space",
    github: "astrod333",
  },
  {
    name: "DEOGRATIAS GEMINI",
    twitter: "",
    portfolio: "https://github.com/deogemini",
    github: "deogemini",
  },
  {
    name: "Fadhluilahi Mohammed",
    twitter: "",
    portfolio: "https://megamindame.com",
    github: "megamindame",
    avatar: "https://github.com/megamindame.png",
  },
  {
    name: "Fatima Bakari",
    twitter: "",
    portfolio: "https://www.fateemah.fyi/",
    github: "Fatima1510",
  },
  {
    name: "Ismaili Simba",
    twitter: "",
    portfolio: "https://dev.to/ismailisimba",
    github: "ismailisimba",
  },
  {
    name: "James Mashaka",
    twitter: "",
    portfolio: "#",
    github: "islandkid-20",
    avatar: "https://github.com/islandkid-20.png",
  },
  {
    name: "Joseph Everest",
    twitter: "",
    portfolio: "https://joeslab.uk",
    github: "JoeEverest",
  },
  {
    name: "Leonard Chisokole",
    twitter: "",
    portfolio: "https://www.asantedigitals.co.tz",
    github: "leonard-chisokole-00450851",
  },
  {
    name: "Moses Faustine",
    twitter: "",
    portfolio: "https://myportifolio-52a7b.web.app/",
    github: "m03azy",
  },
  {
    name: "Sikjunior Mrimi",
    twitter: "",
    portfolio: "#",
    github: "meetsik24",
    avatar: "https://github.com/meetsik24.png",
  },
  {
    name: "Stephanie Shawa",
    twitter: "",
    portfolio: "https://tephyny.github.io",
    github: "Tephyny",
    avatar: "https://github.com/Tephyny.png",
  },
  {
    name: "Revaycolizer",
    twitter: "",
    portfolio: "https://github.com/Revaycolizer",
    github: "Revaycolizer",
  },
  {
    name: "DENES MBEZI",
    twitter: "",
    portfolio: "https://github.com/denesmbezi",
    github: "denesmbezi",
  },
  {
    name: "Ultron00x",
    twitter: "",
    portfolio: "https://jacob-space.vercel.app",
    github: "Jeccoman",
  },
  {
    name: "Glory Lazaro Msasalaga",
    twitter: "",
    portfolio: "https://veryniceglory.deploy.tz",
    github: "glorymsasalaga",
  },
  {
    name: "Paul John",
    twitter: "namestarlit",
    portfolio: "https://namestarlit.com",
    github: "namestarlit",
  },
];

// simple placeholders : )
export const generatePlaceholderdevelopers = (count: number): Developer[] => {
  return Array.from({ length: count }).map((_, index) => ({
    name: `Developer ${index + developers.length + 1}`,
    twitter: `Developer${index + developers.length + 1}`,
    portfolio: `https://Developer${index + developers.length + 1}.dev`,
    github: null,
  }));
};

export const getAlldevelopers = (placeholderCount = 15): Developer[] => {
  const allDevs = [
    ...developers,
    // ...generatePlaceholderdevelopers(placeholderCount)
  ];

  // Sort alphabetically by name (case-insensitive)
  return allDevs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};
