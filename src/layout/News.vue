<template>
  <div class="container-news">
    <h4 class="font-bold text-topic-name py-2">ข่าวสารประชาสัมพันธ์ภายนอก</h4>
    <div class="grid grid-cols-4 gap-4 items-stretch">
      <div class="item-img-news"></div>
      <div class="item-news static hover:shadow-lg ">
        <div class="centered-div">
            <img src="../assets/icon/laptop.svg" alt="" class="pl-2" />
            <h5>อบรม/สัมมนา</h5>
        </div>
      </div>
      <div class="item-news static hover:shadow-lg ">
        <div class="centered-div">
            <img src="../assets/icon/calendar.svg" alt="" class="pl-2 m-auto" />
            <h5>ประชุมวิชาการ /เสนอผลงานวิชาการ</h5>
        </div>
      </div>
      <div class="item-news static hover:shadow-lg ">
        <div class="centered-div">
            <!-- alt=""  -->
            <img src="../assets/icon/3News.svg" class="pl-2 w-[70px] m-auto" />
            <h5>ข้อเสนอบริการวิชาการ และงานวิจัย</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-news {

 cursor: pointer;
  .item-img-news {
    width: 100%;
    height: 210px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 20px;

    background: url(../assets/image/bg-12.jpeg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .item-news {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 210px;
    margin: 0;
    border: 1px solid #E5F1FB;
    border-radius: 20px;

    .centered-div {
      text-align: center;
      img{
        margin-bottom: 0.5rem;
      }
      h5 {
         line-height: normal;
      }
    }
    &:hover {
        color: #005BC0;
        border: 1px solid #005BC0;

    }
  }
}
</style>
