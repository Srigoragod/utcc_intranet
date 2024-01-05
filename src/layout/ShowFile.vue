<template>
  <div>
    <el-divider data-aos="fade-up" class="text-a-gray-64748b my-2" content-position="center">
      <h4 class="text-all-file font-light leading-none pt-2">All Files</h4>
    </el-divider>
    <div class="grid grid-cols-2 gap-4 items-start">
      <FileList
        v-for="(item, index) in fileData"
        :key="index"
        :class="[ item.showColumn != '' ? 'col-span-2' : '']"
        :topicName="item.topicName"
        :isAlert="item.isAlert"
        :alertDetail="item.alertDetail"
        :dataList="item.itemList"
        :isHeightFull="item.isFull"
      ></FileList>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import FileList from "../components/FileList.vue";
export default defineComponent({
  name: "ShowFile",
  props: {
    items: {type: Array, require: true}
  },
  components: {
    FileList,
  },
  setup(props) {
    const fileData = ref(props.items);
    return {
      fileData,
    };
  },
});
</script>

<style lang="scss" scoped>
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
