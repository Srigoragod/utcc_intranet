<template>
  <div class="mt-14 py-8 px-0 w-full "  id="dashboard-slide">
    <Splide :options="splideOptions">
      <SplideSlide v-for="(item, index) in slides" :key="index">
        <div class="bg-image mx-auto" :style="{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }"  >
          <!-- <el-image :src="item.image"> </el-image> -->
          <h3 class="smallTop block" v-html="item.smallTop"></h3>
          <h2 class="text-description block -mt-8" v-html="item.description"></h2>
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
      arrows: true,
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
        image: "https://www.utcc.ac.th/wp-content/uploads/2024/02/UTCC-BG-Bl24.jpg",
      },
      {
        title: "Slide 1",
        "smallTop":"มหาวิทยาลัยหอการค้าไทย",
        description: "Top University in Trade & Services in ASEAN ",
        image: "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-13.jpeg",
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
        padding-top: 2rem;
        margin-bottom: 1rem;
    @include mobile {
        padding-top: 7rem;
        margin-bottom: 2rem;
        font-size: 1.75rem;
       }
  }

  .text-description{
      @include mobile {
        font-size: 38px;
        padding: 0 3rem;
        line-height: normal;
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
    }


}

#dashboard-slide {
.splide__pagination {
    margin-top: 1rem;
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
        background-color: #D9D9D9;
        &.is-active {
            width: 8px;
            height: 8px;
            background-color: #ffffff;
        }

    }
    @include mobile {
      margin-top: -3rem;
    }
}
}
</style>