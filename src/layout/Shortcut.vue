<template>
  <div class="sm:px-4 md:px-0">
    <!-- <h4 class="font-bold text-topic-name pb-2">เมนูที่ใช้งานบ่อย</h4> -->
    <TextUnderline  :text="'ยอดนิยม'"></TextUnderline>
    <div class="show-menu-sc">
      <!-- <ButtonBlue class="mr-8"  v-for="(item,index) in items" :key="index" :textButton="item.text" :url="item.url" :icon="item.icon" :isDisable="item.isDisable"></ButtonBlue> -->
      <ButtonPrimaryOutline
        v-for="(item, index) in items"
        :key="index"
        @click="clikShortCut(item.url)"
        :textButton="item.text"
        :url="item.url"
        :typeIcon="item.typeIcon"
        :icon="item.icon"
        :isDisable="item.isDisable"
      ></ButtonPrimaryOutline>
    </div>
   
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
// import ButtonBlue from '../components/ButtonBlue.vue';
import ButtonPrimaryOutline from "../components/Button/ButtonPrimaryOutline.vue";
import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "Shortcut",
  components: {
    // ButtonBlue,
    ButtonPrimaryOutline,
    TextUnderline,
  },
  setup() {
    const items = ref([
      {
        text: "Microsoft 365",
        url: "http://mail.office365.com",
        typeIcon: "fab",
        icon: "windows",
        isDisable: false,
      },
      {
        text: "เบอร์โทรภายใน",
        url: "http://utcc2.utcc.ac.th/utccphone/",
        typeIcon: "fas",
        icon: "address-book",
        isDisable: false,
      },
      {
        text: "Logo UTCC",
        url: "https://www.utcc.ac.th/logo/",
        typeIcon: "fas",
        icon: "link",
        isDisable: false,
      }
    ]);

    const clikShortCut = (url) => {
      window.open(url, "_blank");
    };

    return {
      items,
      clikShortCut,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../style/base.scss";

.show-menu-sc{
  gap: 2rem;
  padding: 2rem 1rem;
  // display: grid;
  // grid-template-columns: repeat(1, minmax(0, 1fr));
  display: flex;
  flex-flow: row wrap;
  // justify-content: start;
  @include mobile{
    padding: 1rem 1rem;
  }
  @include min-desktop{
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
