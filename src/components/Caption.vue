<template>
  <div>
    <div class="overlay-container">
      <div class="centered text-white p-2">
        <h4 class="pt-20 px-2">คนที่ไม่เคยทำผิด คือคนที่ไม่เคยทำอะไรเลย</h4>
        <h6 class="block text-right pr-4">– ธีโอดอร์ รุสเวลต์ -</h6>
      </div>
    </div>
    <div class="text-right pt-2 cursor-pointer hover:text-a-blue-0874D9">
      <span> ร่วมเสนอ "คำคมการทำงาน แคปชั่นทํางาน"</span> 
      <font-awesome-icon :icon="['fas', 'angle-right']" />
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
