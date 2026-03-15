import { useState, useEffect, useRef } from "react";

type TabKey = "all" | "web" | "mobile" | "ai";

type ProjectDetail = {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    categories: TabKey[];
    tags: string[];
    emoji: string;
    gradient: string;
    thumbnailUrl?: string;
    accentColor: string;
    featured?: boolean;
    links?: {
        github?: string;
        demo?: string;
        caseStudy?: string;
    };
    highlights: { icon: string; label: string; value: string }[];
    features: { title: string; description: string }[];
    techStack: { name: string; role: string }[];
    screenshots: string[];
};

const projects: ProjectDetail[] = [
    // {
    //     title: "Smart-Stock Prime",
    //     subtitle: "Inventory Management System",
    //     description: "Full-stack inventory management system for tracking products, stock levels, suppliers, and sales.",
    //     longDescription: "A comprehensive inventory management platform built to streamline operations for businesses of all sizes. Features real-time stock monitoring, automated low-stock alerts, supplier relationship management, and detailed sales analytics through an intuitive admin dashboard. The REST API enables seamless integration with third-party tools and mobile applications.",
    //     categories: ["web"],
    //     tags: ["React", "Node.js", "Express", "MongoDB"],
    //     emoji: "",
    //     thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259896/vifrcka1rqejswt5a3yh.png",
    //     gradient: "",
    //     accentColor: "#c026d3",
    //     links: { github: "https://github.com/MarioShehan22/Smart-Stock-Prime-Inventory-Management-System" },
    //     highlights: [
    //         { icon: "📊", label: "Dashboard Views", value: "12+" },
    //         { icon: "🔗", label: "REST Endpoints", value: "30+" },
    //         { icon: "⚡", label: "Real-time Updates", value: "Yes" },
    //     ],
    //     features: [
    //         { title: "Real-time Stock Monitoring", description: "Live inventory tracking with instant updates across all connected devices." },
    //         { title: "Supplier Management", description: "Complete supplier profiles, order history, and contact management." },
    //         { title: "Sales Analytics", description: "Detailed charts and reports to understand sales trends and optimize stock." },
    //         { title: "Admin Dashboard", description: "Role-based access control with comprehensive admin tools and audit logs." },
    //     ],
    //     techStack: [
    //         { name: "React", role: "Frontend UI" },
    //         { name: "Node.js", role: "Runtime" },
    //         { name: "Express", role: "REST API" },
    //         { name: "MongoDB", role: "Database" },
    //     ],
    //     screenshots: [
    //         "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259896/vifrcka1rqejswt5a3yh.png",
    //         "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259848/ezg0tqncvvparetpegp3.png",
    //         "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259927/fwfmsbblknukivglln1g.png",
    //         "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259945/glrcgosjvqkdppsrwz7e.png",
    //         "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259975/bgwzobwk3fytklqnxnib.png"
    //     ],
    // },
    {
        title: "Vehicle Parking",
        subtitle: "Smart Parking System",
        description: "IoT-based smart parking management using ESP8266/Arduino with real-time slot monitoring.",
        longDescription: "An end-to-end IoT solution bridging hardware and software to solve urban parking challenges. ESP8266 microcontrollers with ultrasonic sensors detect vehicle presence in each parking bay, streaming data to a Node.js backend. Users can view live availability through a React dashboard, book slots in advance, and receive SMS notifications — all powered by a MongoDB data layer.",
        categories: ["web"],
        tags: ["ESP8266", "Node.js", "MongoDB", "React", "Express"],
        emoji: "",
        thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259192/owekx196zvhpwytqcbfq.png",
        gradient: "#0891b2",
        accentColor: "#0891b2",
        featured: true,
        links: { github: "https://github.com/MarioShehan22/Vehicle_Parking" },
        highlights: [
            { icon: "🔌", label: "IoT Sensors", value: "8+" },
            { icon: "⏱️", label: "Update Interval", value: "<1s" },
            { icon: "🅿️", label: "Slot Types", value: "Multi" },
        ],
        features: [
            { title: "Live Slot Detection", description: "Ultrasonic sensors stream real-time occupancy data to the cloud backend." },
            { title: "Advance Booking", description: "Reserve slots ahead of time with automated confirmation and reminders." },
            { title: "Interactive Map", description: "Visual parking layout showing available and occupied bays at a glance." },
            { title: "ESP8266 Integration", description: "Low-power Wi-Fi microcontrollers handle sensor data and cloud sync." },
        ],
        techStack: [
            { name: "ESP8266", role: "IoT Hardware" },
            { name: "React", role: "Frontend Dashboard" },
            { name: "Node.js + Express", role: "Backend API" },
            { name: "MongoDB", role: "Data Storage" },
        ],
        screenshots: [
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259192/owekx196zvhpwytqcbfq.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259199/wpxkp2ssaxsbmjpe5efv.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259204/kw6ik9uhglrzzilbpplw.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259201/ymbrxedu2ezunzh59ity.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259204/kw6ik9uhglrzzilbpplw.png"
        ],
    },
    {
        title: "NutriFit",
        subtitle: "Nutrition & Fitness Tracker",
        description: "Health & fitness tracking app for logging meals, workouts, and generating AI-powered nutrition insights.",
        longDescription: "A holistic health companion that combines fitness tracking with AI-driven nutritional guidance. Users log meals and workouts, calculate BMI and macro targets, and receive personalized meal recommendations powered by the OpenAI API. The platform adapts to individual goals — weight loss, muscle gain, or maintenance — and generates weekly progress reports with actionable insights.",
        categories: ["web", "ai"],
        tags: ["Express", "React", "Node.js", "MongoDB", "OpenAI"],
        emoji: "",
        gradient: "#059669",
        thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259419/judragyd2n6g7wdtdknn.png",
        accentColor: "#059669",
        featured: true,
        links: { github: "https://github.com/MarioShehan22/Nutrition-Fitness" },
        highlights: [
            { icon: "🤖", label: "AI-Powered", value: "OpenAI" },
            { icon: "🍎", label: "Food Database", value: "1000+" },
            { icon: "📈", label: "Metrics Tracked", value: "15+" },
        ],
        features: [
            { title: "AI Meal Recommendations", description: "OpenAI integration generates personalized meal plans based on your goals and preferences." },
            { title: "Macro & BMI Calculator", description: "Precise calculations for calories, protein, carbs, and fat targets." },
            { title: "Workout Logger", description: "Track exercises, sets, reps, and calories burned with progress history." },
            { title: "Weekly Reports", description: "Auto-generated insights and trend analysis to keep you on track." },
        ],
        techStack: [
            { name: "React", role: "Frontend UI" },
            { name: "Node.js + Express", role: "API Server" },
            { name: "MongoDB", role: "User Data" },
            { name: "OpenAI API", role: "AI Insights" },
        ],
        screenshots: [
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259419/judragyd2n6g7wdtdknn.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259406/se6yls9czfqzyvwy5vjv.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259404/jewyeiehlyjqv37g7aam.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259402/tytmnjd2gddez0m7e0yk.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259415/h79y9fzbx5hzclagktep.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773259412/md1dumokfshsduekp7bz.png"
        ],
    },
    {
        title: "Richlook",
        subtitle: "Full-Stack Web Application",
        description: "Full-stack application with separate frontend and backend for managing core business workflows.",
        longDescription: "A production-ready business management platform with a clean separation between the React frontend and Node.js backend. Features Firebase-powered authentication and file storage alongside a MongoDB data layer. The application handles complex business workflows including user management, dynamic content publishing, and real-time notifications.",
        categories: ["web"],
        tags: ["Express", "React", "Node.js", "MongoDB", "Firebase"],
        emoji: "💎",
        gradient: "#ea580c",
        thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248094/gsdvbiuwejgpz9yyfjv9.png",
        accentColor: "#ea580c",
        links: { github: "https://github.com/MarioShehan22/richlook_Web_Project" },
        highlights: [
            { icon: "🔐", label: "Auth Provider", value: "Firebase" },
            { icon: "📁", label: "File Storage", value: "Cloud" },
            { icon: "🏗️", label: "Architecture", value: "MVC" },
        ],
        features: [
            { title: "Firebase Authentication", description: "Secure OAuth and email/password login with role-based permissions." },
            { title: "Cloud File Storage", description: "Firebase Storage integration for efficient media uploads and retrieval." },
            { title: "Business Workflows", description: "Customizable pipelines for managing business processes end-to-end." },
            { title: "Real-time Notifications", description: "Instant in-app and push notifications for critical workflow events." },
        ],
        techStack: [
            { name: "React", role: "Frontend" },
            { name: "Express", role: "REST API" },
            { name: "MongoDB", role: "Database" },
            { name: "Firebase", role: "Auth & Storage" },
        ],
        screenshots: [
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248094/gsdvbiuwejgpz9yyfjv9.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248666/pnf3jvsbl38aptytkmv4.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244554/m4jq9lhnkxzk1vwulrc8.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244510/chay0iucoidfd4tbdywy.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244512/gls20vqbd3pupz9yigz3.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244512/ygcxhoncvsunne1jobjf.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244512/nsql7kuk1gom4blybmlp.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244512/j0dgblqtxbfcakzgnby0.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248443/cmxzvvdw122bflyx5z98.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248523/bgpwkmg92qikagllecup.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773244533/bah4wumqd95jjnrff5dm.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773248748/iibnkfueo069iv2iqxqw.png",
        ],
    },
    // {
    //     title: "MERN Supply & Demand",
    //     subtitle: "Supply Chain Management App",
    //     description: "MERN-based app for listing items, matching requests, tracking availability, and managing records.",
    //     longDescription: "A dynamic supply and demand matching platform that connects suppliers with buyers in real time. The application enables suppliers to list available inventory with quantities and pricing, while buyers can post demand requests. An intelligent matching algorithm pairs compatible listings and notifies both parties, with a responsive dashboard tracking all transactions and availability trends.",
    //     categories: ["web"],
    //     tags: ["MongoDB", "Express", "React", "Node.js"],
    //     emoji: "📈",
    //     gradient: "from-teal-500 to-lime-500",
    //     accentColor: "#0d9488",
    //     links: { github: "https://github.com/MarioShehan22/MERN_Supply_Demand" },
    //     highlights: [
    //         { icon: "🔄", label: "Matching Engine", value: "Auto" },
    //         { icon: "📋", label: "CRUD Operations", value: "Full" },
    //         { icon: "📱", label: "Responsive", value: "Yes" },
    //     ],
    //     features: [
    //         { title: "Smart Matching", description: "Algorithm automatically pairs supply listings with matching demand requests." },
    //         { title: "Item Listings", description: "Rich product listings with quantities, pricing, and availability windows." },
    //         { title: "Availability Tracking", description: "Live inventory updates as items are matched and transactions completed." },
    //         { title: "Analytics Dashboard", description: "Visual breakdown of supply/demand trends and transaction history." },
    //     ],
    //     techStack: [
    //         { name: "MongoDB", role: "Database" },
    //         { name: "Express", role: "API Layer" },
    //         { name: "React", role: "Frontend" },
    //         { name: "Node.js", role: "Server Runtime" },
    //     ],
    //     screenshots: ["from-teal-800 to-green-700", "from-green-700 to-lime-600", "from-teal-700 to-cyan-600"],
    // },
    {
        title: "POS & Inventory System",
        subtitle: "Enterprise POS & Stock Management Platform",
        description: "Production-grade Point of Sale and Inventory Management System with secure authentication, stock control, and containerized deployment.",
        longDescription: "A full-stack POS and inventory management platform designed to simulate a real-world retail system. The backend is powered by Spring Boot with a secure OAuth2/OIDC authentication flow using Keycloak. The system manages products, batches, suppliers, customers, and orders while maintaining accurate stock levels through pessimistic locking. A React-based POS interface enables fast order processing, live product browsing, and receipt printing. The entire stack is containerized using Docker Compose, orchestrating Spring Boot, MySQL, Keycloak, and a React frontend served via Nginx.",
        categories: ["web"],
        tags: ["Spring Boot", "Java", "React", "MySQL", "Keycloak", "Docker"],
        emoji: "🧾",
        thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590943/h4y7dywqhay2w7q1die5.png",
        gradient: "from-indigo-600 to-purple-600",
        accentColor: "#4f46e5",
        featured: true,
        links: {
            github: "https://github.com/MarioShehan22/inventory-management-React-SpringBoot.git"
        },
        highlights: [
            { icon: "🛒", label: "POS Interface", value: "Real-time" },
            { icon: "📦", label: "Inventory Entities", value: "10+" },
            { icon: "🔐", label: "Authentication", value: "Keycloak" },
        ],
        features: [
            {
                title: "Secure Authentication",
                description: "Keycloak-based OAuth2/OIDC authentication with JWT validation and role-based access control."
            },
            {
                title: "Real-time POS Interface",
                description: "React POS panel with product grid, cart management, discounts, customer search, and printable receipts."
            },
            {
                title: "Advanced Inventory Control",
                description: "Normalized database schema with pessimistic locking to prevent stock conflicts during concurrent orders."
            },
            {
                title: "Email Order Confirmations",
                description: "Asynchronous email notifications with styled HTML receipts using JavaMailSender."
            }
        ],
        techStack: [
            { name: "Java 17", role: "Backend Language" },
            { name: "Spring Boot", role: "Backend Framework" },
            { name: "Spring Security", role: "Authentication & Authorization" },
            { name: "Keycloak", role: "Identity Provider" },
            { name: "MySQL", role: "Database" },
            { name: "React", role: "Frontend POS Interface" },
            { name: "Docker", role: "Containerization" },
            { name: "Nginx", role: "Frontend Server" }
        ],
        screenshots: [
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590943/h4y7dywqhay2w7q1die5.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590939/xh6s13qmdbgphtuar9f2.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590939/dtkdlbcvhlpqli2uejau.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590939/sifhzplpxm026m6egkh8.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590940/m1c3xikvzgdi4pv21qip.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590941/glctmyxw105ska6jjbk2.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590941/ltjbx2wmd92ibvjrrctc.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590941/u5nuhh19wvd9jjlk3vbk.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590942/ay6mft7jyll2r7exdheu.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590940/zjqsf567lmvvri6gt8k0.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590940/dxyyco6t9ah4tikv8i4p.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773590942/zfs6zlmw3wio0ikxzskb.png",
        ]
    },
    {
        title: "Yum-Yum",
        subtitle: "Online Food Ordering Platform",
        description: "Full-stack food ordering platform with secure authentication and online payment integration.",
        longDescription: "Yum-Yum is a scalable full-stack food ordering platform that allows users to browse restaurants, place orders, and complete payments online. The application is built with a React frontend and a Node.js/Express backend connected to a MongoDB database. Secure authentication and authorization are handled through Okta, ensuring safe user login and session management. The system also integrates Stripe for secure online payments, enabling real-time transaction processing and order confirmation.",
        categories: ["web"],
        tags: ["React", "Node.js", "Express", "MongoDB", "Okta", "Stripe"],
        emoji: "🍔",
        thumbnailUrl: "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592160/vl1swnlncl6sgaim60no.png",
        gradient: "from-orange-500 to-red-500",
        accentColor: "#ea580c",
        featured: true,
        links: {
            github: "YOUR_GITHUB_LINK"
        },
        highlights: [
            { icon: "🍽️", label: "Restaurants", value: "Multi" },
            { icon: "💳", label: "Payments", value: "Stripe" },
            { icon: "🔐", label: "Authentication", value: "Okta" },
        ],
        features: [
            {
                title: "Restaurant & Menu Browsing",
                description: "Users can explore restaurants, browse menus, and select items for ordering."
            },
            {
                title: "Secure Authentication",
                description: "Okta authentication provides secure user login, session handling, and role-based access."
            },
            {
                title: "Order Management",
                description: "RESTful APIs manage user profiles, order placement, and order tracking."
            },
            {
                title: "Online Payment Integration",
                description: "Stripe integration enables secure online payments and real-time transaction processing."
            }
        ],
        techStack: [
            { name: "React", role: "Frontend UI" },
            { name: "Node.js", role: "Server Runtime" },
            { name: "Express", role: "REST API Framework" },
            { name: "MongoDB", role: "Database" },
            { name: "Okta", role: "Authentication Server" },
            { name: "Stripe", role: "Payment Gateway" }
        ],
        screenshots: [
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592160/vl1swnlncl6sgaim60no.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592159/wbthbtbe3eehsclh9wcj.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592157/nw4hu7dgm97cvjhawthr.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592159/vtlq7jjvuooc8317wztb.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592157/iq2whp3besdrnms0lxym.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592157/ipgyhh16sk08lwrrt4jc.png",
            "https://res.cloudinary.com/dywmv9onv/image/upload/v1773592157/rc8sf3zprgemwhumslo8.png",
        ]
    }
];

