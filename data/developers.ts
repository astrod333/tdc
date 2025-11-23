export interface Developer {
    name: string;
    twitter: string; // Just the username without the URL
    portfolio: string;
    github?: string | null;
    avatar?: string;
}

export const developers: Developer[] = [
    {
        "name": "Alpha Olomi",
        "twitter": "",
        "portfolio": "https://alphaolomi.dev",
        "github": "alphaolomi",
        "avatar": "https://github.com/alphaolomi.png"
    },
    {
        "name": "Amina bahati kalonge",
        "twitter": "",
        "portfolio": "https://m1n4h.github.io",
        "github": "m1n4h",
        "avatar": "https://github.com/m1n4h.png"
    },
    {
        "name": "Athumani Mwinami",
        "twitter": "",
        "portfolio": "mwinami.github.io",
        "github": "mwinamijr",
        "avatar": "https://github.com/mwinamijr.png"
    },
    {
        "name": "Dadi Nasser Utenga",
        "twitter": "",
        "portfolio": "Dady.ditronics.co.tz",
        "github": "dadyutenga",
        "avatar": "https://github.com/dadyutenga.png"
    },
    {
        "name": "Daniel Josephat",
        "twitter": "",
        "portfolio": "https://danmollel.space",
        "github": "astrod333",
        "avatar": "https://github.com/astrod333.png"
    },
    {
        "name": "DEOGRATIAS GEMINI",
        "twitter": "",
        "portfolio": "https://github.com/deogemini",
        "github": "deogemini",
        "avatar": "https://github.com/deogemini.png"
    },
    {
        "name": "Fadhluilahi Mohammed",
        "twitter": "",
        "portfolio": "megamindame.com",
        "github": "megamindame",
        "avatar": "https://github.com/megamindame.png"
    },
    {
        "name": "Fatima Bakari",
        "twitter": "",
        "portfolio": "https://www.fateemah.fyi/",
        "github": "Fatima1510",
        "avatar": "https://github.com/Fatima1510.png"
    },
    {
        "name": "Ismaili Simba",
        "twitter": "",
        "portfolio": "https://dev.to/ismailisimba",
        "github": "ismailisimba",
        "avatar": "https://github.com/ismailisimba.png"
    },
    {
        "name": "James Mashaka",
        "twitter": "",
        "portfolio": "NA",
        "github": "islandkid-20",
        "avatar": "https://github.com/islandkid-20.png"
    },
    {
        "name": "Joseph Everest",
        "twitter": "",
        "portfolio": "https://joeslab.uk",
        "github": "JoeEverest",
        "avatar": "https://github.com/JoeEverest.png"
    },
    {
        "name": "Leonard Chisokole",
        "twitter": "",
        "portfolio": "https://www.asantedigitals.co.tz",
        "github": "leonard-chisokole-00450851",
        "avatar": "https://github.com/leonard-chisokole-00450851.png"
    },
    {
        "name": "Moses Faustine",
        "twitter": "",
        "portfolio": "https://myportifolio-52a7b.web.app/",
        "github": "m03azy",
        "avatar": "https://github.com/m03azy.png"
    },
    {
        "name": "Sikjunior Mrimi",
        "twitter": "",
        "portfolio": "N/A",
        "github": "meetsik24",
        "avatar": "https://github.com/meetsik24.png"
    },
    {
        "name": "Stephanie Shawa",
        "twitter": "",
        "portfolio": "tephyny.github.io",
        "github": "Tephyny",
        "avatar": "https://github.com/Tephyny.png"
    },
    {
        "name": "Revaycolizer",
        "twitter": "",
        "portfolio": "https://github.com/Revaycolizer",
        "github": "Revaycolizer",
        "avatar": "https://github.com/Revaycolizer.png"
    },
    {
        "name": "DENES MBEZI",
        "twitter": "",
        "portfolio": "https://github.com/denesmbezi",
        "github": "denesmbezi",
        "avatar": "https://github.com/denesmbezi.png"
    },
    {
        "name": "Ultron00x",
        "twitter": "",
        "portfolio": "https://jacob-space.vercel.app",
        "github": "Jeccoman",
        "avatar": "https://github.com/Jeccoman.png"
    },
    {
        "name": "Glory Lazaro Msasalaga",
        "twitter": "",
        "portfolio": "https://veryniceglory.deploy.tz",
        "github": "glorymsasalaga",
        "avatar": "https://github.com/glorymsasalaga.png"
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