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
import { faArrowRight, faPhone, faDownload, faCalendar, faLink, faList, faSailboat, faFilePdf, faFileWord, faChevronUp, faAngleRight, faCircleXmark, faFileArrowDown, faCaretDown, faCircleInfo, faGraduationCap, faGlobe, faMagnifyingGlass, faClockRotateLeft, faHashtag, faXmark, faStar, faGlasses, faFileLines, faMagnifyingGlassChart, faSignature, faPlane, faBahtSign, faFileInvoiceDollar, faPersonRunning, faChessKnight, faTags, faBox, faHouseLock, faRankingStar, faScaleBalanced, faSackDollar, faHandHoldingDollar, faHouse, faChampagneGlasses, faCalendarDays, faChalkboardTeacher, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faWindows} from '@fortawesome/free-brands-svg-icons'
library.add(faArrowRight,faPhone,faDownload,faCalendar,faLink,faList,faSailboat,faFilePdf, faFileWord,faChevronUp,faAngleRight,faCircleXmark,faFileArrowDown,faCaretDown,faCircleInfo,faGraduationCap,faGlobe,faMagnifyingGlass,faWindows, faClockRotateLeft,faHashtag,faXmark,faStar,faGlasses, faFileLines, faMagnifyingGlassChart,faSignature,faPlane, faBahtSign, faFileInvoiceDollar,faPersonRunning, faChessKnight, faTags, faBox,faHouseLock,faRankingStar, faScaleBalanced,faSackDollar,faHandHoldingDollar, faHouse, faChampagneGlasses, faCalendarDays, faChalkboardTeacher,faAddressBook)

const app = createApp(App)


app.use(router)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
AOS.init();
