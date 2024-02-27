<template>
  <div>
    <div class="flex justify-between items-center">
      <TextUnderline :text="'Online Service'" :desc="''"></TextUnderline>
      <a
        class="link link-primary link-seemore is-desktop "
        @click="clickShowMore(isShowMore)"
      >
        {{ textShow }}</a
      >
    </div>

    <div class="container-onlineservice grid grid-cols-12 is-desktop">
      <ButtonPrimaryOutline
        v-for="(item, index) in itemList"
        :key="index"
        :textButton="item.textName"
        @click="clikButton(item.url)"
        :url="item.url"
        :typeIcon="item.typeIcon"
        :icon="item.icon"
        :position="item.position"
        :isDisable="item.isDisable"
        :classCustom="item.class"
      ></ButtonPrimaryOutline>
    </div>



    <div id="online-table-slide" class="is-mobile">
      <Splide :options="splideOptions">
        <SplideSlide v-for="(itemX, index) in dataForTablet" :key="index">
          <div class="container-onlineservice grid grid-cols-6">
            <ButtonPrimaryOutline
              v-for="(item, num) in itemX"
              :key="num"
              :textButton="item.textName"
              @click="clikButton(item.url)"
              :url="item.url"
              :typeIcon="item.typeIcon"
              :icon="item.icon"
              :position="item.position"
              :isDisable="item.isDisable"
              :classCustom="item.class"
            ></ButtonPrimaryOutline>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <div class="text-center hidden">
    <a
      class="link link-primary link-seemore"
      @click="clickShowMore(isShowMore)"
    >
      {{ textShow }}</a
    >
  </div>
</template>

<script>
import { ref } from "vue";
import TextUnderline from "../components/Text/TextUnderline.vue";
import ButtonService from "../components/Button/ButtonService.vue";
import ButtonPrimaryOutline from "../components/Button/ButtonPrimaryOutline.vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
//data
import menudata from "../data/menudata.json";

export default {
  name: "OnlineService",
  components: {
    ButtonService,
    TextUnderline,
    ButtonPrimaryOutline,
    Splide,
    SplideSlide,
  },
  setup(props) {
    const itemList = ref("");
    const jsonData = ref(menudata);
    const isShowMore = ref(false);
    const textShow = ref("View More");
    const filteredData = ref(null);
    const sortedData = ref(null);
    const dataForTablet = ref([]);

    const splideOptions = ref({
      type: "loop",
      perPage: 1,
      arrows: false,
      pagination: true,
      autoplay: false,
    });

    const initialData = () => {
      filteredData.value = jsonData.value.filter(
        (item) => item.url === "service"
      );
      let limitationList = 12;
      sortedData.value = filteredData.value[0].items.slice(0, limitationList);
      itemList.value = sortedData.value;

      const setSize = 12;
      // const dataForTablet = [];
      for (let i = 0; i < filteredData.value[0].items.length; i += setSize) {
        dataForTablet.value.push(
          filteredData.value[0].items.slice(i, i + setSize)
        );
      }

      console.log("dataForTablet ... ");
      console.log(JSON.stringify(dataForTablet.value, null, 4));
    };
    const handleIcon = (icon) => {
      if (icon) {
        return icon;
      } else {
        return "sailboat";
      }
    };
    const clickShowMore = (val) => {
      if (!val) {
        itemList.value = filteredData.value[0].items;
        isShowMore.value = true;
        textShow.value = "View Less";
      } else {
        itemList.value = sortedData.value;
        isShowMore.value = false;
        textShow.value = "View More";
      }
    };

    const clikButton = (url) => {
      window.open(url, "_blank");
    };
    initialData();
    return {
      itemList,
      handleIcon,
      textShow,
      clickShowMore,
      isShowMore,
      clikButton,
      dataForTablet,
      splideOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/base.scss";

.is-mobile {
  @include min-desktop {
    display: none;
  }
}
.is-desktop {
  @include tablet {
    display: none;
  }
}
.link-seemore {
  font-size: 1.25rem;
  &.is-desktop {
    @include mobile {
      display: none;
    }
    @include tablet {
      display: none;
    }
  }
}
svg {
  //   border: 1px solid #005bc0;
  background-color: #e5f1fb;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.25rem;
  font-size: 1.75rem;
}
.container-onlineservice {
  gap: 1rem;
  padding: 1rem;
  @include mobile {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @include tablet {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 2rem;
  }
}

#online-table-slide {
  // @include mobile {
  //   margin-top:4rem;
  // }
  .splide__pagination {
    li {
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
      background-color: #E5F1FB;
      &.is-active {
        width: 8px;
        height: 8px;
        background-color: #005BC0;
      }
    }
  }
}
</style>
