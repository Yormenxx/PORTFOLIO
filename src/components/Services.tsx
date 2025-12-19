import { useTranslation } from 'react-i18next';
import { FaComputer, FaServer, FaDatabase, FaGraduationCap } from 'react-icons/fa6';
import { MagicCard } from './ui/magic-card';
import { TextAnimate } from './ui/text-animate';
import { motion,Variants } from 'framer-motion';

function Services() {
  const { t } = useTranslation();

  const SERVICES_ITEMS = [
    {
      number: 1,
      icon: <FaComputer className="text-2xl" />,
      name: t('services.items.webDev.name'),
      description: t('services.items.webDev.description')
    },
    {
      number: 2,
      icon: <FaServer className="text-2xl" />,
      name: t('services.items.backendDev.name'),
      description: t('services.items.backendDev.description')
    },
    {
      number: 3,
      icon: <FaDatabase className="text-2xl" />,
      name: t('services.items.systemAnalysis.name'),
      description: t('services.items.systemAnalysis.description')
    },
    {
      number: 4,
      icon: <FaGraduationCap className="text-2xl" />,
      name: t('services.items.learning.name'),
      description: t('services.items.learning.description')
    }
  ];

 
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      }
    }
  };

  const cardVariants:Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <>
      <span id="services"></span>
      <section className="relative px-4 md:px-20">
        <div className="py-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} 
            transition={{ duration: 0.5 }}
            className="text-4xl text-neutral-500 dark:text-neutral-100 md:text-7xl font-bold text-center"
          >
            {t('services.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 place-items-center">
          <div className="w-full flex justify-center">
          
            <motion.div 
              className="w-5xl grid grid-cols-1 md:grid-cols-4 place-content-center text-white p-2 "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} 
            >
              {SERVICES_ITEMS.map((service) => (
                <motion.div key={service.number} variants={cardVariants} className="h-full">
                  <MagicCard className="h-full">
                    <div className="px-4 py-5 dark:bg-neutral-950 dark:border dark:border-neutral-700 h-full flex flex-col justify-between">
                      <div className="flex flex-col items-start gap-3">
                        <span className="icons button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                          <span className="dark:text-neutral-950">{service.icon}</span>
                        </span>
                        <span className="text-sm leading-tight md:text-base tracking-tight text-neutral-600 w-full">
                          <TextAnimate animation="blurIn" as="p" className="dark:text-neutral-200 font-bold">
                            {service.name}
                          </TextAnimate>
                        </span>
                      </div>

                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 mt-4">
                        {service.description}
                      </p>
                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;