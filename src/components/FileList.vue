<template>
  <div>
    <!-- Content -->
    <div class="container-file-list" :class="[isHeightFull ? 'h-full' : '']">
      <h4 class="font-bold text-topic-name py-4">
        <div class="flex items-center justify-center">
          <!-- <font-awesome-icon :icon="['fas', 'sailboat']" class="pr-4" /> -->
          <span v-html="topicName"></span>
        </div>
      </h4>
      <div v-show="isAlert" class="px-4 mb-4">
        <el-alert :title="alertDetail.title" :description="alertDetail.description" type="info" show-icon :closable="false"> </el-alert>
      </div>
      <div v-if="!isSplit">
        <FileItem
          v-for="(item, index) in dataList"
          :icon="item.icon"
          :name="item.name"
          :description="item.description"
          :url="item.url"
          :isDisable="item.isDisable"
          :fileName="item.fileName"
          :pathFile="item.pathFile"
          :key="index"
        ></FileItem>
      </div>
      <div v-else class="grid grid-cols-2 gap-4 items-stretch ...">
        <div v-for="(data, index) in dataListX" :key="index">
          <FileItem
            v-for="(item, key) in data"
            :icon="item.icon"
            :name="item.name"
            :description="item.description"
            :url="item.url"
            :isDisable="item.isDisable"
            :fileName="item.fileName"
            :pathFile="item.pathFile"
            :key="key"
          ></FileItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import FileItem from "./FileItem.vue";

export default defineComponent({
  name: "FileList",
  components: {
    FileItem,
  },
  props: {
    topicName: { type: String, required: true },
    dataList: { type: Array, required: true },
    isHeightFull: { type: Boolean, required: false },
    isAlert: {type: Boolean, required: false},
    alertDetail: {type: Object, required: true}
  },
  setup(props) {
    const dataListX = ref([]);
    const isSplit = ref(false);
    const dividedArray = (items) => {
        items.sort((a, b) => a.name.localeCompare(b.name, "th"));
      const setSize = 14;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }
      dataListX.value = dividedArray;
    };

    const handleArrayFile = () => {

      // props.dataList.filter((item) =>  console.log('...', JSON.stringify(item,null,4)));
      if (props.dataList.length > 10) {
        dividedArray(props.dataList);
        isSplit.value = true;
      } else {
        dataListX.value = props.dataList;
      }
    };
    handleArrayFile();
    return {
      dataListX,
      isSplit,
    };
  },
});
</script>

<style lang="scss" scoped>
.container-file-list {
  border: 1px solid #e5f1fb;
  border-radius: 10px;
  padding: 1rem 0 2rem 0;
  margin-top: 2rem;
  .text-topic-name {
    background: rgba(46, 49, 145, 1);
    background: linear-gradient(
      81deg,
      rgba(46, 49, 145, 1) 0%,
      rgba(52, 52, 67, 1) 62%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
