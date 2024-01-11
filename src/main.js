import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import AOS from 'aos';
import 'aos/dist/aos.css';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faPhone, faDownload, faCalendar, faLink, faList, faSailboat, faFilePdf, faFileWord, faChevronUp, faAngleRight, faCircleXmark, faFileArrowDown, faCaretDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight,faPhone,faDownload,faCalendar,faLink,faList,faSailboat,faFilePdf, faFileWord,faChevronUp,faAngleRight,faCircleXmark,faFileArrowDown,faCaretDown,faCircleInfo)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
AOS.init();
