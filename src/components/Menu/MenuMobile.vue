<template>
  <div class="menubar bg-white lg:hidden z-40">
    <div class="btm-nav">

  <button class="text-primary active">
    <font-awesome-icon class="h-5 w-5 text-xl" :icon="['fas', 'house']" />
    <span class="btm-nav-label">Home</span>
  </button>
  <button class="text-primary active">
    <font-awesome-icon class="h-5 w-5 text-xl"  :icon="['fas', 'address-book']" />
    <span class="btm-nav-label">เบอร์โทรภายใน</span>
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
  <button  class="text-primary">
    <font-awesome-icon class="h-5 w-5 text-xl" :icon="['fas', 'magnifying-glass']" />
    <span class="btm-nav-label">Search</span>
  </button>
</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btm-nav-labe{
  font-size: 1.5rem;
}
</style>
