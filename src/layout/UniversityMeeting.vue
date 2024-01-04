<template>
  <div>
    <h4 class="font-bold text-topic-name">การประชุมมหาวิทยาลัย</h4>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <Calender></Calender>
      </div>
      <div>
        <DateMeeting
          :class="[index > 0 ? 'mt-8' : '']"
          v-for="(item, index) in dateMeetingList"
          :key="index"
          :dateMeeting="item"
        ></DateMeeting>
      </div>
      <div>
        <ButtonBlueDownload
          :class="[index > 0 ? 'mt-8' : '']"
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
import Calender from "../components/Calender.vue";
import DateMeeting from "../components/DateMeeting.vue";
import ButtonBlueDownload from "../components/ButtonBlueDownload.vue";
export default defineComponent({
  name: "UniversityMeeting",
  components: {
    DateMeeting,
    Calender,
    ButtonBlueDownload,
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
        date: "12/19/2023",
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

<style lang="scss" scoped></style>
