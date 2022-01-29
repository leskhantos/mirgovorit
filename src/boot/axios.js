import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'https://eg-cdn.s3.eu-central-1.amazonaws.com' })

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = api

})

export { axios, api }