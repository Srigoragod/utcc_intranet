<template>
  <div>
    <div class="text-a-gray-64748b bg-footer mt-4 flex justify-center py-4">
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