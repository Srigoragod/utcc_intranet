<template>
  <div class="w-[18rem]">
    <div class="overlay-container w-5/6">
      <div class="centered text-white p-2">
        <h4 class="pt-20 px-2">คนที่ไม่เคยทำผิด คือคนที่ไม่เคยทำอะไรเลย</h4>
        <h6 class="block text-right pr-4">– ธีโอดอร์ รุสเวลต์ -</h6>
      </div>
    </div>
    <div class="flex justify-self-center float-right  items-center text-[18px] text-right pt-2 cursor-pointer hover:text-a-blue-0874D9">
      <span class="pr-2 hover:underline hover:underline-offset-1"> คลิกเสนอ "แคปชั่นทํางาน"</span> 
      <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-[14px]" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.overlay-container {
  border-radius: 20px;
  position: relative;
  min-width: 100%;
  min-height: 280px;
  background-image: url("../assets/image/bg-24.jpeg");
  background-size: cover;
  background-position: left;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $a-blue-2E3191;
    opacity: 0.8;
  }
}
.centered {
  position: absolute;
  line-height: 1;
  padding: auto;
}
</style>
