<!-- ScrollToTopButton.vue -->
<template>
  <button @click="scrollToTop" class="rounded-full" v-if="isVisible"  id="scrollToTopButton">
    <font-awesome-icon class="text-[1.2em]"  :icon="['fas', 'chevron-up']" />
  </button>


</template>

<script>
import {ref ,defineComponent,onMounted,onBeforeUnmount} from 'vue'
export default defineComponent({
  setup() {
    const isVisible = ref(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const handleScroll = () => {
      isVisible.value = window.scrollY > 300; 
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
#settingButton {
  position: fixed;
  bottom: 38px;
  right: 48px;
  // display: none;
  background-color: red;
  padding: 1rem 1.125rem;
  z-index: 99999;
}
#scrollToTopButton {
  position: fixed;
  bottom: 48px;
  right: 48px;
  height: 3em;
  width: 3em;
  padding: 0;
  // display: none;
  background-color: #0874D9;
  // padding: 1rem 1.125rem;

  svg {
    color: #fff;
    font-size: 24px;
  }
  &:hover{
    background-color: #2E3191;
  }
  /* Add additional styling as needed */
  @include mini-mobile{
    display: none;
  }
  @include mobile {
    bottom: 5.5rem;
    right: 1rem;
  }
  @include tablet{
    display: none;
  }
}
</style>
