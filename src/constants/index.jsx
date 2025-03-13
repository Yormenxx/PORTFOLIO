import { BiLogoVisualStudio } from "react-icons/bi";
import { FaCode,FaReact,FaGithub, FaNodeJs  } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiExpress ,SiSocketdotio   } from "react-icons/si";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsPcDisplay } from "react-icons/bs";
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
        name:"Acerca de",
        link:"../#about"
    },

    {
        name:"Servicios",
        link:"../#services"
    },

    {
        name:"Proyectos",
        link:"#proyectos"
    },

    {
        name:"Contacto",
        link:"../#contacto"
    }
]
export const SERVICES_ITEMS = [

    {
        name:"Desarrollo web",
        description:"Creación de sitio web responsivos enfocados en la usabilidad del usuario.Landing page o sitios web estaticos o dinamicos",
           number:"01",
           icon:<BiLogoVisualStudio />
    },
    {
        name:"Desarrollo backend",
        description:"Creación y consumo de Rest Api para tus aplicaciones, normalización de bases de datos,creación e integracion de Apis.",
        number:"02",
        icon:<FaCode />
    },
    {
        name:"Analisis de sistemas",
        description:"Proceso de diseño, creación, testing y mantenimiento de sistemas,Mantenimiento preventivo, apoayo al área de sistemas.",
           number:"03",
           icon:<BsPcDisplay />
    },
    {
        name:"Aprendizaje",
        description:"Apoyo en tecnologias del stack principal, para programadores iniciantes.",
           number:"04",
           icon:<MdCastForEducation />

    }

]



