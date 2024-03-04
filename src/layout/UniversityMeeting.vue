<template>
  <div >
    <TextUnderline class="mt-4 lg:mt-8 mb-4" :text="'ประชุมมหาวิทยาลัย'"></TextUnderline>
    <div class="grid  gap-4 container-meeting">
      <div class="div-calender">
        <Calender class="rounded-lg"></Calender>
      </div>
      <div class="grid gap-4 custom-grid ">
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
          :textButton="item.name"
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

//data
import umeeting_data from '../data/umeeting_data.json';
import umeeting_date_data from '../data/umeeting_date_data.json';


export default defineComponent({
  name: "UniversityMeeting",
  components: {
    DateMeeting,
    Calender,
    ButtonBlueDownload,
    TextUnderline
  },
  setup() {
    const dateMeetingList = ref(null);
    const buttonList = ref(null);

    const initialMeetingList =() => {
      let date_data = umeeting_date_data;
      dateMeetingList.value = date_data;
      let data = umeeting_data;
      buttonList.value = data[0].itemList
    }

    initialMeetingList()
    return {
      dateMeetingList,
      buttonList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../style/base.scss";
.div-calender{
  display: none;
  @include min-desktop {
    display: block;
  }
}


.container-meeting{
  // padding: 1rem;
  @include min-tablet{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @include max-tablet{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));

  }
  @include mobile{
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 1rem;
  }
  @include mini-mobile{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
.custom-grid{
  //  padding: 0 1rem;
   @include mobile{
    padding: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
   }
   @include tablet {
    padding: 0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
   }

 }
</style>
