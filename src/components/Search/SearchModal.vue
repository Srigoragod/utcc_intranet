<template>
  <div >
    <div class="flex justify-between items-center rounded-full lg:border border-slate-300 hover:border-indigo-300 lg:px-4 bg-white" @click="clickSearch()" >
      <font-awesome-icon
          class="text-base is-desktop"
          :icon="['fas', 'magnifying-glass']"
        />
      <input
        type="text"
        placeholder="Search "
        class="text-input input-sm text-xl w-full is-desktop"
 
      />


    </div>
    <span class="px-4" @click="clickSearch()">
      <font-awesome-icon
    class="text-2xl text-a-blue-005BC0 is-mobile lg:hidden"
    :icon="['fas', 'magnifying-glass']"
  />
    </span>

    <!-- Dialog -->
    <dialog id="search_modal" class="modal ghost">
      <div class="modal-box w-11/12 max-w-3xl">
        <div class="content-search">
          <div class="top-bar flex justify-between items-center">
            <div class="flex justify-start items-center">
              <input
                type="text"
                v-model="keyword"
                @keyup="handleKeyPress"
                placeholder="Search ..."
                class="text-input border input-sm  w-[35rem] rounded-full bg-opacity-40 mx-2"
              />
              <button
                @click="resetFormSearch()"
                class="btn btn-sm btn-circle btn-primary opacity-20 hover:opacity-100"
              >
                <font-awesome-icon
                  class="text-base"
                  :icon="['fas', 'xmark']"
                />
              </button>
            </div>
            <div class="modal-action mt-0">
              <form method="dialog">
                <button
                  class="btn btn-sm text-[20px] opacity-50 hover:opacity-100"
                >
                  ESC
                </button>
              </form>
            </div>
          </div>
          <div>
            <SearchResultList
              v-loading="isLoading"
              v-if="isResult"
              :items="resultList"
              @click-result="clickResutSearch"
              :result="totalResult"
              :total="totalData"
            ></SearchResultList>
            <SearchRecent
              v-if="!isResult && recentSearches.length > 0"
              :items="recentSearches"
              @remove-recent="removeRecentSearch"
              @add-favorite="addFavorite"
            ></SearchRecent>
            <SearchFavorite
              v-if="!isResult && favoriteSearches.length > 0"
              :items="favoriteSearches"
              @remove-favorite="removeFavoriteSearch"
            ></SearchFavorite>
          </div>
        </div>
        <div class="px-4 pt-8 mx-auto text-right text-base text-gray-400">
          Search by Web Developer UTCC
        </div>
      </div>
    </dialog>
    <!-- End Dialog -->
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

//helper
import Util from "../../helper/Utility";
//data
import homedata from "../../data/homedata.json";
import documentdata from "../../data/documentdata.json";
import departmentdata from "../../data/documentdata.json";
import menudata from "../../data/menudata.json";

// component
import SearchResultList from "./SearchResultList.vue";
import SearchRecent from "./SearchRecent.vue";
import SearchFavorite from "./SearchFavorite.vue";

