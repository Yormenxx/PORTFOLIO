import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Navbar
      nav: {
        home: "Inicio",
        projects: "Proyectos",
        services: "Servicios",
        contact: "Contacto"
      },

      // Hero Section
      hero: {
        available: "Disponible para nuevos proyectos",
        role: "Analista y Desarrollador de sistemas de información y estudiante en formación de Ingeniería en Sistemas, tengo un enfoque en el desarrollo BackEnd pero también logro manejar tecnologías FrontEnd.",
        techStack: "Stack tecnológico",
        downloadCV: "Descargar CV",
        sendMessage: "Enviar mensaje"
      },

      featuredProjects: {

        halo: {
          title: "Halo web landing",
          description: "Este proyecto es una página web inspirada en Halo Master Chief, diseñada para ofrecer información detallada sobre el juego, noticias, guías y contenido multimedia. Con una interfaz dinámica y responsive, permite a los fans sumergirse en el universo de Halo de manera intuitiva y visualmente atractiva."
        },
        headphones: {
          title: "Headphone landing",
          description: "Este proyecto es una Landing basa en la venta de audífonos, mostrando una galería visual con diseños y características. La interfaz minimalista y responsive facilita la exploración de diferentes modelos, ofreciendo una experiencia sencilla y atractiva para los usuarios."
        },

        saas: {
          title: "SaaS landing page",
          description: "Este proyecto es un landing page para un SaaS, diseñado para destacar sus funciones, beneficios y características clave. Con un diseño moderno y responsive, la página combina llamadas a la acción efectivas y una presentación clara del producto, ideal para captar nuevos usuarios y generar conversiones."
        },
        crypto: {
          title: "Crypto landing page",
          description: "Este proyecto es una landing page dedicada a una plataforma de criptomonedas, diseñada para proporcionar información clara sobre sus servicios, características y beneficios. Con un diseño moderno y atractivo, la página busca captar la atención de los usuarios interesados en el mundo de las criptomonedas y fomentar la interacción con la plataforma."
        },
        medic: {
          title: "Medical landing page",
          description: "Este proyecto es una landing page para un servicio médico, diseñada para ofrecer información clara sobre los servicios de salud disponibles, el equipo médico y las facilidades para los pacientes. Con un diseño limpio y profesional, la página busca generar confianza y facilitar la comunicación entre los pacientes y el centro médico.",
        },
        furniture: {
          title: "Furniture landing page",
          description: "Este proyecto es una landing page para una tienda de muebles, diseñada para mostrar una variedad de productos y estilos . Con un diseño atractivo y fácil de navegar, la página permite a los usuarios explorar diferentes opciones de mobiliario y realizar compras de manera sencilla."
        }

      },

      otherProjects: {
        modern: {
          desc: "Landing page basado en un restaurante moderno"
        },
        modernui: {
          desc: "Landing page basado en un diseño ux/ui moderno"
        },
        outer: {
          desc: "Landing page basado en una web de viajes al aire libre"
        },
        saaslanding: {
          desc: "Saas landing page basado en un diseño moderno"
        },
        trpc: {
          desc: "crud con tecnologias trpc"
        },
        expenses: {
          desc: "Desarrollo de una mini aplicacion de gastos con typescript"
        },
        virtual: {
          desc: "Desarrollo de una landing page moderna"
        },
        blogapi: {
          desc: "Deasrrollo basico de una rest api basada en blog"
        },
        rest1: {
          desc: "Practicando el desarrollo de apis"
        },
        rest2: {
          desc: "Desarrollo de una api"
        },
        rest3: {
          desc: "rest api con typescript"
        },
        rick: {
          desc: "Consumiento api de rick and morty"
        }
      },


      // Projects Section
      projects: {
        title: "Proyectos",
        description: "Proyectos destacados desarrollados con React, Framer Motion, React Router y Node.js. Cada aplicación combina interfaces dinámicas, animaciones fluidas y un backend robusto con Express",
        otherProjects: "Otros proyectos",
        filters: {
          all: "Todos",
          front: "Front",
          backend: "Backend",
          other: "Otro"
        },
        previous: "Proyecto anterior",
        next: "Proyecto siguiente",
        goToPage: "Ir a página"
      },

      // Services Section
      services: {
        title: "Servicios",
        items: {
          webDev: {
            name: "Desarrollo web",
            description: "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías"
          },
          backendDev: {
            name: "Desarrollo Backend",
            description: "Desarrollo de APIs robustas y escalables con Node.js y frameworks modernos"
          },
          systemAnalysis: {
            name: "Análisis de sistemas",
            description: "Análisis y diseño de soluciones tecnológicas adaptadas a las necesidades del negocio"
          },
          learning: {
            name: "Aprendizaje",
            description: "Constante actualización en nuevas tecnologías y mejores prácticas de desarrollo"
          }
        }
      },

      // Contact Section
      contact: {
        title: "Construyamos algo",
        titleHighlight: "increíble",
        subtitle: "Escríbeme",
        description: "Software developer enfocado en Back-end capaz de llevar proyectos que permitan la entrega optimizada y continua a los usuarios.",
        role: "Analista de sistemas - Desarrollo Backend",
        buttons: {
          email: "Email",
          linkedin: "LinkedIn",
          github: "GitHub"
        }
      },

      // Footer
      footer: {
        tagline: "Construyendo soluciones backend robustas y escalables.",
        navigation: "Navegación",
        follow: "Sígueme",
        rights: "Todos los derechos reservados."
      }
    }
  },
  en: {
    translation: {
      // Navbar
      nav: {
        home: "Home",
        projects: "Projects",
        services: "Services",
        contact: "Contact"
      },

      // Hero Section
      hero: {
        available: "Available for new projects",
        role: "Systems Analyst and Developer with a background in Information Systems Engineering, I have a focus on BackEnd development but also manage FrontEnd technologies.",
        techStack: "Tech Stack",
        downloadCV: "Download CV",
        sendMessage: "Send Message"
      },

      featuredProjects: {
        architects: {
          title: "Architects Fan Landing",
          description: "My project is a website dedicated to the British band Architects, where fans can explore their history, discography and merch. The modern and responsive interface ensures an immersive experience on any device. Ideal for learning more about their music and connecting with the fan community."
        },
        halo: {
          title: "Halo Web Landing",
          description: "This project is a website inspired by Halo Infinite, designed to offer detailed information about the game, news, guides and multimedia content. With a dynamic and responsive interface, it allows fans to immerse themselves in the Halo universe in an intuitive and visually appealing way."
        },
        headphones: {
          title: "Headphone Landing",
          description: "This project is a landing page based on headphone sales, showcasing a visual gallery with designs and features. The minimalist and responsive interface facilitates the exploration of different models, offering a simple and attractive experience for users."
        },

        saas: {
          title: "SaaS Landing Page",
          description: "This project is a landing page for a SaaS, designed to highlight its functions, benefits and key features. With a modern and responsive design, the page combines effective calls to action and a clear product presentation, ideal for attracting new users and generating conversions."
        },
        crypto: {
          title: "Crypto landing page",
          description: "This project features a landing page for a cryptocurrency platform, designed to clearly showcase its services, features, and benefits. With a modern and engaging interface, the page aims to attract users interested in the crypto market and drive platform engagement."
        },
        medic: {
          title: "Medical landing page",
          description: "This project is a landing page for a medical service, designed to provide clear information about available health services, the medical team, and patient facilities. With a clean and professional design, the page aims to build trust and facilitate communication between patients and the medical center.",
        },
        furniture: {
          title: "Furniture landing page",
          description: "This project is a landing page for a furniture store, designed to showcase a variety of products and styles. With an attractive and easy-to-navigate design, the page allows users to explore different furniture options and make purchases easily."
        }
      },

      otherProjects: {
        modern: {
          desc: "Modern restaurant landing page"
        },
        modernui: {
          desc: "Landing page based on modern UX/UI design"
        },
        outer: {
          desc: "Outdoor travel landing page"
        },
        saaslanding: {
          desc: "Modern SaaS landing page"
        },
        trpc: {
          desc: "CRUD application using tRPC"
        },
        expenses: {
          desc: "Mini expense tracker app built with TypeScript"
        },
        virtual: {
          desc: "Modern landing page development"
        },
        blogapi: {
          desc: "Basic REST API for a blog"
        },
        rest1: {
          desc: "API development practice"
        },
        rest2: {
          desc: "API development"
        },
        rest3: {
          desc: "REST API built with TypeScript"
        },
        rick: {
          desc: "Consuming the Rick and Morty API"
        }
      },
      // Projects Section
      projects: {
        title: "Projects",
        description: "Featured projects developed with React, Framer Motion, React Router and Node.js. Each application combines dynamic interfaces, smooth animations and a robust backend with Express",
        otherProjects: "Other projects",
        filters: {
          all: "All",
          front: "Front",
          backend: "Backend",
          other: "Other"
        },
        previous: "Previous project",
        next: "Next project",
        goToPage: "Go to page"
      },

      // Services Section
      services: {
        title: "Services",
        items: {
          webDev: {
            name: "Web Development",
            description: "Creating modern and responsive web applications with the latest technologies"
          },
          backendDev: {
            name: "Backend Development",
            description: "Development of robust and scalable APIs with Node.js and modern frameworks"
          },
          systemAnalysis: {
            name: "System Analysis",
            description: "Analysis and design of technological solutions adapted to business needs"
          },
          learning: {
            name: "Learning",
            description: "Constant update on new technologies and development best practices"
          }
        }
      },

      // Contact Section
      contact: {
        title: "Let's Build Something",
        titleHighlight: "Amazing",
        subtitle: "Write me",
        description: "Backend-focused software developer capable of delivering projects that enable optimized and continuous delivery to users.",
        role: "Systems Analyst - Backend Development",
        buttons: {
          email: "Email",
          linkedin: "LinkedIn",
          github: "GitHub"
        }
      },

      // Footer
      footer: {
        tagline: "Building robust and scalable backend solutions.",
        navigation: "Navigation",
        follow: "Follow me",
        rights: "All rights reserved."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;