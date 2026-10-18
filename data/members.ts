import type { Skills } from "./skills";

export type Member = {
	name: string;
	github: string;
	title?: string;
	location?: string;
	bio?: string;
	avatar?: string;
	skills?: Skills;
	links?: {
		website?: string;
		linkedin?: string;
		x?: string;
		email?: string;
	};
	openToWork?: boolean;
	hireContact?: string;
};

export const members: Member[] = [
	{
		name: "Alpha Olomi",
		github: "alphaolomi",
		title: "Software Engineer",
		location: "Tanzania",
		bio: "Software engineer and open source contributor in Tanzania, building payment tools at Openpesa plus Laravel packages, Flutter apps and on-device AI experiments.",
		skills: {
			languages: ["PHP", "TypeScript", "JavaScript", "Dart", "Python", "Java"],
			frontend: ["React", "Next.js"],
			backend: ["Laravel", "REST APIs"],
			mobile: ["Flutter"],
			ai: ["LLMs"],
		},
		links: {
			website: "https://alphaolomi.dev",
			linkedin: "https://www.linkedin.com/in/alphaolomi",
			x: "alphaolomi",
		},
		openToWork: true,
	},
	{
		name: "Amina Bahati Kalonge",
		github: "m1n4h",
		title: "Full Stack Developer",
		bio: "Builds web, mobile and data projects, including Flutter apps, Spring Boot and Flask systems, and machine learning tools for maintenance and supply chain forecasting.",
		skills: {
			languages: ["PHP", "TypeScript", "Dart", "JavaScript", "Python", "Java"],
			backend: ["Spring Boot", "Flask"],
			mobile: ["Flutter", "Android"],
			data: ["PostgreSQL"],
			ai: ["Machine Learning"],
		},
	},
	{
		name: "Athumani Mwinami",
		github: "mwinamijr",
		title: "Full Stack Developer",
		location: "Dar es Salaam",
		bio: "Full stack developer at Techdometz in Dar es Salaam, building school and hospital management systems with Django, FastAPI and React, plus mobile apps in React Native.",
		skills: {
			languages: ["TypeScript", "Python", "JavaScript"],
			frontend: ["React"],
			backend: ["Django", "FastAPI", "Node.js", "REST APIs"],
			mobile: ["React Native", "Expo"],
		},
		links: {
			website: "https://mwinamijr.github.io",
			x: "mwinamijr",
		},
		openToWork: true,
	},
	{
		name: "Dadi Nasser Utenga",
		github: "dadyutenga",
		title: "Backend Developer",
		location: "Tanzania",
		bio: "Backend developer in Tanzania at Big Lite Code, working mostly in Go with Django, React and Linux tooling, plus Windows apps in C# and Android apps in Kotlin.",
		skills: {
			languages: ["Go", "PHP", "TypeScript", "C#", "Shell", "Kotlin"],
			frontend: ["React"],
			backend: ["Django"],
			mobile: ["Android"],
			devops: ["Linux"],
		},
		links: {
			x: "DadyUtenga",
		},
	},
	{
		name: "Daniel Josephat",
		github: "astrod333",
		title: "Full Stack Engineer",
		bio: "Full stack engineer who cares about design, building React, Next.js and Svelte interfaces, React Native apps and AI tools, plus a motion focused component library.",
		skills: {
			languages: ["TypeScript", "JavaScript"],
			frontend: ["React", "Next.js", "Svelte", "Tailwind CSS"],
			mobile: ["React Native"],
			design: ["UI Design"],
			ai: ["LLMs"],
		},
		links: {
			website: "https://astrop.ing",
			x: "uiastro",
		},
		openToWork: true,
	},
	{
		name: "Deogratias Gemini",
		github: "deogemini",
		title: "Software Developer",
		location: "Dar es Salaam",
		bio: "Software developer and entrepreneur in Dar es Salaam building web systems with Laravel and Vue, and also offering software testing, QA and project management.",
		skills: {
			languages: ["PHP", "JavaScript", "Java", "TypeScript", "Python", "Dart"],
			frontend: ["Vue"],
			backend: ["Laravel", "Spring Boot", "Node.js"],
			mobile: ["Flutter"],
		},
		links: {
			website: "https://deog-portfolio.netlify.app",
			linkedin: "https://www.linkedin.com/in/deogratias-gemini-bb53a9188",
			x: "Deogemini99",
		},
		openToWork: true,
	},
	{
		name: "Fadhluilahi Mohammed",
		github: "megamindame",
		title: "Software Developer",
		bio: "Software developer with over four years of experience in .NET, C# and web apps, including Azure cloud work, desktop apps and a Docker based audio streaming platform.",
		skills: {
			languages: ["C#", "PHP", "TypeScript", "JavaScript", "Shell", "SQL"],
			frontend: ["React", "Svelte"],
			backend: [".NET", "Laravel"],
			design: ["Blender"],
			devops: ["Azure", "Docker"],
			data: ["MySQL", "SQL Server"],
		},
		links: {
			website: "https://megamindame.com",
		},
		openToWork: true,
	},
	{
		name: "Fatima Bakari",
		github: "Fatima1510",
		bio: "Works at Cybercode Africa. Public projects include a credit card fraud detection model, a neural network visualiser, a USSD app and a Tanzania university explorer.",
		skills: {
			languages: ["Python"],
			backend: ["FastAPI"],
			ai: ["Machine Learning"],
		},
	},
	{
		name: "Ismaili Simba",
		github: "ismailisimba",
		title: "Web Developer",
		location: "Tanzania",
		bio: "JavaScript developer building web tools, AI powered apps and serverless LLM deployments on Google Cloud, and writing about the work on DEV.",
		skills: {
			languages: ["JavaScript", "Java", "CSS", "HTML"],
			backend: ["Node.js", "Express"],
			devops: ["Google Cloud", "Docker"],
			ai: ["LLMs"],
		},
		links: {
			website: "https://dev.to/ismailisimba",
			x: "isma95fb",
		},
		openToWork: true,
	},
	{
		name: "James Mashaka",
		github: "islandkid-20",
		title: "Backend Developer",
		location: "Dar es Salaam",
		bio: "Backend developer at Appziro in Dar es Salaam focused on Django and Django REST Framework, with FastAPI services, Mpesa and SMS integrations and Firebase messaging.",
		skills: {
			languages: ["Python", "HTML"],
			backend: ["Django", "FastAPI", "REST APIs"],
			devops: ["Docker", "Firebase"],
			data: ["MongoDB", "MySQL"],
		},
	},
	{
		name: "Joseph Everest",
		github: "JoeEverest",
		title: "Full Stack Developer",
		location: "New York",
		bio: "Full stack and founding engineer building React, Next.js and NestJS products, with React Native apps and AI agent tooling.",
		skills: {
			languages: ["TypeScript", "JavaScript", "Java", "PHP"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			backend: ["Node.js", "NestJS"],
			mobile: ["React Native"],
			devops: ["AWS", "Azure"],
			data: ["MongoDB", "MySQL"],
			ai: ["LLMs"],
		},
		links: {
			website: "https://www.joeslab.uk",
			linkedin: "https://www.linkedin.com/in/joeeverest165",
			x: "JoeEverest165",
		},
		openToWork: true,
	},
	{
		name: "Leonard Chisokole",
		github: "leonard-chisokole-00450851",
		links: {
			website: "https://asantedigitals.co.tz",
		},
	},
	{
		name: "Moses Faustine",
		github: "m03azy",
		title: "Junior Web Developer",
		location: "Arusha",
		bio: "Junior web developer in Arusha building Laravel business systems such as sales and supply management, plus React and Next.js projects styled with Tailwind CSS.",
		skills: {
			languages: ["PHP", "TypeScript"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			backend: ["Laravel", "Express"],
		},
		links: {
			website: "https://myportifolio-52a7b.web.app",
		},
	},
	{
		name: "Sikjunior Mrimi",
		github: "meetsik24",
		title: "Full Stack Developer",
		location: "Dar es Salaam",
		bio: "Builds on the Briq SMS and messaging platform in Dar es Salaam, with Next.js and React front ends and FastAPI or Node.js back ends.",
		skills: {
			languages: ["TypeScript", "Python", "JavaScript"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			backend: ["FastAPI", "Node.js"],
		},
	},
	{
		name: "Stephanie Shawa",
		github: "Tephyny",
		title: "Front End Developer",
		location: "Arusha",
		bio: "Front end developer and data analyst in Arusha who also facilitates projects and teaches, working with Python, JavaScript, SQL and Pandas.",
		skills: {
			languages: ["JavaScript", "Python", "SQL", "HTML", "CSS"],
			data: ["Data Analysis"],
		},
		links: {
			website: "https://stephshawa.com",
			linkedin: "https://www.linkedin.com/in/stephanie-shawa-152442319",
		},
	},
	{
		name: "Revaycolizer",
		github: "Revaycolizer",
		title: "Full Stack Developer",
		location: "Tanzania",
		bio: "Tanzania based developer exploring many stacks, from Next.js and Vue front ends to Phoenix, Rust and C# back ends, plus React Native apps and Supabase projects.",
		skills: {
			languages: ["TypeScript", "JavaScript", "Rust", "C#", "PHP", "Elixir"],
			frontend: ["Next.js", "React", "Vue", "Tailwind CSS"],
			backend: ["Phoenix"],
			mobile: ["React Native", "Expo"],
			devops: ["Supabase"],
		},
		openToWork: true,
	},
	{
		name: "Denes Mbezi",
		github: "denesmbezi",
		title: "Machine Learning Engineer",
		location: "Dar es Salaam",
		bio: "Data scientist and machine learning engineer in Dar es Salaam building predictive models, AI agents and voice tools, served through FastAPI and Django apps.",
		skills: {
			languages: ["Python"],
			backend: ["FastAPI", "Django"],
			ai: ["Machine Learning", "LLMs", "NLP", "Computer Vision"],
		},
		links: {
			x: "denes_mbezi",
		},
	},
	{
		name: "Jacob Mwatonoka",
		github: "Jeccoman",
		title: "Full Stack Engineer",
		location: "Dar es Salaam",
		bio: "Full stack software engineer in Dar es Salaam building web, mobile and AI products with React, Next.js, React Native, NestJS and Laravel, plus microservice and CLI tooling.",
		skills: {
			languages: ["TypeScript", "JavaScript", "Dart", "Kotlin", "Shell"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			backend: ["NestJS", "Laravel", "Node.js"],
			mobile: ["React Native", "Flutter"],
			devops: ["Docker", "Kubernetes"],
			data: ["PostgreSQL", "MongoDB", "Redis"],
			ai: ["LLMs"],
		},
		links: {
			website: "https://jacob-space.vercel.app",
		},
	},
	{
		name: "Glory Lazaro Msasalaga",
		github: "glorymsasalaga",
		title: "AI/ML Engineer",
		location: "Dar es Salaam",
		bio: "Software developer and AI/ML engineer in Dar es Salaam building web apps and intelligent systems, from health monitoring models to a Swahili voice assistant, with Django and Flutter.",
		skills: {
			languages: ["Python", "Dart", "JavaScript"],
			frontend: ["React"],
			backend: ["Django"],
			mobile: ["Flutter"],
			devops: ["Docker", "AWS"],
			data: ["PostgreSQL", "MongoDB", "Data Analysis"],
			ai: ["Machine Learning", "NLP"],
		},
		links: {
			website: "https://veryniceglory.deploy.tz",
			linkedin: "https://www.linkedin.com/in/glorymsasalaga",
			x: "Veryniceglory",
		},
		openToWork: true,
	},
	{
		name: "Paul John",
		github: "namestarlit",
		title: "Software Engineer",
		location: "Tanzania",
		bio: "Backend engineer behind ZanLIS, the national laboratory information system for Zanzibar, building test result exchange, equipment integration and lab reporting.",
		skills: {
			languages: ["Python", "C", "Shell", "JavaScript"],
			backend: ["Flask", "Node.js", "REST APIs"],
			devops: ["Linux"],
			data: ["MongoDB", "Data Engineering"],
		},
		links: {
			website: "https://namestarlit.com",
			linkedin: "https://linkedin.com/in/namestarlit",
			x: "namestarlit",
		},
	},
	{
		name: "Innocent Masuki",
		github: "innocentmasuki",
		title: "Front End Engineer",
		location: "Dar es Salaam",
		bio: "Front end engineer with over seven years of experience building web and mobile interfaces, currently crafting the UI and UX for AI powered payroll, rota and accounting products.",
		skills: {
			languages: ["TypeScript", "JavaScript"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			mobile: ["React Native", "iOS", "Android"],
			design: ["Figma", "UI Design", "UX Design"],
			devops: ["Linux"],
			data: ["PostgreSQL", "MySQL", "Redis"],
		},
		links: {
			website: "https://innocentmasuki.me",
			linkedin: "https://www.linkedin.com/in/innocentmasuki",
			x: "innocentmasuki",
		},
	},
	{
		name: "Abdulkarim Hassan",
		github: "Flitchen",
		title: "Full-Stack Software Developer",
		location: "Dar es Salaam, Tanzania",
		bio: "Full-stack software developer specializing in building scalable web, mobile, and desktop applications. Passionate about creating impactful SaaS products, solving real-world problems and delivering seamless user experiences.",
		skills: {
			languages: ["JavaScript", "TypeScript", "PHP", "SQL"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			backend: ["Node.js", "NestJS", "Laravel", "REST APIs", "Prisma ORM"],
			mobile: ["React Native", "Expo"],
			data: ["MySQL", "PostgreSQL", "MongoDB"],
			desktop: ["Tauri"],
		},
		links: {
			website: "https://flitchen.dev",
		},
		openToWork: true,
		hireContact: "abdulkarimabbas088@gmail.com",
	},
	{
		name: "Elisha Gerson",
		github: "somebody1011",
		links: {
			website: "https://somebody1011.github.io/",
		},
	},
	{
		name: "YASINI KASIDI",
		github: "Sempaicassidy",
		links: {
			website: "https://www.haulaenterprises.co.tz",
		},
	},
	{
		name: "Happiness Neema Jr.",
		github: "appjr5",
		title: "Software Engineer",
		location: "Dar es Salaam",
		bio: "Backend developer with a nack for cool AI softwares.",
		skills: {
			languages: ["HTML"],
			frontend: ["Tailwind CSS"],
			backend: ["FastAPI"],
			mobile: ["Flutter"],
			data: ["PostgreSQL", "MySQL", "Redis"],
			ai: ["Machine Learning", "Chatbots", "Huggingface LLMs"],
			devops: ["Linux"],
		},
		links: {
			linkedin: "https://linkedin.com/in/happinessmpazi",
		},
		openToWork: true,
		hireContact: "appjr360@gmail.com",
	},
	{
		name: "Albert Mwasisoba",
		github: "albizzy",
		title: "Front-end Engineer",
		location: "Dar es Salaam",
		bio: "Front-end engineer with over five years of experience turning product ideas and ambitious designs into web and mobile experiences. Mostly TypeScript, sometimes with questionable amounts of confidence.",
		skills: {
			languages: ["TypeScript", "JavaScript"],
			frontend: ["React", "Next.js", "Tailwind CSS"],
			mobile: ["React Native", "Flutter", "Android"],
			design: ["Figma", "UI Design", "UX Design"],
			devops: ["Linux"],
			data: ["PostgreSQL", "MySQL"],
		},
		links: {
			website: "https://albertmwasisoba.vercel.app/",
			linkedin: "https://www.linkedin.com/in/albertmwasisoba",
			x: "iambizzy19",
		},
	},
];
