<template>
  <div>
    <div
      class="flex justify-between items-center text-a-blue-0874D9 bg-a-blue-ecf8ff mt-4 px-6 rounded-md"
    >
      <!-- <font-awesome-icon :icon="['fas', 'clock-rotate-left']" /> -->
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'glasses']"
          class="pr-2 text-[18px]"
        />
        <h5 class="py-2">Result</h5>
      </div>
      <div v-if="result > 0" class="text-[18px] opacity-60">
        {{ `${result} จาก ${total} รายการ` }}
      </div>
    </div>
    <!-- item search  -->
    <div
      class="max-h-96 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm"
    >
      <div v-if="items.length > 0">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="clickItem(item)"
          class="flex justify-between items-center w-full py-1 border-b  hover:text-a-blue-005BC0 cursor-pointer"
        >
          <div class="py-2 px-6">
            <span class="text-[18px]" v-if="!item.isTopicName" v-html="item.topicName"> </span>
            <h5 class="text-a-blue-2E3191" v-html="item.name"></h5>
          </div>
          <div>
            <div class="py-2 pr-4 flex items-center">
              <div class="pr-1">
                <button
                  class="btn btn-circle btn-sm border-0 opacity-20 hover:opacity-100"
                >
                  <font-awesome-icon
                    class="text-[18px]"
                    :icon="['fas', 'arrow-right']"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
         v-else
        class="bg-a-gray-F8F8F8 text-a-gray-8b8d94 rounded-lg mx-auto text-[20px] py-8 flex justify-center mt-2"
      >
        No Data
      </div>
    </div>
    <!-- End item search  -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchResultList",
  props: {
    items: { type: Array, required: false },
    result: { type: Number, required: false, default: 0 },
    total: { type: Number, required: false, default: 0 },
  },
  emits: ["click-result"],
  setup(props, ctx) {
    const clickItem = (item) => {
      ctx.emit("click-result", item);
    };
    return {
      clickItem,
    };
  },
};
</script>

<style></style>
