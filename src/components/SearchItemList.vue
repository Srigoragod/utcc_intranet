<template>
  <div>
    <div class="flex justify-start items-center text-a-gray-787878 border-b">
      <!-- <font-awesome-icon :icon="['fas', 'clock-rotate-left']" /> -->
      <font-awesome-icon :icon="['fas', 'hashtag']" class="pr-2" />
      <h5 class="py-2">ผลการค้นหา ...</h5>
    </div>
    <!-- item search  -->
    <div class="max-h-96 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm">
    <div v-for="(item,index) in items" :key="index" class="flex justify-between items-center w-full py-1 border-b">
      <div class="text-a-blue-2E3191 hover:text-a-blue-005BC0 cursor-pointer">
        <h6 class="py-2" v-html="item.name"></h6>
      </div>
      <div>
        <div class="py-2 pr-4 flex items-center">
          <div class="pr-1">
            <button
              class="btn btn-circle btn-sm border-0 opacity-50 hover:opacity-100"
            >
              <font-awesome-icon class="text-[18px]" :icon="['fas', 'star']" />
            </button>
          </div>
          <div class="pl-1">
            <button
              class="btn btn-circle btn-sm border-0 opacity-50 hover:opacity-100"
            >
              <font-awesome-icon class="text-[20px]" :icon="['fas', 'xmark']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- End item search  -->
  </div>
</template>

<script>
export default {
  name: "SearchItemList",
  props:{
    items: {type: Array, required: true}
  }
};
</script>

<style></style>
