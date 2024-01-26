<template>
  <div class="py-2">
    <h4 class="font-bold text-topic-name pb-2">เมนูที่ใช้งานบ่อย</h4>
    <div class="flex justify-start" data-aos="fade-right">
       <ButtonBlue class="mr-8"  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlue>
       <ButtonPrimaryOutline></ButtonPrimaryOutline>
    </div>
  </div>
</template>

<script>
import { ref,defineComponent  } from "vue";
import ButtonBlue from '../components/ButtonBlue.vue';
import ButtonPrimaryOutline from "../components/ButtonPrimaryOutline.vue";
export default defineComponent({
  name: "Shortcut",
  components: {
    ButtonBlue,
    ButtonPrimaryOutline
  },
  setup() {
    const items = ref([
      {
        text:'Microsoft 365',
        url:'http://mail.office365.com',
        icon: 'link',
        isDisable: false
      },
      {
        text:'เบอร์โทรภายใน',
        url:'http://utcc2.utcc.ac.th/utccphone/',
        icon: 'phone',
        isDisable: false
      },
      {
        text:'Logo UTCC',
        url:'https://www.utcc.ac.th/logo/',
        icon: 'link',
        isDisable: false
      },
      {
        text:'ระบบบันทึกใบลา',
        url:'http://hr.utcc/webtime/default1.aspx',
        icon: 'link',
        isDisable: false
      }
    ])

    return{
      items
    }
  }

})
</script>

<style>

</style>