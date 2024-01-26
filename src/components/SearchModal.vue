<template>
  <div  v-loading.fullscreen.lock="fullscreenLoading">
    
    <div class="flex justify-between" @click="clickSearch()">
      <input
        type="text"
        placeholder="Quick search..."
        class="text-input input-sm w-screen max-w-xs text-xl rounded-full bg-opacity-40"
      />
      <button
        class="ml-2 btn btn-sm btn-ghost btn-circle bg-white bg-opacity-30 hover:bg-opacity-100"
      >
        <font-awesome-icon
          class="text-base text-a-blue-2E3191 hover:text-a-blue-005BC0"
          :icon="['fas', 'magnifying-glass']"
        />
      </button>
    </div>
    <!-- Dialog -->
    <dialog id="search_modal" class="modal ghost">
      <div class="modal-box w-11/12 max-w-3xl ">
        <div class="content-search">
          <div class="top-bar flex justify-between items-center">
            <div class="flex justify-start items-center">
              <input
                type="text"
                v-model="keyword"
                @keyup="handleKeyPress"
                placeholder="Quick search..."
                class="text-input border input-sm w-screen max-w-xl text-xl rounded-full bg-opacity-40 mx-2"
              />
              <button
              @click="handleKeyPress(keyword)"
                class="btn btn-sm btn-circle btn-outline opacity-50 hover:opacity-100"
              >
                <font-awesome-icon
                  class="text-base"
                  :icon="['fas', 'magnifying-glass']"
                />
              </button>
            </div>
            <div class="modal-action mt-0 ">
              <form method="dialog">
                <button class="btn btn-sm text-[20px] opacity-50 hover:opacity-100">ESC</button>
              </form>
            </div>
          </div>
          <div >
            <SeacrchItemList :items="filteredData"></SeacrchItemList>
            <!-- <div>
              <div>
                
              </div>
            </div>
            <h6 class="py-2 text-a-gray-787878">ผลการค้นหา ...</h6>
            <h6 class="py-2 text-a-gray-787878">ใช้งานล่าสุด ...</h6>
            <h6 class="py-2 text-a-gray-787878">รายการโปรด ...</h6> -->
          </div>
        </div>
      </div>
    </dialog>
    <!-- End Dialog -->
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

//data
import homedata from "../data/homedata.json";
import documentdata from "../data/documentdata.json";
import departmentdata from "../data/departmentdata.json";
import menudata from "../data/menudata.json";

// component
import SeacrchItemList from "../components/SearchItemList.vue";

export default defineComponent({
  name: "SearchModal",
  components:{
    SeacrchItemList
  },
  setup() {
    const keyword = ref(null);
    const concatenatedArray = ref(null);
    const filterOnlineService = ref(null);
    const fullscreenLoading = ref(false)
    const filteredData = ref(null)

    const resetFormSearch =()=>{
      keyword.value = null
      filteredData.value = null
    }

    const clickSearch = () => {
      resetFormSearch()
      document.getElementById("search_modal").showModal();
    };
    const handleKeyPress = (event) => {
      if (event.key === "Enter" || keyword.value) {
        filteredData.value = filterByTopicOrName(keyword.value.trim());
      }
    };
    const filterByTopicOrName = (searchTerm) => {
      const searchTermLower = searchTerm.toLowerCase();
      return concatenatedArray.value.filter((item) => {
        const nameLower = item.name ? item.name.toLowerCase() : "";
        return item.name.toLowerCase().includes(searchTermLower);
      });
    };

    const handleOnlineService = async () => {
      filterOnlineService.value = await menudata.filter(
        (item) => item.url == "service"
      );
      initDataForSearch()
    };
    const initDataForSearch = async () => {
      fullscreenLoading.value = true
      concatenatedArray.value = filterOnlineService.value.concat(
        homedata,
        documentdata,
        departmentdata
      );
      const newArray = new Array();
      await Promise.all(
        concatenatedArray.value.map((item) => {
          newArray.push({
            url: item.id,
            name: item.topicName ? item.topicName : item.textName,
          });
          if (item.itemList) {
            item.itemList.map((data) => {
              newArray.push({
                url: data.url,
                name: data.name ? data.name : "",
              });
            });
          }else if(item.items){
            item.items.map((data) => {
              newArray.push({
                url: data.url,
                name: data.textName ? data.textName : "",
              });
            });
          }
        })
      ).then(() => {
        concatenatedArray.value = newArray
        // console.log(concatenatedArray.value);
        fullscreenLoading.value = false
      });
    };
    handleOnlineService();
    return {
      fullscreenLoading,
      clickSearch,
      handleKeyPress,
      keyword,
      filteredData
    };
  },
});
</script>

<style></style>
