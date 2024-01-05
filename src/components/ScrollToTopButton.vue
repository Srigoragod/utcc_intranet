<!-- ScrollToTopButton.vue -->
<template>

  <button @click="scrollToTop" class="" v-if="isVisible"  id="scrollToTopButton">
    <font-awesome-icon :icon="['fas', 'chevron-up']" />
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
#scrollToTopButton {
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 100%;
  // display: none;
  background-color: #0874D9;
  padding: 1rem 1.125rem;

  svg {
    color: #fff;
    font-size: 24px;
  }
  &:hover{
    background-color: #2E3191;
  }
  /* Add additional styling as needed */
}
</style>
