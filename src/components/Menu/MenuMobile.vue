<template>
  <div class="menubar w-screen lg:hidden z-40">
    <div class="btm-nav">
      <button class="text-primary" @click="clickLink('home')">
        <font-awesome-icon
          class="h-5 w-5 text-xl menu-icon"
          :icon="['fas', 'house']"
        />
        <span class="btm-nav-label">หน้าแรก</span>
      </button>
      <button class="text-primary" @click="clickLink('book')">
        <font-awesome-icon
          class="h-5 w-5 text-xl menu-icon"
          :icon="['fas', 'address-book']"
        />
        <span class="btm-nav-label">เบอร์ภายใน</span>
      </button>
      <!-- <button  class="text-primary">
    <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-xl text-a-blue-005BC0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
    <span class="btm-n
    av-label">Menu</span>
  </button> -->
      <button class="text-primary" @click="clickMenu()">
        <!-- <font-awesome-icon class="h-5 w-5 text-xl menu-icon" :icon="['fas', 'fa-bars']" /> -->
        <font-awesome-icon
          class="h-5 w-5 text-xl menu-icon"
          :icon="['fas', 'magnifying-glass']"
        />
        <span class="btm-nav-label">ค้นหา</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "MenuMobile",
  setup(props, ctx) {
    const router = useRouter();
    const clickMenu = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    const clickLink = (link) => {
      if (link === "home") {
        router.push("/");
        clickMenu();
      } else if (link === "book") {
        window.open("http://utcc2.utcc.ac.th/utccphone/", "_blank");
      }
    };
    return {
      clickMenu,
      clickLink,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.menubar {

  .btm-nav {
  background-color: #fff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: 0 -5px 5px -5px #d1dbe5;
  padding: 0.25rem auto;
  }
  .btm-nav-label {
    color: #64748b !important;
    font-size: 1.125rem;
  }
  .menu-icon {
    color: #64748b;
  }
}
</style>
