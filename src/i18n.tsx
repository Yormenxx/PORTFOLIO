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
        architects: {
          title: "Architects fan landing",
          description: "Mi proyecto es una página web dedicada a la banda británica Architects, donde los fans pueden explorar su historia, discografía y merch. La interfaz moderna y responsive garantiza una experiencia inmersiva en cualquier dispositivo. Ideal para conocer más sobre su música y conectarse con la comunidad de seguidores."
        },
        halo: {
          title: "Halo web landing",
          description: "Este proyecto es una página web inspirada en Halo Infinite, diseñada para ofrecer información detallada sobre el juego, noticias, guías y contenido multimedia. Con una interfaz dinámica y responsive, permite a los fans sumergirse en el universo de Halo de manera intuitiva y visualmente atractiva."
        },
        headphones: {
          title: "Headphone landing",
          description: "Este proyecto es una Landing basa en la venta de audífonos, mostrando una galería visual con diseños y características. La interfaz minimalista y responsive facilita la exploración de diferentes modelos, ofreciendo una experiencia sencilla y atractiva para los usuarios."
        },
        books: {
          title: "Books storage web",
          description: "Este proyecto backend, desarrollado con Node.js y Express, permite almacenar y gestionar información de libros mediante un archivo JSON. Proporciona una API sencilla y eficiente para realizar operaciones como crear o eliminar libros."
        },
        saas: {
          title: "SaaS landing page",
          description: "Este proyecto es un landing page para un SaaS, diseñado para destacar sus funciones, beneficios y características clave. Con un diseño moderno y responsive, la página combina llamadas a la acción efectivas y una presentación clara del producto, ideal para captar nuevos usuarios y generar conversiones."
        },
        socket: {
          title: "Socket chat",
          description: "Este proyecto es un chat en tiempo real desarrollado con Node.js, Express y Socket.io. Permite la comunicación instantánea entre usuarios con una interfaz simple y responsive."
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
        books: {
          title: "Books Storage Web",
          description: "This backend project, developed with Node.js and Express, allows storing and managing book information through a JSON file. It provides a simple and efficient API to perform operations such as creating or deleting books."
        },
        saas: {
          title: "SaaS Landing Page",
          description: "This project is a landing page for a SaaS, designed to highlight its functions, benefits and key features. With a modern and responsive design, the page combines effective calls to action and a clear product presentation, ideal for attracting new users and generating conversions."
        },
        socket: {
          title: "Socket Chat",
          description: "This project is a real-time chat developed with Node.js, Express and Socket.io. It allows instant communication between users with a simple and responsive interface."
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