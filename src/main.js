import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery' 
import popper from 'popper.js'

global.jQuery = jQuery  
global.Popper = popper

import 'bootstrap' //js

// font awesome
import fontawesome from '@fortawesome/fontawesome'
import faUniversity from '@fortawesome/fontawesome-free-solid/faUniversity'
import faUserShield from '@fortawesome/fontawesome-free-solid/faUserShield'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit'
import faTasks from '@fortawesome/fontawesome-free-solid/faTasks'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'
import faBuilding from '@fortawesome/fontawesome-free-solid/faBuilding'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle'

import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF' 
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook' 
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype' 
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube' 
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter' 
import faVimeo from '@fortawesome/fontawesome-free-brands/faVimeo' 
import faPinterest from '@fortawesome/fontawesome-free-brands/faPinterest' 
import faPinterestP from '@fortawesome/fontawesome-free-brands/faPinterestP' 
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlus' 
import faGooglePlusG from '@fortawesome/fontawesome-free-brands/faGooglePlusG' 

fontawesome.library.add(faUniversity)
fontawesome.library.add(faUserShield)
fontawesome.library.add(faPencilAlt)
fontawesome.library.add(faEdit)
fontawesome.library.add(faTasks)
fontawesome.library.add(faCogs)
fontawesome.library.add(faBuilding)
fontawesome.library.add(faBook)
fontawesome.library.add(faAngleDown)
fontawesome.library.add(faExclamationTriangle)


fontawesome.library.add(faFacebookF) 
fontawesome.library.add(faFacebook) 
fontawesome.library.add(faSkype) 
fontawesome.library.add(faYoutube) 
fontawesome.library.add(faTwitter) 
fontawesome.library.add(faVimeo) 
fontawesome.library.add(faPinterest) 
fontawesome.library.add(faPinterestP) 
fontawesome.library.add(faGooglePlus) 
fontawesome.library.add(faGooglePlusG) 
//end font awesome

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
