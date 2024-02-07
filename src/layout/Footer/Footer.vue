<template>
  <div class="w-full bg-footer text-white pt-8">
    <div class="container m-auto">
      <div class="grid gap-4 items-start">
        <div></div>
        <div class="grid grid-cols-4 gap-4 items-start col-span-2">
          <div
            class="text-white"
            v-for="(data, index) in menuList"
            :key="index"
          >
            <h6 class="text-a-gray-F8F8F8">{{ data.textName }}</h6>
            <!-- <MenuItem
              v-for="(subItem, index1) in data.items"
              :key="index1"
              :textName="subItem.textName"
              :textUrl="subItem.url"
              :isDark="true"
              :type="subItem.type"
            >
              {{ subItem }}
            </MenuItem> -->
          </div>
        </div>
      </div>
    </div>
    <div class="text-a-gray-64748b bg-a-blue-0F2A43 mt-4 flex justify-center py-4">
        <div class="text-base text-center">
          <a href="#">
            <img
              src="../../assets/logo/UTCC_Logo-white.png"
              class="main-logo ml-10"
              alt="UTCC Logo White"
            />
          </a>
          จัดทำโดย สำนักบริการคอมพิวเตอร์ มหาวิทยาลัยหอการค้าไทย <br />
          © 2023 - UTCC All Right Reserved
        </div>
      </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
// import MenuItem from "../TopBar/MenuItem.vue";
// import axios from "axios";

import menudata from "../../data/menudata.json";
export default defineComponent({
  name: "Footer",
  components: {
    // MenuItem,
  },
  // props: {
  //   dataList: { type: Array, required: false },
  // },
  setup() {
    const menuList = ref(menudata);
    return {
      menuList,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-logo {
  width: 200px;
  height: 65px;
}

.bg-footer {
  background: url("../../assets/image/bg-footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
