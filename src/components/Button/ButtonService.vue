<!-- ButtonComponent.vue -->
<template>
  <button class="custom-button">
   
    <slot name="icon" ></slot>

    <span class="button-text ">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
};
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";

.custom-button {
  display: flex;
  align-items: center;
  flex-direction: column;

  .button-text {
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #005BC0;
  }
}
</style>
