import { useEffect, useRef } from "react";
import * as THREE from "three";

const iconPaths = [
    "../../public/React.svg",
    "../../public/Spring Boot.svg",
    "../../public/Node.js.svg",
    "../../public/Python.svg",
    "../../public/Java.svg",
    "../../public/postgresql.svg",
    "../../public/mongodb.svg",
    "../../public/Express.js.svg",
];

function Hero() {
    const threeContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = threeContainerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const particles = new THREE.Group();
        scene.add(particles);

        const textureLoader = new THREE.TextureLoader();
        const particleCount = 70;
        const particlesPerIcon = Math.max(1, Math.floor(particleCount / iconPaths.length));

        iconPaths.forEach((iconPath) => {
            textureLoader.load(
                iconPath,
                (texture) => {
                    for (let i = 0; i < particlesPerIcon; i++) {
                        const material = new THREE.SpriteMaterial({
                            map: texture,
                            transparent: true,
                            opacity: 0.9,
                        });

                        const sprite = new THREE.Sprite(material);
                        sprite.position.set(
                            Math.random() * 40 - 20,
                            Math.random() * 40 - 20,
                            Math.random() * 40 - 20
                        );

                        const scale = 1.8 + Math.random() * 1.2;
                        sprite.scale.set(scale, scale, 1);
                        particles.add(sprite);
                    }
                },
                undefined,
                (error) => {
                    console.warn("Failed to load texture:", iconPath, error);
                }
            );
        });

        camera.position.z = 32;
        const clock = new THREE.Clock();
        let frameId: number;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            particles.rotation.x = time * 0.12;
            particles.rotation.y = time * 0.18;

            particles.children.forEach((particle, i) => {
                const t = time * 0.8 + i;
                particle.position.y += Math.sin(t) * 0.004;
                particle.position.x += Math.cos(t * 0.6) * 0.004;
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            particles.rotation.y += x * 0.0025;
            particles.rotation.x += y * 0.0025;
        };

        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            document.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
            {/* Three.js background container */}
            <div id="three-container" ref={threeContainerRef} />

            <div className="text-center max-w-5xl mx-auto">
                <div className="mb-8 animate-float">
                    <div
                        className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 glow">
                        💻
                    </div>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-shadow leading-tight">
                    Building <span className="gradient-text">innovative solutions</span>
                    <br/>
                    from IoT to Full-Stack
                </h1>

                <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl mb-8 flex-wrap">
                    <span>Hi, I'm Shehan Silva</span>
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm">
                        ⚡
                    </div>
                    <span>CS Undergraduate & Full Stack Developer</span>
                </div>

                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Passionate about creating user-focused solutions with expertise in MERN stack,
                    Spring Boot, and IoT systems. Currently pursuing BSc. (Hons) in Computer Science.
                </p>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <a
                        href="#contact"
                        className="glass px-8 py-4 rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                        Get In Touch →
                    </a>
                    <a
                        href="mailto:marionilanka@gmail.com"
                        className="text-blue-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                        📧 marionilanka@gmail.com
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold gradient-text">8+</div>
                        <div className="text-gray-300 mt-2">Full-Stack & IoT Projects</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold gradient-text">MERN <br/>+ Spring</div>
                        <div className="text-gray-300 mt-2">Tech Stack Expertise</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold gradient-text">2+</div>
                        <div className="text-gray-300 mt-2">Years Web Master Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;