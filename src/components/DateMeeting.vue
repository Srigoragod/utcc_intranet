<template>
  <div :class="`flex items-stretch container-date ${dateMeeting.isActive ? 'active' : '' }`">
    <div class="div-date w-[80px]">
      <div class="dd"><h1>{{ date }}</h1></div>
      <div class="mmyyyy">{{ `${monthShort} ${year}` }}</div>
    </div>
    <div class="div-desc pl-4 w-full">
      <div class="title items-start -mt-2">
        <h4 class="text-ellipsis overflow-hidden md:text-[24px] lg:text-[34px] md:truncate md:w-[205px] lg:w-full">{{textName}}</h4>
      </div>
      <div class="div-time-location -mt-2" v-html="textDesc">
      </div>
    </div>
    <div class="subtitle-1 day-ago w-[120px] text-right pr-4 text-a-gray-787878">{{ textDayAgo }}</div>
  </div>
</template>

<script>
import {ref, defineComponent} from "vue";
export default defineComponent({
  name: "DateMeeting",
  props:{
    dateMeeting: { type: Object, required: true },
},
  setup(props){

    const monthArray = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]);

    const date = ref('1')
    const monthShort = ref('Jan')
    const year = ref('2023')

    const textName = ref(props.dateMeeting.name)
    const textDesc = ref(props.dateMeeting.description)
    const textDayAgo  = ref('1 Day ago')

    const initialData = () =>{
      let dateString = props.dateMeeting.date;
      const [month, day, year] = dateString.split('/');
      date.value = day
      let indexMonth = parseInt(month);
      monthShort.value = monthArray.value[ indexMonth-1];

      const today = new Date();
      const meetingDate = new Date(dateString);
      const timeDifference = today - meetingDate;
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      textDayAgo.value = `${daysAgo} Days ago`;

    }

    initialData()

    return{ 
      date,
      monthShort,
      year,
      textName,
      textDesc,
      textDayAgo
    }
  }
})
</script>

<style lang="scss" scoped>
.container-date {
  height: 100px;
  border-radius: 20px;
  padding: 0.5rem 1rem ;
  background-color: #F8F8F8;

.div-date {
  font-size: 18px;
  width: 80px;
  background-color: #E5F1FB;
  position: relative;
  text-align: center;
  top: 0;
  border-radius: 10px;
  .dd {
    color: #2E3191;
    font-size: 80px;
    line-height: normal;
    width: 80px;
    margin-top: -0.5rem;
  }
  .mmyyyy {
    color: #2E3191;
    margin-top: -28px;
    padding-left: 8px;
    width: 80px;
  }

  .text-ellipsis{
  white-space: nowrap; 
  width: 50px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  }


}

.div-time-location {
    font-size: 1rem;
    line-height: normal;
    margin-top: 0.125rem
  }
&.active{
    background: linear-gradient(180deg, #f8f8f8 0%, #eff5f9 46.35%, #e5f1fb 100%);
    .div-date {
      background-color: #2E3191;
    }
    .dd{
      color: #fff
    }
    .mmyyyy {
      color: #fff
    }

}


}

</style>
