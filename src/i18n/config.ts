import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { professional } from './tones/professional';
import { fun } from './tones/fun';
import { defaultTone, TONES } from '../constants';

const getToneFromUrl = () => {
  try {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('tone') === TONES.FUN ? TONES.FUN : defaultTone;
    }
    return defaultTone;
  } catch (error) {
    return defaultTone;
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
  fallbackLng: defaultTone,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 