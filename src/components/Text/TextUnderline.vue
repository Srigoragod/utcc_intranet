<template>
  <div class="container-textunderline sm:mb-0">
    <span class="text text-3xl font-bold mb-4 ">{{ text }}</span>
    <br />
    <p class="text-desc text-[22px] text-a-gray-64748b" v-html="desc"></p>
  </div>
</template>

<script>
export default {
  name: "TextUnderLine",
  props: {
    text: { type: String, require: false },
    desc: { type: String, require: false },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.container-textunderline {
  .text {
    font-size: 2.25rem; 
    @include mobile {
      font-size: 2rem;
      padding-left: 1rem;
    }
    @media tablet {
      font-size: 1.875rem;
    }
  }

  .text-desc {
    @include mobile {
      font-size: 18px;
      margin-top: 0;
    }
  }
}
.text {
  position: relative;
  line-height: normal;
  color: #2e3191;

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
