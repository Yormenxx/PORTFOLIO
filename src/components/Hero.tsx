import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';
import { FaDocker, FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiMysql, SiMongodb } from 'react-icons/si';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { SiGnubash } from "react-icons/si";
import { TextAnimate } from './ui/text-animate';
import { GridPattern } from './ui/grid-pattern';
import Type from './Type';
import { cn } from '@/lib/utils';

type techItem = {
  icon: React.ReactNode;
  name: string
}

function Hero() {
  const { t } = useTranslation();

  const techStack: techItem[] = [
    { icon: <FaGitAlt className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Git" },
    { icon: <SiNextdotjs className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Next" },
    { icon: <SiNestjs className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Nestjs" },
    { icon: <SiGnubash className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Bash" },
    { icon: <SiMysql className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "MySQL" },
    { icon: <SiMongodb className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "MongoDB" },
    { icon: <FaJava className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Java" },
    { icon: <FaDocker className="text-3xl text-neutral-700 dark:text-neutral-200" />, name: "Docker" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const iconContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
  };

  return (
    <section className="relative bg-background flex w-full items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />

      <div className="w-full relative">
        <motion.div
          className="px-6 md:px-15 grid grid-cols-1 justify-center mx-auto place-items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="w-full grid grid-cols-1 place-items-center text-center">

            <motion.div
              variants={itemVariants}
              className="mx-auto flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-1.5 mb-10"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c96b] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c96b]"></span>
              </span>
              <p className="text-[10px] text-neutral-700 dark:text-neutral-300 font-semibold uppercase tracking-[0.14em]">
                {t('hero.available')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full mb-4 relative z-10 flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl md:text-7xl tracking-tight">
                <span className="font-bold text-neutral-800 transition-colors duration-300 dark:text-white">
                  <Type />
                </span>
              </h2>

              <div className="max-w-2xl text-lg sm:text-xl leading-relaxed transition-colors duration-300 px-4 sm:px-0 mt-4 text-neutral-500 dark:text-neutral-400">
                <TextAnimate animation="blurIn" as="p">
                  {t('hero.role')}
                </TextAnimate>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="mb-6 text-xs uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                {t('hero.techStack')}
              </p>

              <motion.div
                className="flex items-center flex-wrap justify-center gap-3"
                variants={iconContainerVariants}
              >
                {techStack.map((tech, index) => (
                  <motion.div key={index} variants={iconVariants}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label={`Tecnología: ${tech.name}`}
                        className="flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {tech.icon}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 pt-12 px-4 sm:px-0 w-full sm:w-auto"
            >
              <motion.a
                href="/hv-juan.pdf"
                target="_blank"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium transition-all duration-200"
              >
                <FaFilePdf className="text-base" />
                {t('hero.downloadCV')}
              </motion.a>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-all duration-200"
              >
                <MdEmail className="text-base" />
                {t('hero.sendMessage')}
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;