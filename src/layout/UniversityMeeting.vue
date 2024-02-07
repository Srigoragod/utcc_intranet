<template>
  <div >
    <TextUnderline class="mt-4 lg:mt-8 mb-4" :text="'ประชุมมหาวิทยาลัย'"></TextUnderline>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div class=" min-[340px]:hidden sm:hidden md:block lg:block ">
        <Calender class="rounded-lg"></Calender>
      </div>
      <div class="grid gap-4 custom-grid">
        <DateMeeting
          v-for="(item, index) in dateMeetingList"
          :key="index"
          :dateMeeting="item"
        ></DateMeeting>
      </div>
      <div class="grid gap-4 custom-grid" >
        <ButtonBlueDownload
          v-for="(item, index) in buttonList"
          :key="index"
          :textButton="item.text"
          :url="item.url"
          :icon="item.icon"
          :isDisable="item.isDisable"
          :description="item.description"
        ></ButtonBlueDownload>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Calender from "../components/Optional/Calender.vue";
import DateMeeting from "../components/DateWidget/DateMeeting.vue";
import ButtonBlueDownload from "../components/Button/ButtonBlueDownload.vue";
import TextUnderline from "../components/Text/TextUnderline.vue";

export default defineComponent({
  name: "UniversityMeeting",
  components: {
    DateMeeting,
    Calender,
    ButtonBlueDownload,
    TextUnderline
  },
  setup() {
    const dateMeetingList = ref([
      {
        id: 1,
        date: "01/12/2024",
        name: "สภามหาวิทยาลัย",
        description:
          "<div>เวลา 09:00 - 12:00 น.</div><div>ณ หอประชุมสภาฯ อาคาร 24</div>",
        isActive: true,
      },
      {
        id: 2,
        date: "02/19/2024",
        name: "คณะกรรมการอำนวยการฯ",
        description:
          "<div>เวลา 09:00 - 12:00 น.</div><div>ณ หอประชุมสภาฯ อาคาร 24</div>",
        isActive: false,
      },
    ]);

    const buttonList = ref([
      {
        text: "ปฎิทินการประชุม.pdf",
        url: "http://center.utcc/2567/calendar.pdf",
        icon: "file",
        description: "Update: ประจำปี 2566",
        isDisable: false,
      },
      {
        text: "มติการประชุมมหาวิทยาลัย",
        url: "http://center.utcc/conclude/",
        icon: "link",
        description: "สภามหาวิทยาลัย, กอม., กบม.",
        isDisable: false,
      },
    ]);


    return {
      dateMeetingList,
      buttonList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.is-mobile{
  @include mobile {
  grid-template-columns: repeat(1, minmax(0, 1fr));  
  padding: 0 1rem;
 }
  .custom-grid{
   @include mobile{
    grid-template-columns: repeat(2, minmax(0, 1fr));
   }
   @include tablet {
    grid-template-columns: repeat(1, minmax(0, 1fr));
   }
 }
}
</style>
