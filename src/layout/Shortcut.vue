<template>
  <div>
    <h4 class="font-bold text-a-blue-2E3191">เมนูที่ใช้งานบ่อย</h4>
    <div class="flex justify-start">
       <ButtonBlue class="mr-8" v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlue>
    </div>
  </div>
</template>

<script>
import { ref,defineComponent  } from "vue";
import ButtonBlue from '../components/ButtonBlue.vue';
export default defineComponent({
  name: "Shortcut",
  components: {
    ButtonBlue
  },
  setup() {
    const items = ref([
      {
        text:'Microsoft 365',
        url:'',
        icon: 'link',
        isDisable: false
      },
      {
        text:'เบอร์โทรภายใน',
        url:'',
        icon: 'phone',
        isDisable: false
      },
      {
        text:'Logo UTCC',
        url:'',
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