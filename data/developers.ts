export interface Developer {
    name: string;
    twitter: string; // Just the username without the URL
    portfolio: string;
    github?: string | null;
}

export const developers: Developer[] = [
    {
        "name": "Alpha Olomi",
        "twitter": "",
        "portfolio": "https://alphaolomi.dev",
        "github": "alphaolomi"
    },
    {
        "name": "Amina bahati kalonge",
        "twitter": "",
        "portfolio": "https://m1n4h.github.io",
        "github": "m1n4h"
    },
    {
        "name": "Athumani Mwinami",
        "twitter": "",
        "portfolio": "mwinami.github.io",
        "github": "mwinamijr"
    },
    {
        "name": "Dadi Nasser Utenga",
        "twitter": "",
        "portfolio": "Dady.ditronics.co.tz",
        "github": "dadyutenga"
    },
    {
        "name": "Daniel Josephat",
        "twitter": "",
        "portfolio": "https://danmollel.space",
        "github": "astrod333"
    },
    {
        "name": "DEOGRATIAS GEMINI",
        "twitter": "",
        "portfolio": "https://github.com/deogemini",
        "github": "deogemini"
    },
    {
        "name": "Fadhluilahi Mohammed",
        "twitter": "",
        "portfolio": "megamindame.com",
        "github": "megamindame"
    },
    {
        "name": "Fatima Bakari",
        "twitter": "",
        "portfolio": "https://www.fateemah.fyi/",
        "github": "Fatima1510"
    },
    {
        "name": "Ismaili Simba",
        "twitter": "",
        "portfolio": "https://dev.to/ismailisimba",
        "github": "ismailisimba"
    },
    {
        "name": "James Mashaka",
        "twitter": "",
        "portfolio": "NA",
        "github": "islandkid-20"
    },
    {
        "name": "Joseph Everest",
        "twitter": "",
        "portfolio": "https://joeslab.uk",
        "github": "JoeEverest"
    },
    {
        "name": "Leonard Chisokole",
        "twitter": "",
        "portfolio": "https://www.asantedigitals.co.tz",
        "github": "leonard-chisokole-00450851"
    },
    {
        "name": "Moses Faustine",
        "twitter": "",
        "portfolio": "https://myportifolio-52a7b.web.app/",
        "github": "m03azy"
    },
    {
        "name": "Sikjunior Mrimi",
        "twitter": "",
        "portfolio": "N/A",
        "github": "meetsik24"
    },
    {
        "name": "Stephanie Shawa",
        "twitter": "",
        "portfolio": "tephyny.github.io",
        "github": "Tephyny"
    },
    {
        "name": "Revaycolizer",
        "twitter": "",
        "portfolio": "https://github.com/Revaycolizer",
        "github": "Revaycolizer"
    },
    {
        "name": "DENES MBEZI",
        "twitter": "",
        "portfolio": "https://github.com/denesmbezi",
        "github": "denesmbezi"
    },
    {
        "name": "Ultron00x",
        "twitter": "",
        "portfolio": "https://jacob-space.vercel.app",
        "github": "Jeccoman"
    },
    {
        "name": "Glory Lazaro Msasalaga",
        "twitter": "",
        "portfolio": "https://veryniceglory.deploy.tz",
        "github": "glorymsasalaga"
    }
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
    return [
        ...developers,
        // ...generatePlaceholderdevelopers(placeholderCount)
    ];
};