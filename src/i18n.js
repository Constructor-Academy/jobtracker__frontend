import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import Cookie from 'js-cookie'
import moment from 'moment'
import {initReactI18next} from 'react-i18next'
import 'moment/locale/de'

moment.updateLocale('en', {
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm',
    },
})

// As react-i18next uses `useSuspense` and this is still an experimental feature, we are opting out. To ensure that all
// translations are loaded before we render, we add all namespaces in following initialization of i18next.
// Else we would have to check if translations are ready in each component manually. As it is a SPA and we probably will
// do the landing page with NextJS, the performance downside is not a problem here.
const userLocale = Cookie.get('i18nLocale')

i18next
    .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ns: ['api_errors', 'auth', 'common', 'contact', 'dashboard', 'errors', 'jobs', 'landing_page', 'legal', 'privacy', 'profile', 'reports', 'settings', 'booklet', 'success', 'terms_and_conds', 'components/countries', 'components/feedback', 'components/profile_popup', 'components/sidebar', 'components/user_card', 'components/clearRejected'],
        defaultNS: 'common',
        lng: userLocale || 'en',
        fallbackLng: 'en',
        debug: false,
        react:{
            useSuspense: false,
            wait: true
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            requestOptions: {
                cache: 'no-cache',
            },
        }
    })

export default i18next