export default defineComponent({
  name: "SearchModal",
  components: {
    SearchResultList,
    SearchRecent,
    SearchFavorite,
  },
  setup() {
    const isLoading = ref(true)
    const keyword = ref(null);
    const concatenatedArray = ref(null);
    const filterOnlineService = ref(null);
    const fullscreenLoading = ref(false);
    const resultList = ref();
    const totalData = ref(0);
    const totalResult = ref(0);
    const isResult = ref(false);
    const isKeySearch = ref(false);
    const keyRecent = ref("recent_searches_utccintranet");
    const recentSearches = ref(
      JSON.parse(localStorage.getItem(keyRecent.value)) || []
    );
    const keyFavorite = ref("favorite_searches_utccintranet");
    const favoriteSearches = ref(
      JSON.parse(localStorage.getItem(keyFavorite.value)) || []
    );

    const resetFormSearch = () => {
      keyword.value = null;
      resultList.value = null;
      isResult.value = false;
    };

    const clickSearch = () => {
      console.log('@click="clickSearch()" .....');
      // resetFormSearch();
      document.getElementById("search_modal").showModal();
    };
    const handleKeyPress = (event) => {
      if (keyword.value == "") {
         isLoading.value = true;
         isResult.value = false;
      }
      if (event.key === "Enter" || keyword.value) {
        let data = filterByTopicOrName(keyword.value.trim());
        const uniqueNames = new Set();
        const uniqueData = data.filter((item) => {
          if (!uniqueNames.has(item.name)) {
            uniqueNames.add(item.name);
            return true;
          }
          return false;
        });

        resultList.value = uniqueData;
        totalResult.value = resultList.value ? resultList.value.length : 0;
        isResult.value = true;
        setTimeout(() => {
          isLoading.value = false
        });
     
      }
    };
    const filterByTopicOrName = (searchTerm) => {
      const searchTermLower = searchTerm.toLowerCase();
      return concatenatedArray.value.filter((item) => {
        return item.name.toLowerCase().includes(searchTermLower);
      });
    };

    const handleOnlineService = async () => {
      filterOnlineService.value = await menudata.filter(
        (item) => item.url == "service"
      );
      initDataForSearch();
    };
    const initDataForSearch = async () => {
      fullscreenLoading.value = true;
      concatenatedArray.value = filterOnlineService.value.concat(
        homedata,
        documentdata,
        departmentdata
      );

      const newArray = new Array();
      await Promise.all(
        concatenatedArray.value.map((item) => {
          newArray.push({
            topicName: item.topicName ? item.topicName : "",
            url: item.id,
            name: item.topicName ? item.topicName : item.textName,
            isDisable: item.isDisable,
            isTopicName: item.topicName ? true : false,
          });

          if (item.itemList) {
            item.itemList.map((data) => {
              newArray.push({
                topicName: item.topicName ? item.topicName : "",
                url: data.url,
                name: data.name ? data.name : "",
                isDisable: data.isDisable,
                isTopicName: false,
              });
            });
          }

          if (item.items) {
            item.items.map((data) => {
              newArray.push({
                topicName: item.textName ? item.textName : "",
                url: data.url,
                name: data.textName ? data.textName : "",
                isDisable: data.isDisable,
                isTopicName: false,
              });
            });
          }
        })
      ).then(() => {
        newArray.forEach((obj) => {
          obj.uuid = Util.generateUuid();
        });
        concatenatedArray.value = newArray;
        totalData.value = concatenatedArray.value
          ? concatenatedArray.value.length
          : 0;
        fullscreenLoading.value = false;
      });
    };
    handleOnlineService();
    const clickResutSearch = (val) => {
      addRecentSearch(val);
    };

    const addRecentSearch = (newObj) => {
      const index = recentSearches.value.indexOf(newObj);
      if (index !== -1) {
        recentSearches.value.splice(index, 1);
      }
      if (!Util.checkDuplicateUuid(recentSearches.value, newObj)) {
        recentSearches.value.unshift(newObj);
        recentSearches.value = [...new Set(recentSearches.value)];
        if (recentSearches.value.length > 4) {
          recentSearches.value.pop();
        }
        localStorage.setItem(
          keyRecent.value,
          JSON.stringify(recentSearches.value)
        );
      }
      document.getElementById("search_modal").close();
    };

    const removeRecentSearch = (obj) => {
      const index = recentSearches.value.indexOf(obj);
      if (index !== -1) {
        recentSearches.value.splice(index, 1);
      }
      localStorage.setItem(
        keyRecent.value,
        JSON.stringify(recentSearches.value)
      );
    };

    const addFavorite = (newObj) => {
      const index = favoriteSearches.value.indexOf(newObj);
      if (index !== -1) {
        favoriteSearches.value.splice(index, 1);
      }
      if (!Util.checkDuplicateUuid(favoriteSearches.value, newObj)) {
        favoriteSearches.value.unshift(newObj);
        favoriteSearches.value = [...new Set(favoriteSearches.value)];
        if (favoriteSearches.value.length > 24) {
          favoriteSearches.value.pop();
        }
        removeRecentSearch(newObj);
        localStorage.setItem(
          keyFavorite.value,
          JSON.stringify(favoriteSearches.value)
        );
      }
    };

    const removeFavoriteSearch = (obj) => {
      const index = favoriteSearches.value.indexOf(obj);
      if (index !== -1) {
        favoriteSearches.value.splice(index, 1);
      }
      localStorage.setItem(
        keyFavorite.value,
        JSON.stringify(favoriteSearches.value)
      );
    };

    return {
      fullscreenLoading,
      clickSearch,
      handleKeyPress,
      keyword,
      resultList,
      totalData,
      totalResult,
      isResult,
      clickResutSearch,
      recentSearches,
      removeRecentSearch,
      addFavorite,
      favoriteSearches,
      removeFavoriteSearch,
      isLoading,
      resetFormSearch
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.is-desktop{
  @include mobile {
    display: none;
  }
}
</style>
