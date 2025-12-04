import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGitAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiMysql, SiMongodb } from 'react-icons/si';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import {TextAnimate} from './ui/text-animate';
import {Highlighter} from './ui/highlighter';
import {GridPattern }from './ui/grid-pattern';
import Type from './Type';
import { cn } from '@/lib/utils';

function Hero() {
  const { t } = useTranslation();

  const techStack = [
    { icon: <FaGitAlt className="text-4xl text-black" />, name: "Git" },
    { icon: <SiNextdotjs className="text-4xl text-black" />, name: "Next" },
    { icon: <SiNestjs className="text-4xl text-black" />, name: "Nestjs" },
    { icon: <SiMysql className="text-4xl text-black" />, name: "MySQL" },
    { icon: <SiMongodb className="text-4xl text-black" />, name: "MongoDB" },
    { icon: <FaJava className="text-4xl text-black" />, name: "Java" }
  ];

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
        <div className="pt-18 px-15 grid grid-cols-1 justify-center mx-auto place-items-center relative z-10">
          <div className="w-full grid grid-cols-1 place-items-center text-center">
            
            {/* Badge Disponible */}
            <div className="mx-auto md:mx-0 flex items-center justify-start w-[300px] !backdrop-blur-xl border border-neutral-900 dark:border-neutral-700 rounded-lg px-2 py-1 my-5">
              <div className="w-[10px] h-[10px] rounded-full border border-[#00ec76] bg-[#00ec76] mr-3 dot"></div>
              <TextAnimate animation="blurIn" as="p">
                {t('hero.available')}
              </TextAnimate>
            </div>

            {/* Título y Descripción */}
            <div className="w-full mb-4 relative z-10 flex flex-col items-center justify-center">
              <h2 className="text-2xl md:text-7xl tracking-tight">
                <span className="font-bold text-neutral-800 transition-colors duration-300 dark:text-white">
                  <Type />
                </span>
              </h2>

              <TextAnimate 
                animation="blurIn" 
                as="p" 
                className="max-w-2xl text-lg sm:text-xl leading-relaxed transition-colors duration-300 px-4 sm:px-0"
              >
                {t('hero.role')}
              </TextAnimate>
            </div>

            {/* Stack Tecnológico */}
            <div>
              <p className="mb-6 text-neutral-600 dark:text-white">
                <Highlighter action="underline" color="#00ec76">
                  {t('hero.techStack')}
                </Highlighter>
              </p>

              <div className="flex items-center space-x-3">
                {techStack.map((tech, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger className="icons button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5 hover:text-[#00ec76] duration-200 ease-in-out">
                      {tech.icon}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col md:flex-row justify-start items-start gap-4 sm:gap-6 mt-6 px-4 sm:px-0 py-2">
              <a 
                href="/hv-juan.pdf" 
                target="_blank" 
                className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-black/4 border-white/10 hover:-translate-y-0.5 ease-in-out text-white"
              >
                <div className="p-2 rounded-lg transition-colors duration-300 text-white bg-blue-500">
                  <FaFilePdf />
                </div>
                <div>
                  <TextAnimate animation="blurIn" as="p" className="text-neutral-600 dark:text-neutral-100">
                    {t('hero.downloadCV')}
                  </TextAnimate>
                </div>
              </a>

              <a 
                href="#contacto" 
                className="flex items-center gap-3 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all border w-full sm:w-auto bg-black/4 border-white/10 hover:-translate-y-0.5 duration-200 ease-in-out text-white"
              >
                <div className="p-2 rounded-lg transition-colors duration-300 bg-red-500">
                  <MdEmail />
                </div>
                <div>
                  <TextAnimate animation="blurIn" as="p" className="text-neutral-600 dark:text-neutral-100">
                    {t('hero.sendMessage')}
                  </TextAnimate>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;