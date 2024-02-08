<template>
  <div class="bg-section lg:bg-fixed">
    <div class="container mx-auto py-20">
      <!-- <h4 class="text-topic-name font-bold my-4">คณะ</h4> -->
      <TextUnderline :text="'คณะ'" :desc="'เว็บไซต์คณะทั้งหมดใน มหาวิทยาลัยหอการค้าไทย'" ></TextUnderline>
      <div  class="grid grid-cols-4 gap-4 showFaculty">
        <ButtonFaculty :item="item" v-for="(item,index) in sortListSchool" :key="index" ></ButtonFaculty>
      </div>

      <br/>

      <TextUnderline class="mt-8" :text="'วิทยาลัย'" :desc="'เว็บไซต์วิทยาลัยทั้งหมดใน มหาวิทยาลัยหอการค้าไทย'" ></TextUnderline>

      <div class="grid grid-cols-4 gap-2 showFaculty">
        <ButtonFaculty :item="item" v-for="(item,index) in sortListCollege" :key="index" ></ButtonFaculty>
      </div>
    </div>

  </div>
</template>

<script>
import {ref, defineComponent} from "vue"
import ButtonFaculty from '../components/Button/ButtonFaculty.vue';
import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "FacultyAll",
  components: {
    ButtonFaculty,
    TextUnderline
  },
  setup(props) {
    const schoolItem = [{
            "url":"https://ubs.utcc.ac.th/",
            "icon":"ba",
            "name":"บริหารธุรกิจ",
            "description":"School of Business",
            "isDisable":false,
            "color":"text-a-ba-FFCA0A"
         },
         {
            "url":"https://accountancy.utcc.ac.th/",
            "icon":"ac",
            "name":"บัญชี",
            "description":"School of Accountancy",
            "isDisable":false,
            "color": "text-a-ac-702C90"
         },
         {
           "url":"https://economics.utcc.ac.th/",
           "icon":"ec",
           "name":"เศรษฐศาสตร์",
           "description":"School of Economics",
           "isDisable":false,
           "color": "text-a-ec-EF59A0"
        },
        {
           "url":"https://humanities.utcc.ac.th/",
           "icon":"hm",
           "name":"มนุษยศาสตร์",
           "description":"School of Humanities",
           "isDisable":false,
           "color": "text-a-hm-ED1923"
        },
        {
         "url":"https://science.utcc.ac.th/",
         "icon":"st",
         "name":"วิทยาศาสตร์และเทคโนโลยี",
         "description":"School of Science & Technology",
         "isDisable":false,
         "color": "text-a-st-007947"
         },
         {
            "url":"https://commarts.utcc.ac.th/",
            "icon":"ca",
            "name":"นิเทศศาสตร์",
            "description":"School of Communication Arts",
            "isDisable":false,
            "color":"text-a-ca-0A408A"
         },
         {
            "url":"https://eng.utcc.ac.th/",
            "icon":"en",
            "name":"วิศวกรรมศาสตร์",
            "description":"School of Engineering",
            "isDisable":false,
            "color":"text-a-en-8D1C34"
         },
         {
            "url":"https://law.utcc.ac.th/",
            "icon":"lw",
            "name":"นิติศาสตร์",
            "description":"School of Law",
            "isDisable":false,
            "color":"text-a-lw-818386"
         },
         {
            "url":"https://tourism.utcc.ac.th/",
            "icon":"ts",
            "name":"การท่องเที่ยวและอุตสาหกรรมบริการ",
            "description":"School of Tourism and Services",
            "isDisable":false,
            "color": 'a-st-007947'
         },
         {
            "url":"https://ece.utcc.ac.th/",
            "icon":"gs",
            "name":"การศึกษาปฐมวัย",
            "description":"School of Early Childhood Education",
            "isDisable":false,
            "color": "text-a-gs-FF6801"
         },
         {
            "url":"https://digitalart.utcc.ac.th/",
            "icon":"dad",
            "name":"ศิลปะและการออกแบบดิจิทัล",
            "description":"School of Digital Arts Design",
            "isDisable":false,
            "color":"text-a-dad-53B5E8"
         },
         {
            "url":"https://www.utcconline.com/",
            "icon":"es",
            "name":"วิทยพัฒน์",
            "description":"Extension School",
            "isDisable":false,
            "color": "text-a-es-53B5E8"
         }]

         const collegeItem = [ {
            "url":"https://gs.utcc.ac.th/",
            "icon":"gs",
            "name":"บัณฑิตวิทยาลัย",
            "description":"Graduate School",
            "isDisable":false,
            "color":"text-a-gs-FF6801"
         },
         {
            "url":"https://ce.utcc.ac.th/",
            "icon":"ce",
            "name":"ผู้ประกอบการ",
            "description":"College of Entrepreneurship",
            "isDisable":false,
            "color": "text-a-ce-CB8E16"
         },
         {
            "url":"https://ism.utcc.ac.th/",
            "icon":"ism",
            "name":"นานาชาติเพื่อการจัดการ",
            "description":"International School of Management",
            "isDisable":false,
            "color":"text-a-ism-FFC80A"
         },
         {
            "url":"https://tcism.utcc.ac.th/",
            "icon":"tcism",
            "name":"นานาชาติไทยจีนเพื่อการจัดการ",
            "description":"Thai Chinese International School of Management",
            "isDisable":false,
            "color":"text-a-tcism-d19a3b"
         },
         {
            "url":"https://cce.utcc.ac.th/",
            "icon":"cce",
            "name":"การศึกษาต่อเนื่อง",
            "description":"College of Continuting Education",
            "isDisable":false,
            "color":"text-a-cce-CBD0E3"
         },
         {
            "url":"https://harbour.space/",
            "icon":"hsu",
            "name":"Harbour Space",
            "description":"Harbour.Space University",
            "isDisable":false,
            "color":"text-a-hsu-3D237F"
         }
        ];

         const sortListSchool =  ref(null);
         const sortListCollege = ref(null);

        const sortDataTH =()=>{
          sortListSchool.value  = schoolItem.sort((a, b) => a.icon.localeCompare(b.icon, "th"))
          sortListCollege.value = collegeItem.sort((a, b) => a.icon.localeCompare(b.icon, "th"))
         }

         sortDataTH()

         return{
         sortListSchool,
         sortListCollege
         }
  }

})
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.showFaculty {
   @include mobile {
      justify-items: center;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.5rem;
      padding: 1rem;
   }
}
.bg-section {
    background: url('../assets/image/bg-white-fac.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

</style>