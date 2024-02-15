<template>
  <div>
    <div
      v-if="result > 0"
      class="flex justify-between items-center text-a-blue-0874D9 bg-a-blue-E5F1FB mt-4 px-6 rounded-md"
    >
      <!-- <font-awesome-icon :icon="['fas', 'clock-rotate-left']" /> -->
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'glasses']"
          class="pr-2 text-[18px]"
        />
        <h5 class="py-2">Result</h5>
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
          class="flex justify-between items-center w-full border-b hover:text-a-blue-005BC0 cursor-pointer"
        >
          <div class="py-2 px-6">
       
            <div class="text-sm breadcrumbs">
              <ul class="text-[18px]">
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-4 h-4 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    <label class="ml-2" v-html="item.topicName"></label>
                  </a>
                </li>
                <li></li>

              </ul>
            </div>
            <h5 class="text-a-blue-2E3191 text-2-line text-[20px]" v-html="item.name" ></h5>
          </div>
          <div>
            <div class="py-2 pr-4 flex items-center">
              <div class="pr-1">
                <button
                  class="btn btn-circle btn-sm border-0 opacity-10 hover:opacity-100"
                >
                  <font-awesome-icon :icon="['far', 'circle-xmark']" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-a-gray-8b8d94 mx-auto text-[20px] bg-white">
        <div class="grid justify-items-stretch">
          <div class="justify-self-center">
            <img
              src="../../assets/image/NoData-searchModal.png"
              class="w-[150px]"
              alt="No Data"
            />
            <div class="text-center -mt-8">
              <h4 class="text-a-gray-787878 my-2 w-full opacity-70">
                Sorry ...
              </h4>
              <h6 class="text-a-gray-8b8d94 text-[24px] -mt-4 w-full">
                Your Search Not Found
              </h6>
            </div>
          </div>
        </div>
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
