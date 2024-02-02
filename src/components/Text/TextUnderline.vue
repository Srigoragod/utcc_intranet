<template>
  <div class="mb-4">
    <span class="text sm:text-[20px] md:text-[32px] lg:text-[40px] text-3xl font-bold px-0 sm:px-4 md:px-4 lg:px-4 mb-4">{{ text }}</span>
    <br />
    <p class="mt-4 text-[22px] text-a-gray-64748b" v-html="desc"> </p>
  </div>
</template>

<script>
export default {
    name:"TextUnderLine",
    props: {
        text: {type: Text, require: true},
        desc:  {type: Text, require: false},
    }
};
</script>

<style lang="scss" scoped>
.text {
  position: relative;
  z-index: 1;
  line-height: 10px;
  color: #2E3191;
//   background: linear-gradient(90deg, #0874D9, #548dd9 100%, #548dd9 0);
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     -webkit-text-fill-color: transparent;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   height: 40%;
  //   width: 100%;
  //   background: linear-gradient(90deg, #0874D9, #93C5FD 100%, #DAE9FE 0);
  //   opacity: 0.3;
  //   bottom: 0;
  //   left: 0;
  //   z-index: 0;
  // }
}
</style>
