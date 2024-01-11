<template>
  <div class="footer w-full bg-a-blue-0F2A43 text-white py-4 " >
    <div class="container m-auto">
      <div class="grid grid-cols-5 gap-4">
        <div >
          <a href="#">
            <img
              src="../../assets/logo/UTCC_Logo-white.png"
              class="main-logo"
              alt="UTCC Logo White"
            />
          </a>
        </div>
        <div  class="text-white" v-for="(data, index) in menuList" :key="index">
          <h6 class="text-a-gray-F8F8F8">{{ data.textName }}</h6>
          <MenuItem
              v-for="(subItem, index1) in data.items"
              :key="index1"
              :textName="subItem.textName"
              :textUrl="subItem.url"
              :isDark="true"
              :type="subItem.type"
            >
              {{ subItem }}
            </MenuItem>
        </div>
      </div>
      <div class="text-center text-a-gray-64748b">
        <h6>
          จัดทำโดย สำนักบริการคอมพิวเตอร์ มหาวิทยาลัยหอการค้าไทย <br />
          © 2023 - UTCC All Right Reserved
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import MenuItem from "../TopBar/MenuItem.vue";
// import axios from "axios";

import menudata from "../../data/menudata.json";
export default defineComponent({
  name: "Footer",
  components: {
    MenuItem,
  },
  // props: {
  //   dataList: { type: Array, required: false },
  // },
  setup() {
    const menuList = ref(menudata);
    return {
      menuList
    };
  },
});
</script>

<style lang="scss" scoped>
.main-logo {
  width: 230px;
  height: 70px;
}
</style>
