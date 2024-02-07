<template>
  <div class="py-2 relative" :class="[isNotHome ? 'mt-24' :'']">
    <TextUnderline class="" :text="'Forms &Documents'"  :desc="''"></TextUnderline>
    <br/>
    <div class="is-desktop grid gap-4 items-center" :class="[gridCols]"  >
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
        :isSplit="item.isSplit"
      ></FileList>
    </div>
    <div class="is-mobile  grid gap-4 grid-cols-1 px-4 md:hidden">
      <FileListMobile
        v-for="(item, index) in fileData"
        :id="item.id"
        :key="index"
        :topicName="item.topicName"
        :dataList="item.itemList"
      >

      </FileListMobile>
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
import FileList from "../components/File/FileList.vue";
import FileListMobile from "../components/File/FileListMobile.vue";

import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "ShowFile",
  props: {
    items: {type: Array, require: true},
    gridCols: { type: String, require: true,  default: 'grid-cols-2' },
    topicName:  { type: String, require: true,  default: 'All Files' }
  },
  components: {
    FileList,
    FileListMobile,
    TextUnderline
  },
  setup(props) {
    const route = useRoute()
    const fileData = ref(null);
    const isNotHome = ref(true)
    const topicName = ref('All Files')
    const initialData =()=>{
      topicName.value = props.topicName;
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

<style lang="scss"  scoped>
@import "../style/base.scss";

.is-desktop {
  padding: 0 1rem;
  @include mobile {
    display: none;
  }
}
.is-mobile {
  @include min-desktop {
    display: none;
  }
}
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
<style>

.container-test {
  background-color: #f2f2f2;
  padding: 10px;
  border: 2px solid #CCCCCC;

  margin: 0 auto;
  height: 470px;
  display: flex;
  flex-flow: column wrap; /* Shorthand – you could use ‘flex-direction: column’ and ‘flex-wrap: wrap’ instead */
  justify-content: flex-start;
  align-items: flex-start;
}

/* .item {
  background-color: orange;
  height: 150px;
  width: 31%;
  margin: 1%;
  padding: 10px;
}

.item:nth-child(2) {
  background-color: pink;
  height: 250px;
}

.item:nth-child(3) {
  height: 190px;
}

.item:nth-child(4) {
  background-color: aqua;
  height: 220px;
} */
</style>