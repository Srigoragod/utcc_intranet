<template>
  <div>
    <div class="flex justify-between items-center text-a-gray-787878  bg-a-gray-F8F8F8 mt-4 px-6 rounded-md">
      <div class="flex justify-start items-center">
        <font-awesome-icon :icon="['fas', 'clock-rotate-left']" class="pr-2 text-[20px] " />
        <h5 class="py-2">Recent </h5>
      </div>

    </div>
    <!-- item search  -->
    <div class="max-h-96 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm">
    <div v-for="(item,index) in items" :key="index" class="flex justify-between items-center w-full py-1 border-b">
      <div class="text-a-blue-2E3191 hover:text-a-blue-005BC0 cursor-pointer">
        <h5 class="py-2 px-6" v-html="item.name"></h5>
      </div>
      <div>
        <div class="py-2 pr-4 flex items-center">
          <div class="pr-1">
            <button
            @click="clickFavorite(item)"
              class="btn btn-circle btn-sm border-0 text-a-blue-0874D9 opacity-20 hover:opacity-100"
            >
            <font-awesome-icon class="text-[18px]"  :icon="['fas', 'star']" />
            </button>
          </div>
          <div class="pl-1">
            <button
              @click="clickRemove(item)"
              class="btn btn-circle btn-sm border-0 opacity-20 hover:opacity-100"
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
  name: "SearchRecent",
  props:{
    items: {type: Array, required: false}
  },
  emits:["remove-recent","add-favorite"],
  setup(props,ctx){
    const clickRemove =(item)=>{
      ctx.emit("remove-recent", item);
    }
    const clickFavorite =(item)=>{
      ctx.emit("add-favorite", item);
    }

    return{
      clickRemove,
      clickFavorite
    }
  }
};
</script>

<style></style>
