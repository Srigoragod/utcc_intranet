<template>
  <div class="mt-14 py-8 px-0 w-full "  id="dashboard-slide">
    <Splide :options="splideOptions">
      <SplideSlide v-for="(item, index) in slides" :key="index">
        <div class="bg-image mx-auto" :style="{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }"  >
          <!-- <el-image :src="item.image"> </el-image> -->
          <h4 class="smallTop" v-html="item.smallTop"></h4>
          <h2 class="text-description w-full" v-html="item.description"></h2>
          <p class="text-[20px] -mt-4 hidden lg:block">
            แพลตฟอร์มนี้ถูกสร้างขึ้นเพื่อให้ความสะดวกในการเข้าถึงไฟล์เอกสารที่เกี่ยวข้องกับการทำงาน รวดเร็วและมีประสิทธิภาพ <br/>มาร่วมสร้างประสบการณ์การทำงานรูปแบบใหม่ด้วยกัน
          </p>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const imagePath =  ref('@/assets/image/Slider/Image1.png')
    const splideOptions = ref({
      type: "loop",
      perPage: 1,
      arrows: false,
      pagination: true,
      autoplay: true,
    });

    const slides = ref([
      {
        title: "Slide 1",
        "smallTop":"Welcome To",
        description: "UTCC Intranet",
        image: "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-14.jpeg",
      },
      {
        title: "Slide 1",
        "smallTop":"Share files from ",
        description: "UTCC Intranet of Staff",
        image: "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-12.jpeg",
      },
      {
        title: "Slide 1",
        "smallTop":"มหาวิทยาลัยหอการค้าไทย",
        description: "เด็กหัวการค้า UTCC",
        image: "https://www.utcc.ac.th/wp-content/uploads/2024/02/UTCC-BG-Bl24.jpg",
      }
      // Add more slides as needed
    ]);

    const getBackgroundImage = () =>{
        return `url(${imagePath.value})`;
    }

    return {
      splideOptions,
      slides,
      getBackgroundImage
    };
  },
};
</script>

<style lang="scss" scoped> 
  @import "../../style/base.scss";

  .smallTop{
        font-size:  2.25rem;
        padding-top: 2rem;
        margin-bottom: -1rem;
    
    @include mobile {
        padding-top: 1.75rem;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        margin: 0 2rem;
       }
    @include min-desktop {
      padding-top: 0;
    }
  }

  .text-description{
      @include mobile {
        padding: 0 4rem;
        line-height: 1;
        font-size: 3.25rem;
       }
  }

  #dashboard-slide {
    @include mobile {
     margin-top: 0;
     padding:0;
    }
  }
.bg-image{
    min-height: 380px;
    width: 100%;
    border-radius: 30px;
    // Default Bg Image
    background-image: url(../assets/image/Slider/Image1.png);
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    text-align: center;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 5rem 0;
    @include mobile {
      border-radius: 0;
      padding: 0;
      border-radius: 1.5rem;
      min-height: 250px;
    }


}

</style>
<style lang="scss">

.splide__pagination {

li  {
    // background: blue;
    width: 16px;
    height: 16px;
    align-items: center;
    position: relative;
    display: flex;
    align-items: center;
}
bottom: unset;
.splide__pagination__page {
    opacity: unset;
    width: 8px;
    height: 8px;
    // background-color: #D9D9D9;
    &.is-active {
        width: 6px;
        height: 6px;
        background-color: #005BC0;
    }

}
}
</style>
<style>
.splide__pagination{
  bottom: -2.5em;
}
</style>