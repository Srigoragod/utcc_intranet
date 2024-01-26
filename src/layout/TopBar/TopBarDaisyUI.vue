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
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li></li>
        <li v-for="(item, index) in menuItems" :key="index">
          <details >
            <summary
              class="text-[22px]  text-a-blue-2E3191 hover:text-a-blue-005BC0 rounded-full  bg-white bg-opacity-30 mx-1"
            >
              {{ item.textName }}
            </summary>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
    <SearchModal></SearchModal>
    </div>
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
    SearchModal
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
      if (item.url) {
        router.push(item.url);
      }

      idActive.value = id;
      if (id == 1) {
        isShow.value = false;
        return;
      }

      // console.log('item ... ', JSON.stringify(item,null,4));
      else menuActiveName.value = item.textName;
      menuActiveUrl.value = item.url;

      item.items.sort((a, b) => a.textName.localeCompare(b.textName, "th"));
      //  if(items.length > 8){
      let data = await dividedArray(item.items);
      // console.log("data ....... ", data);
      divMenu.value = data;
      //  }else{
      //   divMenu.value = items
      //  }
      isShow.value = true;
    };
    const dividedArray = (items) => {
      const setSize = 8;
      const dividedArray = [];
      for (let i = 0; i < items.length; i += setSize) {
        dividedArray.push(items.slice(i, i + setSize));
      }
      return dividedArray;
    };

    const onClickAway = (e) => {
      console.log(" test .. ", e);
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
      onClickAway,
      onClickCloseMenu,
      handleClickMenu,
      menuActiveName,
      menuActiveUrl,
      handleGotoPage,
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
