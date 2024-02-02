<template>

<slot name="topbar"></slot>
  <div class="relative">
    <div class="main-page">
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
