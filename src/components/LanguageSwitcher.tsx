import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { IoLanguage } from 'react-icons/io5';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
   
    >
      {/* <IoLanguage className="text-lg" /> */}
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {i18n.language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
      </span>
    </motion.button>
  );
}

export default LanguageSwitcher;