<template>
  <div class="py-2">
    <h4 class="font-bold text-topic-name pb-2">เมนูที่ใช้งานบ่อย</h4>
    <div class="flex justify-start" data-aos="fade-right">
       <!-- <ButtonBlue class="mr-8"  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlue> -->
       <ButtonPrimaryOutline class="mr-4"  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :typeIcon="item.typeIcon" :icon="item.icon" :position="item.position" :isDisable="item.isDisable"></ButtonPrimaryOutline>
    </div>
  </div>
</template>

<script>
import { ref,defineComponent  } from "vue";
// import ButtonBlue from '../components/ButtonBlue.vue';
import ButtonPrimaryOutline from "../components/Button/ButtonPrimaryOutline.vue";
export default defineComponent({
  name: "Shortcut",
  components: {
    // ButtonBlue,
    ButtonPrimaryOutline
  },
  setup() {
    const items = ref([
      {
        text:'Microsoft 365',
        url:'http://mail.office365.com',
        typeIcon: 'fab',
        icon: 'windows',
        isDisable: false,
        position: 'left'
      },
      {
        text:'เบอร์โทรภายใน',
        url:'http://utcc2.utcc.ac.th/utccphone/',
        typeIcon: 'fas',
        icon: 'phone',
        isDisable: false,
        position: 'left'
      },
      {
        text:'Logo UTCC',
        url:'https://www.utcc.ac.th/logo/',
        typeIcon: 'fas',
        icon: 'arrow-right',
        isDisable: false,
        position: 'right'
      },
      {
        text:'ระบบบันทึกใบลา',
        url:'http://hr.utcc/webtime/default1.aspx',
        typeIcon: 'fas',
        icon: 'arrow-right',
        isDisable: false,
        position: 'right'
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