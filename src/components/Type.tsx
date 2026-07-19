import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

function Type() {
  const { t, i18n } = useTranslation();

  return (
    <TypeAnimation
     
      key={i18n.language} 
      sequence={[
        t('hero.analyst'), 
        1000,
        t('hero.developer'), 
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

export default Type;