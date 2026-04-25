import { useTranslation } from 'react-i18next';

const Seller = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h1>{t('main.header')}</h1>
      </div>
    </div>
  );
};

export default Seller;
