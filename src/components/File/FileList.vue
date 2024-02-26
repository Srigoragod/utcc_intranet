<template>
  <div >
    <!-- Content -->
    <div class="container-file-list bg-white" :class="[isHeightFull ? 'h-full' : '']" data-aos="fade-up">
      <h4 class="text-topic-name py-4" v-show="isShowTopic" >
        <div class="flex items-center justify-center w-full" v-html="topicName">
        </div>
      </h4>
      <div v-if="isAlert && alertDetail.title" class="text-a-blue-2E3191 px-4 mb-4 rounded border-l-4 border-blue-500  flex items-center py-2 bg-blue-100 text-base md:text-xl lg:text-1xl "  >
        <!-- <el-alert :title="alertDetail.title" :description="alertDetail.description" type="info" show-icon :closable="false"> </el-alert> -->
        <font-awesome-icon :icon="['fas', 'circle-info']" class="pr-2"/>
        <label class="" v-html="alertDetail.title"></label>
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
          :isNotHome="isNotHome"
          :isFull="item.isFull"
        ></FileItem>
      </div>
      <div v-else class="grid grid-cols-2 gap-4 items-stretch">
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
            :isNotHome="isNotHome"
            :isFull="item.isFull"
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
    alertDetail: {type: Object, required: true},
    isNotHome:{tyep: Boolean, required: true, default: false},
    isSplit:{tyep: Boolean, required: false, default: false},
    isShowTopic:{tyep: Boolean, required: false, default: false},
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
      if (props.isSplit) {
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
<style >
/* .el-alert__title{
  font-size: 1.5rem;
} */
</style>

<style lang="scss" scoped>

@import "../../style/base.scss";
.container-file-list {
  border: 1px solid #e5f1fb;
  border-radius: 10px;
  padding: 1rem 0;
  // margin-top: 2rem;
  .is-mobile {
     @include mobile {
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
     }
  }
  .text-topic-name {
    background: rgba(46, 49, 145, 1);
    background: linear-gradient(
      81deg,
      rgba(46, 49, 145, 1) 0%,
      rgba(52, 52, 67, 1) 62%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @include mobile {
    font-size: 1.25rem;
    line-height: normal;
    text-align: center;
     margin: 0 .5rem;
   }

  }

}
</style>
