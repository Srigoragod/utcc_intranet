<template>
  <div class="mt-14 py-8 w-full"  id="dashboard-slide">
    <Splide :options="splideOptions">
      <SplideSlide v-for="(item, index) in slides" :key="index">
        <div class="bg-image mx-auto flex justify-center items-center" :style="{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }"  >
          <!-- <el-image :src="item.image"> </el-image> -->
          <div class="z-10" v-html="item.description"></div>
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
        description: "<h3 class='-mb-8'>Welcome To</h3><h1 >UTCC Intranet</h1>",
        image: "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-14.jpeg",
      },
      {
        title: "Slide 1",
        description: "<h3 class='-mb-8'>Share files from </h3><h1 >UTCC Intranet</h1>",
        image: "https://www.utcc.ac.th/wp-content/uploads/2020/05/bg-12.jpeg",
      },
      {
        title: "Slide 1",
        description: "<h3 class='-mb-8'>มหาวิทยาลัยหอการค้าไทย </h3><h1 >UTCC มณีนพเก้า </h1>",
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

}
</style>
<style lang="scss" >
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
}
}
</style>