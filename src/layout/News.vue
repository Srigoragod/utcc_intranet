<template>
  <div class="container-news" >
    <div class="py-2">
      <TextUnderline class="mt-8" :text="'ข่าวสาร'" :desc="'ข่าวสารประชาสัมพันธ์ภายนอก ระบบสารสนเทศสืบค้นหนังสือเวียน'" ></TextUnderline>
    </div>
    <div class="grid-news px-4">
      <div data-aos="fade-right" class="item-img-news hover:cursor-not-allowed sm:hidden"></div>
      <a target="_blank" data-aos="fade-left" href="http://center.utcc/search_result_seminar.php" class="">
        <div class="item-news px-8 static hover:shadow-lg">
          <div class="centered-div">
            <font-awesome-icon class="text-4xl icon-svg pb-2" :icon="['fas', 'people-roof']"/>
            <h5 class="text-title ">อบรม/สัมมนา</h5>
            <p class="text-desc ">หมวดเอกสารที่เกี่ยวช้องกับการอบรม /สัมมนา</p>
          </div>
        </div>
      </a>
      <a target="_blank" data-aos="fade-left" href="http://center.utcc/search_result_academic.php">
        <div class="item-news static hover:shadow-lg">
          <div class="centered-div">
            <font-awesome-icon class="text-4xl icon-svg pb-2" :icon="['fas', 'user-graduate']"/>
            <h5 class="text-title">ประชุมวิชาการ /เสนอผลงานวิชาการ</h5>
            <p class="text-desc ">หมวดเอกสารประชุมวิชาการ / เสนอผลงานทางวิชาการ</p>
          </div>
        </div>
      </a>

      <span data-aos="fade-left" class="cursor-not-allowed opacity-50">
        <div class="item-news static hover:shadow-lg">
          <div class="centered-div">
            <font-awesome-icon class="text-4xl icon-svg pb-2" :icon="['fas', 'award']"/>
            <h5 class="text-title">ข้อเสนอบริการวิชาการ และงานวิจัย</h5>
            <p class="text-desc ">ขออภัย เว็บไซต์อยู๋ในระหว่างปรับปรุง</p>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import TextUnderline from '../components/Text/TextUnderline.vue';
export default {
  name:"News",
  components:{
    TextUnderline
  }
};
</script>

<style lang="scss" scoped>
@import "../style/base.scss";

.container-news {

  .grid-news{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto;
    gap: 1rem;

    @include mobile {
      grid-template-columns: repeat(2, minmax(0, 1fr));

    }

  }

  @include min-desktop{
    padding: 0 1rem;
  }

  @include min-desktop{
    .text-title {
    color: $a-blue-005BC0;
    font-size: 2rem;
  }
  .text-desc {
    font-size: 1.125rem;
  }
  }

  .item-img-news {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 20px;

    background: url(../assets/image/bg-12.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @include mobile {
     order: 4;

    }
  }
  .item-news {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 210px;
    margin: 0;
    border: 1px solid #e5f1fb;
    border-radius: 20px;

    @include mobile {
      height: auto;
      padding: .5rem 0;
      // border: 1px solid transparent;
    }
    .centered-div {
      text-align: center;
      img {
        margin: 0.5rem auto;
        padding: 1rem;
        @include mobile {
          // width: 80px;
          // height:80px;
          // background-color: red;
        }
      }
      h5 {
        line-height: normal;
        font-size: 1.75rem;
        @include mobile {
          font-size:  1rem;
        }
      }
      .text-desc{
        @include mobile {
          display: none;
        }
      }
      .icon-svg{
        color: $a-gray-64748b;
        margin-bottom: 1rem;
        @include mobile{
          font-size: 1.5rem;

        }
      }
    }
    &:hover {
      color: #005bc0;
      border: 1px solid #005bc0;
      img{
        transform: scale(1.25);
      }

    }
  }
}
</style>
