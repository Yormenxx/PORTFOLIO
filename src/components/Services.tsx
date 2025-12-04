import { useTranslation } from 'react-i18next';
import { FaComputer, FaServer, FaDatabase, FaGraduationCap } from 'react-icons/fa6';
import {MagicCard} from './ui/magic-card';
import {TextAnimate} from './ui/text-animate';

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

  return (
    <>
      <span id="services"></span>
      <section className="relative px-4 md:px-20">
        <div className="py-6">
          <h2 className="text-4xl text-neutral-500 dark:text-neutral-100 md:text-7xl font-bold text-center">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 place-items-center">
          <div className="w-full flex justify-center">
            <div className="w-5xl grid grid-cols-1 md:grid-cols-4 place-content-center text-white p-2">
              {SERVICES_ITEMS.map((service) => (
                <MagicCard key={service.number}>
                  <div className="px-4 py-5 dark:bg-neutral-950 dark:border dark:border-neutral-700">
                    <li className="flex flex-col items-start gap-3">
                      <span className="icons button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                        <span className="dark:text-neutral-950">{service.icon}</span>
                      </span>
                      <span className="text-sm leading-tight md:text-base tracking-tight text-neutral-600">
                        <TextAnimate animation="blurIn" as="p" className="dark:text-neutral-200">
                          {service.name}
                        </TextAnimate>
                      </span>
                    </li>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;