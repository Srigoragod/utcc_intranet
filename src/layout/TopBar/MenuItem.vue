<template>
  <!-- @click="onClickMenu(textUrl, type)" -->
  <div @click="onScroll()">
    <!-- <h4 class="font-bold text-a-blue-2E3191">{{item.textName}}</h4> -->
    <div
      v-if="!isDark"
      class="flex items-center menu-item hover:underline hover:underline-offset-1"
    >
      <!-- <div> -->
      <!-- <img
          src="../../assets/icon/chevron-right.svg"
          width="18"
          height="18"
        /> -->
      <!-- <font-awesome-icon :icon="['fas', 'angle-right']" class="text-[18px]"/>
      </div> -->
      <a class="flex items-center text-a-blue-2E3191  hover:text-a-blue-005BC0  px-2"> <font-awesome-icon :icon="['fas', 'angle-right']" class="text-[10px] pr-1"/> {{ textName }}</a>
    </div>

    <div
      v-else
      class="menu-footer text-[18px] text-a-gray-64748b hover:text-white hover:underline hover:underline-offset-1"
    >
      <!-- <a href="#test" v-smooth-scroll> -->
      {{ textName }}
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MenuItem",
  props: {
    textName: { type: String, required: true },
    textUrl: { type: String, required: true },
    isDark: { type: Boolean, required: false },
    type: { type: String, required: false },
  },
  emits: ["click-menu"],
  setup(props, ctx) {
    const router = useRouter();
    const scrollToMyEl = (url) => {
      const sectionElement = document.getElementById("test");
      if (sectionElement) {
        sectionElement.scrollIntoView({
          top: 10,
          behavior: "smooth", 
        });
      }
    };
    const onClickMenu = (url, type) => {
    };

    function onScroll() {

      if (props.textUrl && props.type  !== 'link') {
        let id = props.textUrl;
        let element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "end"});
      }
      if(props.type === 'link'){
        window.open(props.textUrl, "_blank");
      }
      console.log(props.type);
       ctx.emit("click-menu", props.textUrl);
    }

    return {
      onClickMenu,
      onScroll,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.menu-item {
  color: $a-gray-343443;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    color: $a-blue-005BC0;
    background-color: $a-gray-F9FAFB;
  }
}
.menu-footer {
  cursor: pointer;
}
</style>
