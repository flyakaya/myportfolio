import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { professional } from './tones/professional';
import { fun } from './tones/fun';
import { Tones } from '@/types';

const getToneFromUrl = () => {
  try {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('tone') === Tones.FUN ? Tones.FUN : Tones.PROFESSIONAL;
    }
    return Tones.PROFESSIONAL;
  } catch (error) {
    return Tones.PROFESSIONAL;
  }
};

i18n.use(initReactI18next).init({
  resources: {
    professional: {
      translation: professional,
    },
    fun: {
      translation: fun,
    },
  },
  lng: getToneFromUrl(),
  fallbackLng: Tones.PROFESSIONAL,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 