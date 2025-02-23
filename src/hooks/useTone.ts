import { useTranslation } from "react-i18next";
import { Tones } from '@/types';

const useTone = () => {
  const { i18n } = useTranslation();
  const tone = i18n.language === Tones.FUN ? Tones.FUN : Tones.PROFESSIONAL;

  const isFunMode = () => {
    return tone === Tones.FUN;
  }

  return { tone, isFunMode };
};



export default useTone; 