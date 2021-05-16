import I18n from 'i18n-js';
// import * as RNLocalize from "react-native-localize";

import en from './locales/en';
import uz from './locales/uz';

// const locales = RNLocalize.getLocales();
// if (Array.isArray(locales)) {
// I18n.locale = locales[0].languageTag;
// }
export const changeLanguage = (val) => {
  if (val) I18n.locale = val;
  return val;
};

I18n.defaultLocale = 'uz';
I18n.fallbacks = true;
I18n.translations = {
  uz,
  en,
};

export default I18n;
