<template>
  <div class="glass w-full fixed top-0 z-30 pb-2">
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <!-- <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> -->

        <a href="" class="btn btn-ghost text-xl" @click="handleGotoPage()">
          <img
            src="../../assets/logo/UTCC_SubMain2-1.png"
            class="main-logo"
            alt="UTCC Logo"
          />
        </a>
      </div>
      <div class="navbar-center ">
        
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="(item, index) in menuItems" :key="index">
            <details @click="onClickDialog(item)">
              <summary
                class="text-[22px] text-a-blue-2E3191 hover:text-a-blue-005BC0 rounded-full bg-white bg-opacity-30 mx-1"
              >
                {{ item.textName }}
              </summary>
              <!-- <ul class="text-[20px] bg-base-100">
                <li   v-for="(subItem, x) in item.items" :key="x"><a class="link-primary text-a-blue-2E3191 hover:text-a-blue-005BC0">{{ subItem.textName }}</a></li>
              </ul> -->
            </details>
          </li>
        </ul>
        <SearchModal></SearchModal>
      </div>


      <!-- Dialog -->
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
          <div class="flex justify-between">
              <!-- Menu  -->
              <div class="py-4" v-for="(item, index) in divMenu" :key="index">
                <MenuItem
                  v-for="(subItem, index1) in item"
                  :key="index1"
                  :textName="subItem.textName"
                  :textUrl="subItem.url"
                  :type="subItem.type"
                  @click-menu="handleClickMenu()"
                >
                </MenuItem>
              </div>
              <div class="pl-2">
                <Caption></Caption>
              </div>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn btn-sm text-[20px]">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <!-- End Dialog -->
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Caption from "../../components/Caption.vue";
import SearchModal from "../../components/SearchModal.vue";
import MenuItem from "./MenuItem.vue";
import { useRouter } from "vue-router";

import menudata from "../../data/menudata.json";
export default defineComponent({
  name: "TopBar",
  components: {
    Caption,
    MenuItem,
    SearchModal,
  },
  // props: {
  //   dataList: { type: Array, required: false },
  // },
  setup() {
    const router = useRouter();
    const menuItems = ref(menudata);
    const subMenu = ref([]);
    const idActive = ref(1);
    const isShow = ref(false);
    const divMenu = ref(null);
    const menuActiveName = ref("");
    const menuActiveUrl = ref("");

    const isShowDialog = ref(false);
    const isLarge = ref(false)

    const topicName = ref("");

    const resetMenu = () => {
      isShow.value = false;
      idActive.value = 1;
    };
    const handleClickMenu = () => {
      resetMenu();
    };
    const handleGotoPage = (url) => {
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
      // router.push(items.url)

      // window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "click_top_menu",
        event_category: "top_menu",
        event_action: "click_menu",
        event_name: item.textName,
      });

      console.log("run ... add dataLayer");

      isShow.value = false;
      let id = item.id;
      // if (item.url) {
      //   router.push(item.url);
      // }

      idActive.value = id;
   

      // console.log('item ... ', JSON.stringify(item,null,4));
      menuActiveName.value = item.textName;
      menuActiveUrl.value = item.url;

      item.items.sort((a, b) => a.textName.localeCompare(b.textName, "th"));

      let data = await dividedArray(item.items);
      divMenu.value =  data;
      // isShow.value = true;
    };
    const dividedArray = (items) => {
      const setSize = 12;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }
      if(dividedArray.length > 12){
         isLarge.value = true
      }
      return dividedArray;
    };

    const onClickDialog = (item) => {
      topicName.value = item.textName;
      handleSubMenuDropdown(item)
      document.getElementById("my_modal_1").showModal();
      console.log(" test .. ", JSON.stringify(item, 4, null));
    };

    const onClickCloseMenu = () => {
      isShow.value = false;
      idActive.value = 1;
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
      isLarge
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";

.main-logo {
  width: 185px;
  height: 60px;
}
// #topBar {
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
//   rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

// }
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
