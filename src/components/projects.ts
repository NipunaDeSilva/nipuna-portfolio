export type GalleryImage = {
    image: string;
    caption: string;
};

export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    highlights: string[];
    gallery?: GalleryImage[];
};

export const projects: Project[] = [
    {
        slug: "venue-vendors",
        title: "Venue Vendors",
        category: "Full-Stack Web Development",
        description:
            "Developed a full-stack venue booking platform as part of a university team project, supporting venue management, hirer applications and booking decisions.",
        image: "/images/venue-vendors/venue-main.png",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs",
        ],
        highlights: [
            "Venue browsing and management",
            "Applicant review and booking decisions",
        ],
        gallery: [
            {
                image: "/images/venue-vendors/Screenshot 2026-05-28 132153.png",
                caption: "Applicant details",
            },
            {
                image: "/images/venue-vendors/Screenshot 2026-06-04 234224.png",
                caption: "Hirer application and applicant details",
            },
            {
                image: "/images/venue-vendors/Screenshot 2026-06-04 235244.png",
                caption: "Venue management and booking decisions",
            },
        ],
    },
    {
        slug: "parabank-testing",
        title: "ParaBank Web Application Testing",
        category: "Software Test Automation",
        description:
            "Developed automated web tests using Java and Selenium WebDriver to validate banking application functionality.",
        image: "/images/parabank-testing/parabank-main.png",
        technologies: [
            "Java",
            "Selenium WebDriver",
            "JUnit",
            "SpiraPlan",
        ],
        highlights: [
            "Automated login and loan request tests",
            "Organised and tracked test cases in SpiraPlan",
        ],
        gallery: [

            {
                image: "/images/parabank-testing/Screenshot 2026-11-13 153408.png",
                caption: "Loan Request test cases covering valid and invalid inputs",
            },
        ],
    },
    {
        slug: "bank-management",
        title: "Bank Management System",
        category: "Unit Testing & Quality Assurance",
        description:
            "Developed a JUnit 5 test suite for Account and Bank classes, focusing on normal, invalid, boundary and edge cases.",
        image: "/images/bank-management/bank-main.png",
        technologies: [
            "Java",
            "JUnit 5",
            "IntelliJ IDEA",
            "SpiraPlan",
        ],
        highlights: [
            "100% line coverage for Account and Bank",
            "100% branch coverage for Account and Bank",
        ],
        gallery: [
            {
                image: "/images/bank-management/Screenshot 2026-09-10 190031.png",
                caption: "JUnit test coverage results for the Account and Bank classes",
            },
        ],
    },
    {
        slug: "cops-and-robbers",
        title: "Cops and Robbers",
        category: "Game Development & Artificial Intelligence",
        description:
            "Developed an original 2D game using Unity and C#, implementing AI agents with Unity ML-Agents.",
        image: "/images/cops-and-robbers/cops-main.png",
        technologies: [
            "Unity",
            "C#",
            "Unity ML-Agents",
            "Reinforcement Learning",
        ],
        highlights: [
            "Implemented reward-based AI behaviour",
            "Analysed cumulative reward training results",
        ],
        gallery: [

            {
                image: "/images/cops-and-robbers/Screenshot 2026-06-03 162525.png",
                caption: "ML agents training progress",
            },
            {
                image: "/images/cops-and-robbers/Screenshot 2026-06-08 133628.png",
                caption: "Final AI agent training performance",
            },
        ],
    },
];