/* ─── Screenshot display: real image URL or gradient placeholder ─── */
function ScreenshotView({ src, index }: { src: string; index: number }) {
    const isUrl = src.startsWith("http") || src.startsWith("/");

    if (isUrl) {
        return (
            <div className="relative rounded-2xl overflow-hidden bg-gray-900" style={{ aspectRatio: "21/9" }}>
                <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                    style={{ display: "block" }}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white ring-opacity-5 rounded-2xl pointer-events-none" />
            </div>
        );
    }

    return (
        <div className={`relative bg-gradient-to-br ${src} rounded-2xl overflow-hidden`} style={{ aspectRatio: "21/9" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-40">
                <div className="w-3/4 h-3 bg-white rounded-full" />
                <div className="w-1/2 h-3 bg-white rounded-full" />
                <div className="w-2/3 h-3 bg-white rounded-full" />
            </div>
            <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full opacity-70" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full opacity-70" />
                <span className="w-3 h-3 bg-green-400 rounded-full opacity-70" />
            </div>
            <div className="absolute bottom-3 right-4 text-white text-xs opacity-50 font-mono">
                Screen {index + 1}
            </div>
        </div>
    );
}

/* ─── Card hero: real thumbnail image OR gradient+emoji fallback ─── */
function CardHero({ project }: { project: ProjectDetail }) {
    if (project.thumbnailUrl) {
        return (
            <div className="mx-5 mt-5 rounded-2xl overflow-hidden relative" style={{ aspectRatio: "21/9" }}>
                <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                />
                {/* gradient overlay so card top bar color still shows through */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 pointer-events-none`} />
            </div>
        );
    }

    return (
        <div
            className={`bg-gradient-to-br ${project.gradient} mx-5 mt-5 rounded-2xl flex items-center justify-center`}
            style={{ aspectRatio: "16/9", opacity: 0.85 }}
        >
            <span className="text-5xl">{project.emoji}</span>
        </div>
    );
}

/* ─── Modal header icon: real thumbnail or gradient box ─── */
function ModalIcon({ project }: { project: ProjectDetail }) {
    if (project.thumbnailUrl) {
        return (
            <div
                className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden"
                style={{ boxShadow: `0 8px 30px ${project.accentColor}44` }}
            >
                <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover object-top" />
            </div>
        );
    }

    return (
        <div
            className={`w-20 h-20 shrink-0 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-4xl`}
            style={{ boxShadow: `0 8px 30px ${project.accentColor}44` }}
        >
            {project.emoji}
        </div>
    );
}

/* ─── Project Detail Modal ─── */
function ProjectModal({ project, onClose }: { project: ProjectDetail; onClose: () => void }) {
    const [activeScreen, setActiveScreen] = useState(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div
                className="relative w-full max-w-4xl mx-4 my-8 rounded-3xl overflow-hidden"
                style={{
                    background: "linear-gradient(145deg, rgba(17,17,34,0.98) 0%, rgba(10,10,25,0.99) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: `0 0 80px 0 ${project.accentColor}33, 0 40px 80px rgba(0,0,0,0.6)`,
                    animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
                }}
            >
                {/* Glow bar — always uses gradient CSS classes, never a URL */}
                <div
                    className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                    style={{ boxShadow: `0 0 20px ${project.accentColor}` }}
                />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
                >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-10">
                        <ModalIcon project={project} />
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: project.accentColor }}>
                                {project.subtitle}
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{
                                            background: `${project.accentColor}20`,
                                            color: project.accentColor,
                                            border: `1px solid ${project.accentColor}40`,
                                        }}
                                    >{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {project.highlights.map((h) => (
                            <div key={h.label} className="rounded-2xl p-4 text-center"
                                 style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <div className="text-2xl mb-1">{h.icon}</div>
                                <div className="text-lg font-black text-white">{h.value}</div>
                                <div className="text-xs text-gray-400 mt-0.5">{h.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Screenshot carousel */}
                    <div className="mb-10">
                        <ScreenshotView src={project.screenshots[activeScreen]} index={activeScreen} />

                        {/* Thumbnail strip for projects with real screenshots */}
                        {project.screenshots[0].startsWith("http") ? (
                            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                                {project.screenshots.map((src, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveScreen(i)}
                                        className="shrink-0 rounded-lg overflow-hidden transition-all"
                                        style={{
                                            width: 72,
                                            height: 45,
                                            outline: activeScreen === i ? `2px solid ${project.accentColor}` : "2px solid transparent",
                                            opacity: activeScreen === i ? 1 : 0.5,
                                        }}
                                    >
                                        <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover object-top" />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center gap-2 mt-3">
                                {project.screenshots.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveScreen(i)}
                                        className="rounded-full transition-all"
                                        style={{
                                            width: activeScreen === i ? 24 : 8,
                                            height: 8,
                                            background: activeScreen === i ? project.accentColor : "rgba(255,255,255,0.2)",
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description + tech stack */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-bold text-white mb-3">About this project</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{project.longDescription}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
                            <div className="space-y-2">
                                {project.techStack.map((t) => (
                                    <div key={t.name} className="flex items-center justify-between px-3 py-2 rounded-xl"
                                         style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <span className="text-white text-sm font-semibold">{t.name}</span>
                                        <span className="text-gray-400 text-xs">{t.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.features.map((f, i) => (
                                <div key={f.title} className="flex gap-3 p-4 rounded-2xl"
                                     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                    <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
                                         style={{ background: `${project.accentColor}20`, color: project.accentColor }}>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
                                        <div className="text-gray-400 text-xs leading-relaxed">{f.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white border-opacity-5">
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer"
                               className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                               style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
                               onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)")}
                               onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                View on GitHub
                            </a>
                        )}
                        {project.links?.demo && (
                            <a href={project.links.demo} target="_blank" rel="noreferrer"
                               className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 text-white"
                               style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`, boxShadow: `0 4px 20px ${project.accentColor}44` }}
                            >
                                Live Demo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                        <button onClick={onClose} className="ml-auto px-5 py-3 rounded-full text-sm text-gray-400 hover:text-white transition-colors">
                            Close ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Main Component ─── */
export default function ProjectDetailPage() {
    const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
    const [activeTab, setActiveTab] = useState<TabKey>("all");
    const [hovered, setHovered] = useState<string | null>(null);

    const filtered = activeTab === "all" ? projects : projects.filter((p) => p.categories.includes(activeTab));

    const tabLabels: Record<TabKey, string> = { all: "All Projects", web: "Web Apps", mobile: "Mobile", ai: "AI / ML" };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
                @keyframes modalIn {
                    from { opacity: 0; transform: translateY(32px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes cardIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .project-card-item { animation: cardIn 0.4s ease both; }
            `}</style>

            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>Portfolio</p>
                        <h2 className="text-4xl sm:text-5xl font-black mb-4 gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Showcasing full-stack, IoT, and AI-integrated solutions built to solve real-world problems.
                        </p>
                    </div>

                    <div className="flex justify-center gap-2 flex-wrap mb-12">
                        {(["all", "web", "mobile", "ai"] as TabKey[]).map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                    className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                                    style={{
                                        background: activeTab === tab ? "linear-gradient(135deg, #7c3aed, #db2777)" : "rgba(255,255,255,0.05)",
                                        color: activeTab === tab ? "white" : "#9ca3af",
                                        border: activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: activeTab === tab ? "0 4px 20px rgba(124,58,237,0.35)" : "none",
                                    }}
                            >{tabLabels[tab]}</button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((project, idx) => (
                            <div
                                key={project.title}
                                className="project-card-item relative group cursor-pointer rounded-3xl overflow-hidden"
                                style={{
                                    animationDelay: `${idx * 60}ms`,
                                    background: "rgba(255,255,255,0.03)",
                                    border: `1px solid ${hovered === project.title ? project.accentColor + "55" : "rgba(255,255,255,0.07)"}`,
                                    boxShadow: hovered === project.title ? `0 20px 50px ${project.accentColor}22` : "none",
                                    transition: "all 0.3s ease",
                                    transform: hovered === project.title ? "translateY(-4px)" : "none",
                                }}
                                onMouseEnter={() => setHovered(project.title)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Top accent bar — always a Tailwind gradient */}
                                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

                                {/* Hero: real image or gradient+emoji */}
                                <CardHero project={project} />

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        {project.featured && (
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                  style={{ background: `${project.accentColor}25`, color: project.accentColor }}>
                                                ★ Featured
                                            </span>
                                        )}
                                        {project.categories.includes("ai") && (
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-violet-900 bg-opacity-50 text-violet-300">AI</span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-black text-white mb-1 leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mb-3">{project.subtitle}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                                                  style={{ background: "rgba(255,255,255,0.06)", color: "#d1d5db" }}>{tag}</span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-xs px-2 py-0.5 rounded-full text-gray-500">+{project.tags.length - 3}</span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: project.accentColor }}>
                                            View Details
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        {project.links?.github && (
                                            <a href={project.links.github} target="_blank" rel="noreferrer"
                                               className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                               style={{ background: "rgba(255,255,255,0.07)" }}
                                               onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
}