<template>
  <div class="py-32">
    <el-divider
      data-aos="fade-up"
      class="text-a-gray-64748b mb-4"
      content-position="center"
    >
      <h4 class="text-all-file font-light leading-none py-2">
      {{ topicName}}
      </h4>
    </el-divider>
    <br/>

    <!-- <div class="gap-4 space-y-3 lg:gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 [&>div:not(:first-child)]:mt-8 lg:[&>div:not(:first-child)]:mt-8 xl:[&>div:not(:first-child)]:mt-8"> -->
    <div class="gap-4 space-y-3 lg:gap-8 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3" v-if="fileData && fileData.length > 0">
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
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, defineComponent } from "vue";

// data
import documentdata from "../data/documentdata.json";
// components
import FileList from "../components/FileList.vue";

export default defineComponent({
  name: "ShowFile",
  props: {
    items: { type: Array, require: true },
    gridCols: { type: String, require: true, default: "grid-cols-2" },
    topicName: { type: String, require: false, default: "All Files" },
  },
  components: {
    FileList,
  },
  setup(props) {
    const route = useRoute();
    const fileData = ref(null);
    const isNotHome = ref(true);
    const topicName = ref("All Files");
    const initialData =  () => {
        topicName.value = props.topicName;
        fileData.value = documentdata;
        fileData.value.sort((a, b) => {
        a.topicName.localeCompare(b.topicName, "th");
        const topicComparison = a.topicName.localeCompare(b.topicName, "th");
        return topicComparison !== 0 ? topicComparison : a.length - b.length;
      });
      
        isNotHome.value = false;
      
        // dividedArray()


    };

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

      console.log(route.name,'...',JSON.stringify(fileData.value,null,4));
      return dividedArray;
    };

    initialData();
    return {
      fileData,
      isNotHome,
      topicName,
    };
  },
});
</script>

<style lang="scss">
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
