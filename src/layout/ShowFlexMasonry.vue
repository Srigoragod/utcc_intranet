<template>
  <div class="">
    <div class="flex justify-between items-center" v-if="isShow">
      <TextUnderline :text="topicName" ></TextUnderline>
      <div :class="isOrder ?'badge-primary': 'badge-secondary'" class="hidden badge hover:badge-primary cursor-pointer float-right mr-4 text-[20px]" @click="clickOrderByTopicName(isOrder)">ก-ฮ</div>
    </div>
    <br />
    <div
      class="is-desktop gap-4 space-y-3 lg:gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3"
      v-if="fileData && fileData.length > 0"
    >
      <FileList
        v-for="(item, index) in fileData"
        :id="item.id"
        :key="index"
        class="break-inside-avoid first:mt-0"
        :topicName="item.topicName"
        :isAlert="item.isAlert"
        :alertDetail="item.alertDetail"
        :dataList="item.itemList"
        :isHeightFull="item.isFull"
        :isNotHome="isNotHome"
      ></FileList>
    </div>
    <div class="is-mobile grid gap-4 px-4">
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
import documentdata from "../data/documentdata.json";
import departmentdata from "../data/departmentdata.json";
// components
import FileList from "../components/File/FileList.vue";
import FileListMobile from "../components/File/FileListMobile.vue";
import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "ShowFile",
  props: {
    items: { type: Array, require: false },
    gridCols: { type: String, require: true, default: "grid-cols-2" },
    topicName: { type: String, require: false, default: "All Files" },
    dataName: { type: String, require: true },
    isShow: { type: Boolean, require: false, default: true },
  },
  components: {
    FileList,
    TextUnderline,
    FileListMobile,
  },
  setup(props) {
    const route = useRoute();
    const fileData = ref(null);
    const isNotHome = ref(true);
    const topicName = ref("All Files");
    const isOrder = ref(false);

    const initialData = () => {
      topicName.value = props.topicName;
      if (route.name == "formdocument" || props.dataName == "formdocument") {
        fileData.value = documentdata;
      } else if (route.name == "department" || props.dataName == "department") {
        fileData.value = departmentdata;
      } else if (props.dataName == "home") {
        fileData.value = props.items;
      }
      isNotHome.value = false;
      isOrder.value = false;
    };

    const clickOrderByTopicName = (val) => {
      console.log('run ..', val);
      if(val){
        initialData();
      }else{
        fileData.value.sort((a, b) => {
        a.topicName.localeCompare(b.topicName, "th");
        const topicComparison = a.topicName.localeCompare(b.topicName, "th");
        return topicComparison !== 0 ? topicComparison : a.length - b.length;
      });
      isOrder.value = true;
      }
  
    }
    

    const dividedArray = () => {
      let items = fileData.value;
      items.sort((a, b) => {
        a.topicName.localeCompare(b.topicName, "th");
        const topicComparison = a.topicName.localeCompare(b.topicName, "th");
        return topicComparison !== 0 ? topicComparison : a.length - b.length;
      });
      const setSize = 3;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }

      fileData.value = dividedArray;

      console.log(route.name, "...", JSON.stringify(fileData.value, null, 4));
      return dividedArray;
    };

    initialData();
    return {
      fileData,
      isNotHome,
      topicName,
      clickOrderByTopicName,
      isOrder
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.is-mobile {
  @include min-desktop {
    display: none;
  }
}
.is-desktop {
  @include tablet {
    display: none;
  }
  @include mobile {
    display: none;
  }
}

.text-all-file {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0874d9),
    color-stop(100%, #548dd9),
    to(#548dd9)
  );
  background: -webkit-linear-gradient(left, #0874d9, #548dd9 100%, #548dd9 0);
  background: linear-gradient(90deg, #0874d9, #548dd9 100%, #548dd9 0);
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
  border: 2px solid #cccccc;

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
