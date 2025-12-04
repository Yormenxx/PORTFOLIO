
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCode, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiExpress, SiSocketdotio } from "react-icons/si";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsPcDisplay } from "react-icons/bs";
import { FaFilePdf, FaJava, FaGitAlt, FaServer, FaDatabase, FaGraduationCap } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import architect from "../assets/mockups/architect.png"
import halo from "../assets/mockups/halo.png"
import headphones from "../assets/mockups/headphones.png"
import libros from "../assets/mockups/libros.png"
import sass from "../assets/mockups/sass.png"
import socket from "../assets/mockups/socket.png"



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



export const getProjectsItems = (t) => [
    {
        img: architect,
        titleKey: "featuredProjects.architects.title",
        title: t("featuredProjects.architects.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <SiReactrouter />, name: "React router" }
        ],
        descriptionKey: "featuredProjects.architects.description",
        description: t("featuredProjects.architects.description"),
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/ARCHITECTS--FAN-PAGE"
        },
        preview: {
            prevLink: "#",
            prev: <FaArrowUpRightFromSquare />
        }
    },
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
            link: ""
        },
        preview: {
            prevLink: "https://github.com/Yormenxx/HALO-WEB-LANDING",
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
            link: "https://github.com/Yormenxx/HEADPHONE-WEBSITE"
        },
        preview: {
            prevLink: "#",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: libros,
        titleKey: "featuredProjects.books.title",
        title: t("featuredProjects.books.title"),
        skills: [
            { icon: <FaNodeJs />, name: "Nodejs" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <SiExpress />, name: "Express" },
            { icon: <BsFiletypeJson />, name: "Json" }
        ],
        descriptionKey: "featuredProjects.books.description",
        description: t("featuredProjects.books.description"),
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/ALMACEN-DE-LIBROS"
        },
        preview: {
            prevLink: "#",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: sass,
        titleKey: "featuredProjects.saas.title",
        title: t("featuredProjects.saas.title"),
        skills: [
            { icon: <FaReact />, name: "React" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" }
        ],
        descriptionKey: "featuredProjects.saas.description",
        description: t("featuredProjects.saas.description"),
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/SAAS-LANDING-WEB"
        },
        preview: {
            prevLink: "#",
            prev: <FaArrowUpRightFromSquare />
        }
    },
    {
        img: socket,
        titleKey: "featuredProjects.socket.title",
        title: t("featuredProjects.socket.title"),
        skills: [
            { icon: <SiSocketdotio />, name: "Socket.io" },
            { icon: <RiTailwindCssFill />, name: "Tailwind" },
            { icon: <FaNodeJs />, name: "Nodejs" },
            { icon: <SiExpress />, name: "Express" }
        ],
        descriptionKey: "featuredProjects.socket.description",
        description: t("featuredProjects.socket.description"),
        github: {
            git: <FaGithub />,
            link: "https://github.com/Yormenxx/SOCKET-CHAT"
        },
        preview: {
            prevLink: "#",
            prev: <FaArrowUpRightFromSquare />
        }
    }
];



export const OTHER_PROJECTS = [

    {
        id: 1,
        name: "E learning web",
        description: "Landing page basada en una empresa que ofrece educacion virtual",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],
        link: "https://github.com/Yormenxx/LEARNING-WEB",
        src: "source code",
        type: "front"
    },


    {
        id: 2,
        name: "php crud",
        description: "Creación de un crud básico en php con la ayuda de xampp y bootstrap",
        skill: [
            {
                name: "xampp"
            },
            {
                name: "bootstrap"
            }
        ],
        link: "https://github.com/Yormenxx/PHP-CRUD-ONE",
        src: "source code",
        type: "back"
    },


    {
        id: 3,
        name: "Typescript expenses app",
        description: "Aplicación de gastos creada en typesript",
        skill: [
            {
                name: "typescript"
            }
        ],
        link: "https://github.com/Yormenxx/TS-APP-EXPENSES",
        src: "source code",
        type: "back"
    },


    {
        id: 4,
        name: "Mcu getting api",
        description: "Consumiendo el api de marvel para posteriormente generar una interfaz",
        skill: [
            {
                name: "xampp"
            }
        ],
        link: "https://github.com/Yormenxx/MCU-GETTING-API",
        src: "source code",
        type: "back"
    },



    {
        id: 5,
        name: "Outdoor travel",
        description: "pagina web inspirada en viajes",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],
        link: "https://github.com/Yormenxx/OUTDOOR-TRAVEL",
        src: "source code",
        type: "front"
    },


    {
        id: 6,
        name: "TRPC crud",
        description: "Crud realizado mediante trpc",
        skill: [
            {
                name: "typescript"
            },
            {
                name: "nodejs"
            },
            {
                name: "trpc"
            }
        ],
        link: "https://github.com/Yormenxx/TRPC-CRUD",
        src: "source code",
        type: "back"
    },


    {
        id: 7,
        name: "Password generator",
        description: "Proyecto que permite la generación de contraseñas mediante la linea de comandos",
        skill: [
            {
                name: "javascript"
            },
            {
                name: "inquirer"
            },
            {
                name: "chalk"
            }
        ],
        link: "https://github.com/Yormenxx/COMMAND-PASSWORD-GENERATOR",
        src: "source code",
        type: "front"
    },




    {
        id: 8,
        name: "Modern restaurant",
        description: "Landing page  basado en un restaurante",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],
        link: "https://github.com/Yormenxx/MODERN-RESTAURANT",
        src: "source code",
        type: "front"
    },

    {
        id: 9,
        name: "Crypto landing",
        description: "Landing page basada en un web de cryptos",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],
        link: "https://github.com/Yormenxx/CRYPTO-LANDING",
        src: "source code",
        type: "front"
    },

    {
        id: 10,
        name: "Landing furniture ",
        description: "Landing web basada en la venta de muebles",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],
        link: "https://github.com/Yormenxx/LANDING-WEB-F",
        src: "source code",
        type: "front"
    },

    {
        id: 11,
        name: "virtual landing",
        description: "Landing page basado una web de realizad aumentada ",
        skill: [
            {
                name: "react"
            },
            {
                name: "tailwind"
            }
        ],

        link: "https://github.com/Yormenxx/VIRTUAL-LANDING",
        src: "source code",
        type: "front"
    }

]




