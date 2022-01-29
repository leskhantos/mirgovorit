
import './styles/quasar.scss'
import lang from 'quasar/lang/en-US.js'
import '@quasar/extras/material-icons/material-icons.css'
// outside of a Vue component:
import { Screen } from 'quasar'
Screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
  },
  lang: lang
}