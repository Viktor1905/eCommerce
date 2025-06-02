import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        onClick={() => {
          changeLanguage('en');
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          changeLanguage('ru');
        }}
      >
        Русский
      </button>
    </div>
  );
}
