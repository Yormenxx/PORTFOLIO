import { useTranslation } from 'react-i18next';
import { FaComputer, FaServer, FaDatabase, FaGraduationCap } from 'react-icons/fa6';
import { TextAnimate } from './ui/text-animate';
import { motion, Variants } from 'framer-motion';

function Services() {
  const { t } = useTranslation();

  const SERVICES_ITEMS = [
    {
      number: '01',
      icon: <FaComputer className="text-xl" />,
      name: t('services.items.webDev.name'),
      description: t('services.items.webDev.description')
    },
    {
      number: '02',
      icon: <FaServer className="text-xl" />,
      name: t('services.items.backendDev.name'),
      description: t('services.items.backendDev.description')
    },
    {
      number: '03',
      icon: <FaDatabase className="text-xl" />,
      name: t('services.items.systemAnalysis.name'),
      description: t('services.items.systemAnalysis.description')
    },
    {
      number: '04',
      icon: <FaGraduationCap className="text-xl" />,
      name: t('services.items.learning.name'),
      description: t('services.items.learning.description')
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const rowVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <span id="services"></span>
      <section className="relative px-4 md:px-20 py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl">
          {/* Eyebrow + heading */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              {t('services.title')}
            </span>
          </motion.div>

          {/* Services list */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {SERVICES_ITEMS.map((service, idx) => (
              <motion.div
                key={service.number}
                variants={rowVariants}
                className={`group relative border-t ${
                  idx === SERVICES_ITEMS.length - 1 ? 'border-b' : ''
                } border-neutral-200 dark:border-neutral-800 py-8 md:py-10 transition-colors duration-300 hover:border-neutral-400 dark:hover:border-neutral-600`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                  {/* Number */}
                  <span className="font-mono text-sm text-neutral-400 dark:text-neutral-600 md:w-12 shrink-0 transition-opacity duration-300 group-hover:opacity-40">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-neutral-900 group-hover:text-neutral-900 dark:group-hover:border-white dark:group-hover:text-white">
                    {service.icon}
                  </span>

                  {/* Text */}
                  <div className="flex-1">
                    <TextAnimate
                      animation="blurIn"
                      as="h3"
                      className="text-lg md:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
                    >
                      {service.name}
                    </TextAnimate>
                    <p className="mt-2 max-w-xl text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;