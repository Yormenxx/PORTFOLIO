import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaServer, FaDatabase } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import halo from "../assets/mockups/halo.png"
import headphones from "../assets/mockups/headphones.png"
import sass from "../assets/mockups/sass.png"
import crypto from "../assets/mockups/crypto.png"
import medic from "../assets/mockups/medic.png"
import furniture from "../assets/mockups/furniture.png"

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



export const getProjectsItems = (t: any) => [

    {
        img: halo,
        titleKey: "featuredProjects.halo.title",
        title: t("featuredProjects.halo.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        descriptionKey: "featuredProjects.halo.description",
        description: t("featuredProjects.halo.description"),
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
        titleKey: "featuredProjects.headphones.title",
        title: t("featuredProjects.headphones.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        descriptionKey: "featuredProjects.headphones.description",
        description: t("featuredProjects.headphones.description"),
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
        titleKey: "featuredProjects.saas.title",
        title: t("featuredProjects.saas.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        descriptionKey: "featuredProjects.saas.description",
        description: t("featuredProjects.saas.description"),
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
        titleKey: "featuredProjects.crypto.title",
        title: t("featuredProjects.crypto.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        descriptionKey: "featuredProjects.crypto.description",
        description: t("featuredProjects.crypto.description"),
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
        titleKey: "featuredProjects.medic.title",
        title: t("featuredProjects.medic.title"),
        skills: [
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
        ],
        descriptionKey: "featuredProjects.medic.description",
        description: t("featuredProjects.medic.description"),
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
        titleKey: "featuredProjects.furniture.title",
        title: t("featuredProjects.furniture.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <TbBrandFramerMotion />, name: "Framer motion" }
        ],
        descriptionKey: "featuredProjects.furniture.description",
        description: t("featuredProjects.furniture.description"),
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



export const otherProjects = (t: any) => [
    {
        id: 1,
        name: "Modern restaurant",
        // CORRECCIÓN: Usar t() aquí
        description: t("otherProjects.modern.desc"), 
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "framer motion" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/MODERN-RESTAURANT",
        src: "source code",
        type: "front"
    },
    {
        id: 2,
        name: "Modern website ux/ui",
        description: t("otherProjects.modernui.desc"),
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/MODERN-WEBSITE-UX-UI",
        src: "source code",
        type: "front"
    },
    {
        id: 3,
        name: "Outdoor travel",
        description: t("otherProjects.outer.desc"),
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/OUTDOOR-TRAVEL",
        src: "source code",
        type: "front"
    },
    {
        id: 4,
        name: "Saas landing page",
        description: t("otherProjects.saaslanding.desc"),
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "framer motion" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/SAAS-LANDING-PAGE",
        src: "source code",
        type: "front"
    },
    {
        id: 5,
        name: "Trpc crud",
        description: t("otherProjects.trpc.desc"),
        skill: [{ name: "react" }, { name: "tailwind" }, { name: "typescript" }, { name: "trpc" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/TRPC-CRUD",
        src: "source code",
        type: "back"
    },
    {
        id: 6,
        name: "ts-app-expenses",
        description: t("otherProjects.expenses.desc"),
        skill: [{ name: "react" }, { name: "typescript" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/TS-APP-EXPENSES",
        src: "source code",
        type: "back"
    },
    {
        id: 7,
        name: "Virtual landing",
        description: t("otherProjects.virtual.desc"), 
        skill: [{ name: "react" }, { name: "tailwind" }],
        link: "https://github.com/Yormenxx/projects-js-node-others/tree/main/VIRTUAL-LANDING",
        src: "source code",
        type: "front"
    },
    {
        id: 8,
        name: "blog api",
        description: t("otherProjects.blogapi.desc"),
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapi_blog_users/backend",
        src: "source code",
        type: "back"
    },
    {
        id: 9,
        name: "Rest api 1",
        description: t("otherProjects.rest1.desc"), 
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapibasic",
        src: "source code",
        type: "back"
    },
    {
        id: 10,
        name: "Rest api 2",
        description: t("otherProjects.rest2.desc"),
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapibasic1/backend",
        src: "source code",
        type: "back"
    },
    {
        id: 11,
        name: "Rest api 3",
        description: t("otherProjects.rest3.desc"),
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/restapiwithts",
        src: "source code",
        type: "back"
    },
    {
        id: 12,
        name: "Rick and Morty",
        description: t("otherProjects.rick.desc"),
        skill: [{ name: "nodejs" }, { name: "express" }, { name: "mongo" }],
        link: "https://github.com/Yormenxx/javascript-elements/tree/main/api_construction_projects/rickandmorty",
        src: "source code",
        type: "front"
    }
];




