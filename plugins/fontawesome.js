import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faWhatsapp, faEnvelope, faFacebook, faInstagram, faLinkedin)
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})