import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementViLocale from 'element-ui/lib/locale/lang/vi'// element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
import elementJaLocale from 'element-ui/lib/locale/lang/ja'// element-ui lang
import enLocale from './lang/en'
import viLocale from './lang/vi'
import esLocale from './lang/es'
import jaLocale from './lang/ja'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  vi: {
    ...viLocale,
    ...elementViLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
  }
}
export function getLanguage() {
  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}
const i18n = new VueI18n({
  // set locale
  // options: en | vi | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
