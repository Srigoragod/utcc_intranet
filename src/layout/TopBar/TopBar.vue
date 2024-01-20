<template>
  <div class="bg-[#FFFFFF] drop-shadow-sm w-full fixed top-0 z-30">
    <div :id="!isShow ? 'topBar' : ''" class="container mx-auto">
      <div class="topbar top-0 w-full z-10">
        <!-- <nav class="flex mx-auto flex-no-wrap fixed top-0  w-full items-center justify-between bg-[#FFFFFF] shadow-m -->
        <nav class="flex justify-between w-full">
          <div>
            <a href="" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" @click="handleGotoPage()">
              <img
                src="../../assets/logo/UTCC_SubMain2-1.png"
                class="main-logo my-2"
                alt="UTCC Logo"
              />
            </a>
          </div>
          <div
            id="mega-menu-full"
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
            >
              <li v-for="(item, index) in menuItems" :key="index">
                <!-- <el-badge v-if="item.id == 4" :value="3" class="item">
            <a
              href="#"
              :class="`block ${item.id == idActive ? 'active' : ''}`"
              @click="handleSubMenuDropdown(item.items, item.id)"
              >{{ item.textName }}</a
            >
            </el-badge> -->
                <a
                  href="#"
                  :class="`block items-center menu-t ${item.id == idActive ? 'active' : ''}`"
                  @click="handleSubMenuDropdown(item)"
                  >{{ item.textName }}  <font-awesome-icon v-if="index!=0" :icon="['fas', 'angle-right']" class="text-[16px] ml-4 rotate-90" /> </a
                >
              </li>
            </ul>
          </div>
        </nav>

        <div id="bg-menu-top" v-if="isShow">
          <div class="container mx-auto">
            <div class="float-right cursor-pointer btn-close">
              <el-tooltip
                class="item text-[16px]"
                effect="light"
                content="Close Menu"
                placement="left"
              >
                <font-awesome-icon
                  @click="onClickCloseMenu()"
                  :icon="['fas', 'circle-xmark']"
                  class="text-[20px]"
                />
              </el-tooltip>
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="" data-aos="flip-right">
                <Caption></Caption>
              </div>
              <!-- Menu  -->
              <div v-for="(item, index) in divMenu" :key="index">
                <h5 v-if="index==0" @click="handleGotoPage(menuActiveUrl)" class="ulr-link-page pl-8" v-html="menuActiveName"></h5>
                <MenuItem
                  v-for="(subItem, index1) in item"
                  :key="index1"
                  :textName="subItem.textName"
                  :textUrl="subItem.url"
                  :type="subItem.type"
                  @click-menu="handleClickMenu()"
                >
                  {{ subItem }}
                </MenuItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Caption from "../../components/Caption.vue";
import MenuItem from "./MenuItem.vue";
import { useRouter } from "vue-router";

import menudata from '../../data/menudata.json'
export default defineComponent({
  name: "TopBar",
  components: {
    Caption,
    MenuItem,
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
    const menuActiveName = ref('')
    const menuActiveUrl = ref('')

    const resetMenu = () => {
      isShow.value = false;
      idActive.value = 1;
    };
    const handleClickMenu = () => {
      resetMenu();
    };
    const handleGotoPage = (url) =>{
       if(url){
        router.push(url)
       }else{
        router.push('/')
       }
       isShow.value = false;
    }
    const handleSubMenuDropdown = async (item) => {
      // router.push(items.url)

      // window.dataLayer = window.dataLayer || [];
      //   dataLayer.push({
      //       event: 'click_top_menu',
      //       event_category: 'top_menu',
      //       event_action: 'click_menu',
      //       event_name: item.textName
      //   });

      isShow.value = false;
      let id = item.id;
      if (item.url) {
        router.push(item.url);
      }

      idActive.value = id;
      if (id == 1) {
        isShow.value = false;
        return;
      }else

      // console.log('item ... ', JSON.stringify(item,null,4));
      menuActiveName.value = item.textName
      menuActiveUrl.value = item.url

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
      handleGotoPage
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.main-logo {
  width: 230px;
  height: 70px;
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
      padding: 0 2rem;
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
.ulr-link-page{
  color: $a-blue-2E3191;
  &:hover {
        color: $a-blue-005BC0;
        cursor: pointer;
        text-decoration: underline;
  }
}
</style>
