<template>
  <div class="py-32">
    <el-divider
      data-aos="fade-up"
      class="text-a-gray-64748b"
      content-position="center"
    >
      <h4 class="text-all-file font-light leading-none py-2">
      {{ topicName}}
      </h4>
    </el-divider>
    <!-- <div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div class="grid gap-4"  v-for="(fileData, index) in fileData" :key="index">
        <FileList
        v-for="(item, x) in fileData"
        :id="item.id"
        :keyP="x"
        :class="[ item.showColumn != '' ? 'col-span-2' : '']"
        :topicName="item.topicName"
        :isAlert="item.isAlert"
        :alertDetail="item.alertDetail"
        :dataList="item.itemList"
        :isHeightFull="item.isFull"
        :isNotHome="isNotHome"
      ></FileList>
      </div>
    </div> -->
    <div class="gap-4 space-y-3 lg:gap-8 sm:columns-1 lg:columns-3 xl:columns-3 py-4">
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
import homedata from "../data/homedata.json";
import documentdata from "../data/documentdata.json";
// components
import FileList from "../components/FileList.vue";

export default defineComponent({
  name: "ShowFile",
  props: {
    items: { type: Array, require: true },
    gridCols: { type: String, require: true, default: "grid-cols-2" },
    topicName: { type: String, require: true, default: "All Files" },
  },
  components: {
    FileList,
  },
  setup(props) {
    const route = useRoute();
    const fileData = ref(null);
    const isNotHome = ref(true);
    const topicName = ref("All Files");
    const initialData = async () => {
      topicName.value = props.topicName;
      if (route.name == "form") {
        fileData.value = documentdata;
      } else {
        fileData.value = homedata;
        isNotHome.value = false;
      }

      let items = await dividedArray();
      fileData.value = items;

      // console.log(JSON.stringify(items,null,4));
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
