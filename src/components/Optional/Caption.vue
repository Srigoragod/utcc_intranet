<template>
  <div class="w-[18rem]">
    <div class="overlay-container w-5/6">
      <div class="centered text-white text-center p-2 w-full">
        <h4 class="block pt-16 px-2" v-html="title"></h4>
        <h6 class="block p-4 " v-html="owner"></h6>
      </div>
    </div>
    <div
      class="flex justify-self-center float-left items-center text-[18px] text-left pt-2 cursor-pointer hover:text-a-blue-0874D9"
    >
      <span class="pr-2 hover:underline hover:underline-offset-1 text-1-line" @click="clickForm">
        คลิกเสนอ "แคปชั่นทํางาน"</span
      >
      <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-[14px]" />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CaptionForWork",
  props: {
    title: { type: String, required: false, default: ''},
    owner: { type: String, required: false, default: '' }
  },
  emits: ["click-menu"],
  setup(props,ctx) {
    const item = ref(props.items)
    const uri_form = ref('https://forms.office.com/r/iA6bPFZM2m?origin=lprLink')

    const clickForm = () =>{
      ctx.emit("click-menu", uri_form.value);
      window.open(uri_form.value, '_blank')
    }
    return {
      item,
      clickForm
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.overlay-container {
  border-radius: 20px;
  position: relative;
  min-width: 100%;
  min-height: 280px;
  background-image: url("../../assets/image/bg-12.jpeg");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $a-blue-2E3191;
    opacity: 0.5;
  }
}
.centered {
  position: absolute;
  line-height: 1;
  padding: auto;
}
</style>
