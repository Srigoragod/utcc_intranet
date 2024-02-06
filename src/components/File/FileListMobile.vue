<template>
<div tabindex="0" class="collapse collapse-arrow border border-a-blue-E5F1FB bg-base-200">
  <div class="collapse-title text-a-gray-343443 custom-overflow">
    {{topicName}}
  </div>
  <div class="collapse-content">
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
</div>
</template>

<script>
import FileItem from './FileItem.vue';
export default {
  name: "FileListMobile",
  components: {
    FileItem,
  },
  props: {
    topicName: { type: String, required: true },
    dataList: { type: Array, required: true },
  },
  setup(props){

  }
}

</script>

<style lang="scss">
.collapse-title{
    font-size: 1.5rem;
    line-height: normal;
}
.custom-overflow{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 95%;
}
</style>
