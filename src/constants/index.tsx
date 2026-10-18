import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaServer, FaDatabase } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import halo from "../assets/mockups/halo.webp"
import headphones from "../assets/mockups/headphones.webp"
import sass from "../assets/mockups/sass.webp"
import crypto from "../assets/mockups/crypto.webp"
import medic from "../assets/mockups/medic.webp"
import furniture from "../assets/mockups/furniture.webp"

export const NAV_ITEMS = [
    {
        name: "Acerca de",
        link: "../#about"
    },

    {
        name: "Servicios",
        link: "../#services"
    },

    {
        name: "Proyectos",
        link: "#proyectos"
    },

    {
        name: "Contacto",
        link: "../#contacto"
    }
]
export const SERVICES_ITEMS = [

    {
        name: "Desarrollo web",
        description: "Creación de sitio web responsivos enfocados en la usabilidad del usuario.Landing page o sitios web estaticos o dinamicos",
        number: "1",
        icon: <FaComputer />
    },
    {
        name: "Desarrollo backend",
        description: "Creación y consumo de Rest Api para tus aplicaciones, normalización de bases de datos,creación e integracion de Apis.",
        number: "2",
        icon: <FaServer />
    },
    {
        name: "Analisis de sistemas",
        description: "Proceso de diseño, creación, testing y mantenimiento de sistemas, mantenimiento preventivo, apoyo al área de sistemas.",
        number: "3",
        icon: <FaDatabase />
    },
    {
        name: "Aprendizaje",
        description: "Apoyo en tecnologias del stack principal, para programadores iniciantes.",
        number: "4",
        icon: <MdCastForEducation />

    }

]



export const getProjectsItems = (_t?: any) => [
    {
        img: halo,
        title: "Halo web landing",
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        description: "Este proyecto es una página web inspirada en Halo Master Chief, diseñada para ofrecer información detallada sobre el juego, noticias, guías y contenido multimedia. Con una interfaz dinámica y responsive, permite a los fans sumergirse en el universo de Halo de manera intuitiva y visualmente atractiva.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/HALO-WEB-LANDING"
        },
        preview: {
            prevLink: "https://mojodeco-halolanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: headphones,
        title: "Headphone landing",
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        description: "Este proyecto es una Landing basa en la venta de audífonos, mostrando una galería visual con diseños y características. La interfaz minimalista y responsive facilita la exploración de diferentes modelos, ofreciendo una experiencia sencilla y atractiva para los usuarios.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/HEADPHONE-WEBSITE"
        },
        preview: {
            prevLink: "https://mojodeco-headphoneslanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: sass,
        title: "SaaS landing page",
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        description: "Este proyecto es un landing page para un SaaS, diseñado para destacar sus funciones, beneficios y características clave. Con un diseño moderno y responsive, la página combina llamadas a la acción efectivas y una presentación clara del producto, ideal para captar nuevos usuarios y generar conversiones.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/SAAS-LANDING-WEB"
        },
        preview: {
            prevLink: "https://mojodeco-saaslanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: crypto,
        title: "Crypto landing page",
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        description: "Este proyecto es una landing page dedicada a una plataforma de criptomonedas, diseñada para proporcionar información clara sobre sus servicios, características y beneficios. Con un diseño moderno y atractivo, la página busca captar la atención de los usuarios interesados en el mundo de las criptomonedas y fomentar la interacción con la plataforma.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/CRYPTO-LANDING"
        },
        preview: {
            prevLink: "https://mojodeco-cryptolanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: medic,
        title: "Medical landing page",
        skills: [
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
        ],
        description: "Este proyecto es una landing page para un servicio médico, diseñada para ofrecer información clara sobre los servicios de salud disponibles, el equipo médico y las facilidades para los pacientes. Con un diseño limpio y profesional, la página busca generar confianza y facilitar la comunicación entre los pacientes y el centro médico.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/MEDIC-WEB"
        },
        preview: {
            prevLink: "https://mojodeco-mediclanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: furniture,
        title: "Furniture landing page",
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        description: "Este proyecto es una landing page para una tienda de muebles, diseñada para mostrar una variedad de productos y estilos . Con un diseño atractivo y fácil de navegar, la página permite a los usuarios explorar diferentes opciones de mobiliario y realizar compras de manera sencilla.",
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/LANDING-WEB-F"
        },
        preview: {
            prevLink: "https://mojodeco-furniturelanding.vercel.app/",
            prev: <FaArrowUpRightFromSquare />
        }
    }
];

export const otherProjects = (_t?: any) => [
    {
        id: 1,
        name: "Modern restaurant",
        description: "Landing page basado en un restaurante moderno", 
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "framer motion" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/MODERN-RESTAURANT",
        src: "source code",
        type: "front"
    },
    {
        id: 2,
        name: "Modern website ux/ui",
        description: "Landing page basado en un diseño ux/ui moderno",
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/MODERN-WEBSITE-UX-UI",
        src: "source code",
        type: "front"
    },
    {
        id: 3,
        name: "Outdoor travel",
        description: "Landing page basado en una web de viajes al aire libre",
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/OUTDOOR-TRAVEL",
        src: "source code",
        type: "front"
    },
    {
        id: 4,
        name: "Saas landing page",
        description: "Saas landing page basado en un diseño moderno",
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "framer motion" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/SAAS-LANDING-PAGE",
        src: "source code",
        type: "front"
    },
    {
        id: 5,
        name: "Trpc crud",
        description: "crud con tecnologias trpc",
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "typescript" }, { name: "trpc" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/TRPC-CRUD",
        src: "source code",
        type: "back"
    },
    {
        id: 6,
        name: "ts-app-expenses",
        description: "Desarrollo de una mini aplicacion de gastos con typescript",
        skill: [{ name: "react" }, { name: "typescript" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/TS-APP-EXPENSES",
        src: "source code",
        type: "back"
    },
    {
        id: 7,
        name: "Virtual landing",
        description: "Desarrollo de una landing page moderna", 
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/VIRTUAL-LANDING",
        src: "source code",
        type: "front"
    },
    {
        id: 8,
        name: "blog api",
        description: "Deasrrollo basico de una rest api basada en blog",
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapi_blog_users/backend",
        src: "source code",
        type: "back"
    },
    {
        id: 9,
        name: "Rest api 1",
        description: "Practicando el desarrollo de apis", 
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapibasic",
        src: "source code",
        type: "back"
    },
    {
        id: 10,
        name: "Rest api 2",
        description: "Desarrollo de una api",
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapibasic1/backend",
        src: "source code",
        type: "back"
    },
    {
        id: 11,
        name: "Rest api 3",
        description: "rest api con typescript",
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapiwithts",
        src: "source code",
        type: "back"
    },
    {
        id: 12,
        name: "Rick and Morty",
        description: "Consumiento api de rick and morty",
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/rickandmorty",
        src: "source code",
        type: "front"
    }
];




