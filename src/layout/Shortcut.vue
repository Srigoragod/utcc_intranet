<template>
  <div class="py-2 sm:px-4">
    <!-- <h4 class="font-bold text-topic-name pb-2">เมนูที่ใช้งานบ่อย</h4> -->
    <TextUnderline class="my-8" :text="'เมนูที่ใช้งานบ่อย'"></TextUnderline>
    <div class="grid grid-cols-2 px-4 sm:px-4 md:px-6 lg:px-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 " data-aos="fade-right">
       <!-- <ButtonBlue class="mr-8"  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlue> -->
       <ButtonPrimaryOutline  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :typeIcon="item.typeIcon" :icon="item.icon" :position="item.position" :isDisable="item.isDisable" :classCustom="item.class" ></ButtonPrimaryOutline>
    </div>
  </div>
</template>

<script>
import { ref,defineComponent  } from "vue";
// import ButtonBlue from '../components/ButtonBlue.vue';
import ButtonPrimaryOutline from "../components/Button/ButtonPrimaryOutline.vue";
import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "Shortcut",
  components: {
    // ButtonBlue,
    ButtonPrimaryOutline,
    TextUnderline
  },
  setup() {
    const items = ref([
      {
        text:'Microsoft 365',
        url:'http://mail.office365.com',
        typeIcon: 'fab',
        icon: 'windows',
        isDisable: false,
        position: 'left',
        class: "sm:hidden"
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