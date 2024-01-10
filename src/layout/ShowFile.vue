<template>
  <div class="py-2" :class="[isNotHome ? 'mt-24' :'']">
    <el-divider data-aos="fade-up" class="text-a-gray-64748b " content-position="center">
      <h4 class="text-all-file font-light leading-none pt-2">{{ topicName }}</h4>
    </el-divider>
    <div class="grid gap-4 items-start" :class="[gridCols]" >
      <FileList
        v-for="(item, index) in fileData"
        :id="item.id"
        :key="index"
        :class="[ item.showColumn != '' ? 'col-span-2' : '']"
        :topicName="item.topicName"
        :isAlert="item.isAlert"
        :alertDetail="item.alertDetail"
        :dataList="item.itemList"
        :isHeightFull="item.isFull"
        :isNotHome="isNotHome"
      ></FileList>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, defineComponent } from "vue";

// data
import homedata from '../data/homedata.json'
import documentdata from '../data/documentdata.json'
// components
import FileList from "../components/FileList.vue";

export default defineComponent({
  name: "ShowFile",
  props: {
    items: {type: Array, require: true},
    gridCols: { type: String, require: true,  default: 'grid-cols-2' },
    topicName:  { type: String, require: true,  default: 'All Files' }
  },
  components: {
    FileList,
  },
  setup(props) {
    const route = useRoute()
    const fileData = ref(null);
    const isNotHome = ref(true)
    const topicName = ref('All Files')
    const initialData =()=>{
       if(route.name == 'form'){
        fileData.value = documentdata
       }else{
        fileData.value = homedata
        isNotHome.value = false
       }
    }
    initialData()
    return {
      fileData,
      isNotHome,
      topicName
    };
  },
});
</script>

<style lang="scss" >
.text-all-file {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0874D9),
    color-stop(100%, #548dd9),
    to(#548dd9)
  );
  background: -webkit-linear-gradient(left, #0874D9, #548dd9 100%, #548dd9 0);
  background: linear-gradient(90deg, #0874D9, #548dd9 100%, #548dd9 0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
