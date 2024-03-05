<template>
  <div>
    <div id="topbar2" class="glass w-full fixed top-0 z-30 pb-2 items-center">
      <div class="navbar container lg:mx-auto items-center">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li
                class="menu-text text-a-blue-2E3191"
                v-for="(item, index) in menuItems"
                :key="index"
              >
                <a @click="handleGotoPage()">{{ item.textName }}</a>
              </li>
            </ul>
          </div>
          <a href="" class="text-xl" @click="handleGotoPage()">
            <img
              src="../../assets/logo/UTCC_Logo.png"
              class="main-logo ml-4 w-[120px] h-[50px] sm:w-[120px] md:w-[185px]"
              alt="UTCC Logo"
            />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <label
            v-for="(item, index) in menuItems"
            :key="index"
            @click="onClickDialog(item,item.url)"
            class="menu-text text-a-blue-2E3191 hover:text-a-blue-005BC0 mx-3 cursor-pointer"
          >
            {{ item.textName }}</label
          >
        </div>
        <div class="navbar-end">
          <SearchModal></SearchModal>
        </div>

        <!-- Dialog -->
        <dialog id="my_modal_1" class="modal">
          <div
            class="modal-box w-11/12"
            :class="[isLarge ? 'max-w-4xl' : 'max-w-2xl']"
          >
            <div class="grid grid-cols-2  gap-8">
              <div >
                <h5 class="text-all-file font-light leading-none py-2 ">
                  แคปชั่นทำงาน
                </h5>
                <Caption
                  :title="randomItemCaption.caption_title"
                  :owner="randomItemCaption.caption_owner"
                  @click-menu="handleClickMenu()"
                ></Caption>
                <div class=" opacity-50 float-right mr-4 text-base">
                  <span>ต้องการความช่วยเหลือ หรือแจ้งปัญหาการใช้งาน โทร. 6288 </span>
                  </div>
              </div>
              <div class="w-full">
                <div class="flex justify-between items-center py-2">
                  <h4 class="text-all-file font-light leading-none block">
                    {{ topicName }}
                  </h4>
                  <div class="badge badge-accent opacity-50 float-right mr-8">
                     ก-ฮ
                  </div>
                </div>
                <div  :class="[isLarge ? 'grid-cols-2' : 'grid-cols-1']" class="grid gap-4 grid-cols-1  max-h-96 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm" >
                  <div
                    class="py-4"
                    v-for="(item, index) in divMenu"
                    :key="index"
                  >
                    <MenuItem
                      v-for="(subItem, row) in item"
                      :key="row"
                      :textName="subItem.textName"
                      :textUrl="subItem.url"
                      :type="subItem.type"
                      class="text-[1.25rem]"
                      @click-menu="handleClickMenu()"
                    >
                    </MenuItem>
                  </div>
                </div>
              </div>
      
            </div>
            <div class="modal-action">
              <form method="dialog" >
                <button
                  class="btn btn-active btn-ghost text-[20px]"
                  @click="onClickCloseMenu()"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <!-- End Dialog -->
      </div>
    </div>
    <ul
      class="menu w-56 rounded-box drop-shadow-md z-10 bg-white absolute mt-1"
      v-if="isShowMenu"
    >
      <li
        class="menu-text text-a-blue-2E3191"
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <a @click="handleGotoPage()">{{ item.textName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

//data
import menudata from "../../data/menudata.json";
import captiondata from "../../data/captiondata.json";

//components
import Caption from "../../components/Optional/Caption.vue";
import SearchModal from "../../components/Search/SearchModal.vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  name: "TopBar",
  components: {
    Caption,
    MenuItem,
    SearchModal,
  },
  props: {
    isShowMenu: { type: Boolean, required: false, default: false },
  },
  setup() {
    const captionList = ref(captiondata);
    const randomItemCaption = ref({
      id: null,
      caption_title: null,
      caption_owner: null,
    });

    const router = useRouter();
    const menuItems = ref(menudata);
    const subMenu = ref([]);
    const idActive = ref(1);
    const isShow = ref(false);
    const divMenu = ref(null);
    const menuActiveName = ref("");
    const menuActiveUrl = ref("");

    const isShowDialog = ref(false);
    const isLarge = ref(false);

    const topicName = ref("");

    const randomCaption = () => {
      const randomIndex = Math.floor(Math.random() * captionList.value.length);
      return captionList.value[randomIndex];
    };

    const resetMenu = () => {
      isShow.value = false;
      idActive.value = 1;
 
    };
    const handleClickMenu = (val) => {
      document.getElementById("my_modal_1").close();
      resetMenu();
    };
    const handleGotoPage = (url) => {
      console.log(url);
      dataLayer.push({
        event: "click_top_menu",
        event_category: "top_menu",
        event_action: "click_menu",
        event_name: "Home_Logo",
      });
      if (url) {
        router.push(url);
      } else {
        router.push("/");
      }
      isShow.value = false;
    };
    const handleSubMenuDropdown = async (item) => {

      dataLayer.push({
        event: "click_top_menu",
        event_category: "top_menu",
        event_action: "click_menu",
        event_name: item.textName,
      });

      randomItemCaption.value = randomCaption();

      let id = item.id;


      idActive.value = id;

      menuActiveName.value = item.textName;
      menuActiveUrl.value = item.url;

      item.items.sort((a, b) => a.textName.localeCompare(b.textName, "th"));

      let data = await dividedArray(item.items);

      divMenu.value = data;
    };
    const dividedArray = (items) => {
      const setSize = 12;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }
      if (dividedArray.length > 1) {
        isLarge.value = true;
      } else {
        isLarge.value = false;
      }
      return dividedArray;
    };

    const onClickDialog = (item, url) => {

      if(url == 'risk' || url == 'budget'){
        let element = document.getElementById(url);
        element.scrollIntoView({behavior: "smooth", block: "end"});
          return
      }
      topicName.value = item.textName;
      handleSubMenuDropdown(item);
      document.getElementById("my_modal_1").showModal();
    };

    const onClickCloseMenu = () => {
      isShow.value = false;
    };

    return {
      menuItems,
      subMenu,
      handleSubMenuDropdown,
      idActive,
      isShow,
      divMenu,
      onClickDialog,
      onClickCloseMenu,
      handleClickMenu,
      menuActiveName,
      menuActiveUrl,
      handleGotoPage,
      isShowDialog,
      topicName,
      isLarge,
      randomItemCaption
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.menu {
  font-size: 1.5rem;
}
.menu-text {
  font-size: 1.25rem;
  @include tablet {
    font-size: 1.125rem;
  }
}

.main-logo {
  width: calc(40% - 0px);
  height: auto;
  @include mobile {
    width: 150px;
    margin-left: 0;
  }
  @include tablet {
    width: 150px;
    margin-left: 0;
  }
}
#topbar2 {
  @include mobile {
    .navbar {
      padding: 0;
      // .navbar-end {
      //   display: none;
      // }
    }
    position: relative;
    padding: 0;
  }
}

.is-desktop {
  @include mobile {
    display: none;
  }
}

#mega-menu-full {
  li {
    a {
      font-size: 20px;
      color: $a-blue-2E3191;
      padding: 0 0.75rem;
      border-radius: 25px;
      background-color: $a-gray-F9FAFB;

      &:hover {
        color: $a-blue-005BC0;
        background-color: rgb(241, 243, 244);
      }

      &.active {
        background-color: $a-blue-2E3191;
        border-radius: 25px;
        color: #fff;
        padding: 0 2rem;
        text-decoration: none;
      }
    }
  }
}
#bg-menu-top {
  background-color: $a-blue-F9FAFC;
  // border-radius: 1rem;
  border-left: 5px solid $a-blue-2E3191;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  z-index: 3;
  position: absolute;
  padding: 2rem 0;
  top: 84px;
  min-width: 100%;
  left: 0;
}
.menu-focus {
  width: 48px;
  height: 48px;
  background-color: #dcedff;
}
.btn-close {
  color: #787878;
  &:hover {
    color: #005bc0;
  }
}
.ulr-link-page {
  color: $a-blue-2E3191;
  &:hover {
    color: $a-blue-005BC0;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
<style scoped>
.modal-box {
  max-width: 75rem;
}
</style>
