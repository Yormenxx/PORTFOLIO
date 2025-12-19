import { useTranslation } from 'react-i18next';
import { motion,Variants } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiMysql, SiMongodb } from 'react-icons/si';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { TextAnimate } from './ui/text-animate';
import { Highlighter } from './ui/highlighter';
import { GridPattern } from './ui/grid-pattern';
import Type from './Type';
import { cn } from '@/lib/utils';

type techItem ={
  icon: React.ReactNode;
  name:string
}

function Hero() {
  const { t } = useTranslation();

  const techStack:techItem[] = [
    { icon: <FaGitAlt className="text-4xl text-black dark:text-white" />, name: "Git" },
    { icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />, name: "Next" },
    { icon: <SiNestjs className="text-4xl text-black dark:text-white" />, name: "Nestjs" },
    { icon: <SiMysql className="text-4xl text-black dark:text-white" />, name: "MySQL" },
    { icon: <SiMongodb className="text-4xl text-black dark:text-white" />, name: "MongoDB" },
    { icon: <FaJava className="text-4xl text-black dark:text-white" />, name: "Java" }
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  const iconContainerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants:Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    },
  };

  return (
    <section className="relative bg-background flex size-full items-center justify-center overflow-hidden">
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

      <div className="md:h-screen w-full relative py-4 pt-4 md:pt-10">
        <motion.div 
          className="pt-18 px-15 grid grid-cols-1 justify-center mx-auto place-items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} 
        >
          <div className="w-full grid grid-cols-1 place-items-center text-center">
            
         
            <motion.div 
              variants={itemVariants}
              className="mx-auto md:mx-0 flex items-center justify-start w-[300px] !backdrop-blur-xl border border-neutral-900 dark:border-neutral-700 rounded-lg px-2 py-1 my-5"
            >
              <div className="w-[10px] h-[10px] rounded-full border border-[#00ec76] bg-[#00ec76] mr-3 dot"></div>
              <p className="text-sm font-medium">
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

              <div className="max-w-2xl text-lg sm:text-xl leading-relaxed transition-colors duration-300 px-4 sm:px-0 mt-4">
                 <TextAnimate animation="blurIn" as="p">
                    {t('hero.role')}
                 </TextAnimate>
              </div>
            </motion.div>

           
            <motion.div variants={itemVariants}>
              <p className="mb-6 text-neutral-600 dark:text-white">
                <Highlighter action="underline" color="#00ec76">
                  {t('hero.techStack')}
                </Highlighter>
              </p>

              <motion.div 
                className="flex items-center space-x-3 flex-wrap justify-center gap-y-3"
                variants={iconContainerVariants}
              >
                {techStack.map((tech, index) => (
                  <motion.div key={index} variants={iconVariants} >
                    <Tooltip>
                      <TooltipTrigger aria-label={`Tecnología: ${tech.name}`} className="icons button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700 peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5 hover:text-[#00ec76] duration-200 ease-in-out">
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
              className="flex flex-col md:flex-row justify-start items-start gap-4 sm:gap-6 mt-10 px-4 sm:px-0 py-2"
            >
              <motion.a 
                href="/hv-juan.pdf" 
                target="_blank" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-black/4 dark:bg-white/10 border-white/10 text-white cursor-pointer"
              >
                <div className="p-2 rounded-lg transition-colors duration-300 text-white bg-blue-500">
                  <FaFilePdf />
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-100 font-medium">
                    {t('hero.downloadCV')}
                  </p>
                </div>
              </motion.a>

              <motion.a 
                href="#contacto" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all border w-full sm:w-auto bg-black/4 dark:bg-white/10 border-white/10 text-white cursor-pointer"
              >
                <div className="p-2 rounded-lg transition-colors duration-300 bg-red-500">
                  <MdEmail />
                </div>
                <div>
                  <p className="text-neutral-600 dark:text-neutral-100 font-medium">
                    {t('hero.sendMessage')}
                  </p>
                </div>
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;