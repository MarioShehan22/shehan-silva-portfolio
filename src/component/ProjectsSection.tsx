import { useMemo, useState } from "react";

type TabKey = "all" | "web" | "mobile" | "ai";

type Project = {
    title: string;
    description: string;
    categories: TabKey[]; // used for filtering (web/mobile/ai)
    tags: string[];
    emoji: string;
    gradient: string; // tailwind gradient classes
    featured?: boolean;
    links?: {
        github?: string;
        demo?: string;
        caseStudy?: string;
    };
};

function ProjectsSection() {
    const [activeTab, setActiveTab] = useState<TabKey>("all");

    const projects: Project[] = useMemo(
        () => [
            {
                title: "Smart-Stock Prime Inventory Management System",
                description:
                    "Full-stack inventory management system for tracking products, stock levels, suppliers, and sales with an admin dashboard and REST API.",
                categories: ["web"],
                tags: ["React", "Node.js", "Express", "MongoDB"],
                emoji: "📦",
                gradient: "from-purple-600 to-pink-600",
                // featured: true,
                links: {
                    github:
                        "https://github.com/MarioShehan22/Smart-Stock-Prime-Inventory-Management-System",
                },
            },
            {
                title: "Vehicle Parking (Smart Parking System)",
                description:
                    "IoT-based smart parking management system using ESP8266/Arduino + Node.js + MongoDB + React to monitor slots and manage parking in real time.",
                categories: ["web"],
                tags: ["ESP8266", "Node.js", "MongoDB", "React"],
                emoji: "🚗",
                gradient: "from-blue-600 to-cyan-600",
                featured: true,
                links: {
                    github: "https://github.com/MarioShehan22/Vehicle_Parking",
                },
            },
            {
                title: "Nutrition-Fitness (NutriFit)",
                description:
                    "Health & fitness tracking web app for logging meals and workouts, calculating BMI/macros, and generating personalized nutrition insights.",
                categories: ["web", "ai"],
                tags: ["MERN", "React", "Node.js", "MongoDB"],
                emoji: "🥗",
                gradient: "from-green-500 to-emerald-600",
                featured: true,
                links: {
                    // change this to your exact repo link if different
                    github: "https://github.com/MarioShehan22/Nutrition-Fitness",
                },
            },
            {
                title: "Richlook Web Project",
                description:
                    "Full-stack web application with a separate frontend and backend for managing core business workflows, built with modern web technologies.",
                categories: ["web"],
                tags: ["Frontend", "Backend", "JavaScript"],
                emoji: "💎",
                gradient: "from-orange-500 to-red-500",
                links: {
                    github: "https://github.com/MarioShehan22/richlook_Web_Project",
                },
            },
            {
                title: "MERN Supply & Demand App",
                description:
                    "MERN-based supply & demand management app for listing items, matching requests, tracking availability, and managing records through a responsive dashboard.",
                categories: ["web"],
                tags: ["MongoDB", "Express", "React", "Node.js"],
                emoji: "📈",
                gradient: "from-teal-500 to-lime-500",
                links: {
                    // change this if your repo name is different
                    github: "https://github.com/MarioShehan22/MERN_Supply_Demand",
                },
            },
        ],
        []
    );


    const isVisible = (categories: TabKey[]) =>
        activeTab === "all" || categories.includes(activeTab);

    const featured = projects.filter((p) => p.featured && isVisible(p.categories));
    const others = projects.filter((p) => !p.featured && isVisible(p.categories));

    const tabLabel = (tab: TabKey) =>
        tab === "all" ? "All" : tab === "web" ? "Web Apps" : tab === "mobile" ? "Mobile" : "AI / Automation";

    const ProjectLinks = ({ links }: { links?: Project["links"] }) => {
        if (!links) return null;

        return (
            <div className="flex gap-4">
                {links.demo && (
                    <a
                        href={links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                )}

                {links.caseStudy && (
                    <a
                        href={links.caseStudy}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span>Case Study</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                )}

                {links.github && (
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span>GitHub</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                )}
            </div>
        );
    };

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Showcasing some of my recent work that demonstrates technical excellence and creative problem-solving.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-3 flex-wrap mb-12">
                    {(["all", "web", "mobile", "ai"] as TabKey[]).map((tab) => (
                        <button
                            key={tab}
                            className={`project-tab px-4 py-2 rounded-full text-sm font-semibold ${
                                activeTab === tab ? "bg-purple-600 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tabLabel(tab)}
                        </button>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {featured.map((p) => (
                        <div
                            key={p.title}
                            className="glass p-8 rounded-3xl hover:scale-105 transition-transform group project-card"
                        >
                            <div
                                className={`aspect-video bg-gradient-to-br ${p.gradient} rounded-2xl mb-6 flex items-center justify-center`}
                            >
                                <div className="text-6xl">{p.emoji}</div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                            <p className="text-gray-300 mb-6">{p.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-black bg-opacity-10 rounded-full text-gray-200 text-sm"
                                    >{t}
                                    </span>
                                ))}
                            </div>

                            <ProjectLinks links={p.links} />
                        </div>
                    ))}
                </div>

                {/* Additional Projects */}
                {others.length === 0 ? (
                    <div className="text-center text-gray-400">No projects in this category yet.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {others.map((p) => (
                            <div
                                key={p.title}
                                className="glass p-6 rounded-2xl hover:scale-105 transition-transform project-card"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${p.gradient} rounded-2xl flex items-center justify-center mb-4`}
                                >
                                    <div className="text-2xl">{p.emoji}</div>
                                </div>

                                <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                                <p className="text-gray-300 text-sm mb-4">{p.description}</p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {p.tags.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-black bg-opacity-10 rounded-full text-gray-200 text-xs"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>

                                <ProjectLinks links={p.links} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection;
