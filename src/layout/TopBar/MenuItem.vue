<template>
  <div class="">
    <!-- <h4 class="font-bold text-a-blue-2E3191">{{item.textName}}</h4> -->
    <div  v-if="!isDark" class="flex items-center menu-item pl-4">
      <div>
        <!-- <img
          src="../../assets/icon/chevron-right.svg"
          width="18"
          height="18"
        /> -->
        <font-awesome-icon :icon="['fas', 'angle-right']" class="text-[18px]"/>
      </div>
      <h6 class="pl-2">{{ textName }}</h6>
    </div>
    <div v-else class="menu-footer text-[18px] text-a-gray-64748b hover:text-white" >
      {{ textName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    textName: { type: String, required: true },
    textUrl: { type: String, required: true },
    isDark: { type: Boolean, required: false },
  },
};
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
    text-decoration: underline;
  }
}
.menu-footer{
  cursor: pointer;
}
</style>