export const PROJECTS_ITEMS = [
    {
        img:architect,

        title:"Architects fan landing",

        skills: [ 
            {
                icon:<FaReact />,
                name:"React"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            {
                icon:<SiReactrouter />,
                name:"React router"
            }
         ],

         description:"Mi proyecto es una página web dedicada a la banda británica Architects, donde los fans pueden explorar su historia, discografía y merch. La interfaz moderna y responsive garantiza una experiencia inmersiva en cualquier dispositivo. Ideal para conocer más sobre su música y conectarse con la comunidad de seguidores.",

         github:{
            git:<FaGithub />,
            link:"https://github.com/Yormenxx/ARCHITECTS--FAN-PAGE"
         },
         preview:{
            prevLink:"#",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },

    {
        img:halo,

        title:"Halo web landing",
        
        skills: [ 
            {
                icon:<FaReact />,
                name:"React"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            {
                icon:<TbBrandFramerMotion />,
                name:"Framer motion"
            }
         ],

         description:"Este proyecto es una página web inspirada en Halo Infinite, diseñada para ofrecer información detallada sobre el juego, noticias, guías y contenido multimedia. Con una interfaz dinámica y responsive, permite a los fans sumergirse en el universo de Halo de manera intuitiva y visualmente atractiva.",

         github:{
            git:<FaGithub />,
            link:""
         },
         preview:{
            prevLink:"https://github.com/Yormenxx/HALO-WEB-LANDING",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },

    {
        img:headphones,

        title:"Headphone landing",
        
        skills: [ 
            {
                icon:<FaReact />,
                name:"React"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            {
                icon:<TbBrandFramerMotion />,
                name:"Framer motion"
            }
         ],

         description:"Este proyecto es una Landing basa en la venta de audifonos, mostrando una galería visual con diseños y características. La interfaz minimalista y responsive facilita la exploración de diferentes modelos, ofreciendo una experiencia sencilla y atractiva para los usuarios.",

         github:{
            git:<FaGithub />,
            link:"https://github.com/Yormenxx/HEADPHONE-WEBSITE"
         },
         preview:{
            prevLink:"#",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },

    {
        img:libros,

        title:"Books storage web",
        
        skills: [ 
            {
                icon:<FaNodeJs />,
                name:"Nodejs"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            {
                icon:<SiExpress />,
                name:"Express"
            },
            {
                icon:<BsFiletypeJson />,
                name:"Json"
            }
         ],

         description:"Este proyecto backend, desarrollado con Node.js y Express, permite almacenar y gestionar información de libros mediante un archivo JSON. Proporciona una API sencilla y eficiente para realizar operaciones como crear o eliminar libros ",

         github:{
            git:<FaGithub />,
            link:"https://github.com/Yormenxx/ALMACEN-DE-LIBROS"
         },
         preview:{
            prevLink:"#",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },


    {
        img:sass,

        title:"Sass landing page",
        
        skills: [ 
            {
                icon:<FaReact />,
                name:"React"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            
         ],

         description:"Este proyecto es un landing page para un SaaS, diseñado para destacar sus funciones, beneficios y características clave. Con un diseño moderno y responsive, la página combina llamadas a la acción efectivas y una presentación clara del producto, ideal para captar nuevos usuarios y generar conversiones.",

         github:{
            git:<FaGithub />,
            link:"https://github.com/Yormenxx/SAAS-LANDING-WEB"
         },
         preview:{
            prevLink:"#",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },




    {
        img:socket,

        title:"Socket chat",
        
        skills: [ 
            {
                icon:<SiSocketdotio />,
                name:"Socket.io"

            },
            {
                icon:<RiTailwindCssFill />,
                name:"Tailwind"
            },
            {
                icon:<FaNodeJs />,
                name:"Nodejs"
            },
            {
                icon:<SiExpress />,
                name:"Express"
            }
         ],

         description:"Este proyecto es un chat en tiempo real desarrollado con Node.js, Express y Socket.io. Permite la comunicación instantánea entre usuarios con una interfaz simple y responsive.",

         github:{
            git:<FaGithub />,
            link:"https://github.com/Yormenxx/SOCKET-CHAT"
         },
         preview:{
            prevLink:"#",
            prev:<FaArrowUpRightFromSquare />
         }
         
    },
]



export const OTHER_PROJECTS = [

    {   
        id:1,
        name:"E learning web",
        description:"Landing page basada en una empresa que ofrece educacion virtual",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
        link:"https://github.com/Yormenxx/LEARNING-WEB",
        src:"source code",
        type:"front"
    },

    
    {
        id:2,
        name:"php crud",
        description:"Creación de un crud básico en php con la ayuda de xampp y bootstrap",
        skill:[
            {
                name:"xampp"
            },
            {
                name:"bootstrap"
            }
        ],
        link:"https://github.com/Yormenxx/PHP-CRUD-ONE",
        src:"source code",
        type:"back"
    },

    
    {
        id:3,
        name:"Typescript expenses app",
        description:"Aplicación de gastos creada en typesript",
        skill:[
            {
                name:"typescript"
            }
        ],
        link:"https://github.com/Yormenxx/TS-APP-EXPENSES",
        src:"source code",
        type:"back"
    },


    {
        id:4,
        name:"Mcu getting api",
        description:"Consumiendo el api de marvel para posteriormente generar una interfaz",
        skill:[
            {
                name:"xampp"
            }
        ],
        link:"https://github.com/Yormenxx/MCU-GETTING-API",
        src:"source code",
        type:"back"
    },


    
    {
        id:5,
        name:"Outdoor travel",
        description:"pagina web inspirada en viajes",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
        link:"https://github.com/Yormenxx/OUTDOOR-TRAVEL",
        src:"source code",
        type:"front"
    },


    {
        id:6,
        name:"TRPC crud",
        description:"Crud realizado mediante trpc",
        skill:[
            {
                name:"typescript"
            },
            {
                name:"nodejs"
            },
            {
                name:"trpc"
            }
        ],
        link:"https://github.com/Yormenxx/TRPC-CRUD",
        src:"source code",
        type:"back"
    },


    {
        id:7,
        name:"Password generator",
        description:"Proyecto que permite la generación de contraseñas mediante la linea de comandos",
        skill:[
            {
                name:"javascript"
            },
            {
                name:"inquirer"
            },
            {
                name:"chalk"
            }
        ],
        link:"https://github.com/Yormenxx/COMMAND-PASSWORD-GENERATOR",
        src:"source code",
        type:"front"
    },




    {id:8,
        name:"Modern restaurant",
        description:"Landing page  basado en un restaurante",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
        link:"https://github.com/Yormenxx/MODERN-RESTAURANT",
        src:"source code",
        type:"front"
    },

    {id:9,
        name:"Crypto landing",
        description:"Landing page basada en un web de cryptos",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
        link:"https://github.com/Yormenxx/CRYPTO-LANDING",
        src:"source code",
        type:"front"
    },

    {id:10,
        name:"Landing furniture ",
        description:"Landing web basada en la venta de muebles",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
        link:"https://github.com/Yormenxx/LANDING-WEB-F",
        src:"source code",
        type:"front"
    },

    {id:11,
        name:"virtual landing",
        description:"Landing page basado una web de realizad aumentada ",
        skill:[
            {
                name:"react"
            },
            {
                name:"tailwind"
            }
        ],
       
        link:"https://github.com/Yormenxx/VIRTUAL-LANDING",
        src:"source code",
        type:"front"
    }

]




