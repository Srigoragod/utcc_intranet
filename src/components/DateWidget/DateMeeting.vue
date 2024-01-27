<template>
  <div :class="`flex items-start container-date ${dateMeeting.isActive ? 'active' : '' }`">
    <div class="div-date w-[80px] ">
      <div class="dd mb-2"><label class="text-[70px] sm:text-[50px] md:text-[60px] lg:text-[70px]">{{ date }}</label></div>
      <div class="mmyyyy ">{{ `${monthShort} ${currentYear}` }}</div>
    </div>
    <div class="div-desc pl-4 pt-1 w-full">
      <div class="title items-start -mt-2">
        <h4 class="text-ellipsis overflow-hidden sm:text-lg md:text-0xl lg:text-1qxl xl:text-3xl 2xl:text-4xl  md:truncate w-full sm:w-[100px]  md:w-[150px] lg:w-full xl:w-full 2xl:w-full ">{{textName}}</h4>
      </div>
      <div class="div-time-location -mt-2" v-html="textDesc">
      </div>
    </div>
    <div class="text-sm day-ago pt-1 text-right text-a-gray-787878 w-[120px]">{{ textDay }}</div>
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
    // const year = ref('2023')
    const currentYear = new Date().getFullYear();

    const textName = ref(props.dateMeeting.name)
    const textDesc = ref(props.dateMeeting.description)
    const textDay  = ref('')

    const initialData = () =>{
      let dateString = props.dateMeeting.date;
      const [month, day, currentYear] = dateString.split('/');
      date.value = day
      let indexMonth = parseInt(month);
      monthShort.value = monthArray.value[ indexMonth-1];

      const today = new Date();
      const meetingDate = new Date(dateString);
      const timeDifference = today - meetingDate;
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
      let text = '';
      if(daysAgo == 0 ){
        text = 'today'
      }else if (daysAgo > 1  ){
        text = `${daysAgo == 1 ? 'day ago' : 'days ago'}`;
      }else if ( daysAgo < 0){
        text = `${daysAgo == -1 ? 'day to go' : 'days to go'}`;
      }

      textDay.value = `${convertToNegative(daysAgo)} ${text}`

    }

    const convertToNegative =(val)=>{
      if(val < 0){
        return Math.abs(val);
      }
      return val
    }
    initialData()

    return{ 
      date,
      monthShort,
      currentYear,
      textName,
      textDesc,
      textDay
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
    line-height: normal;
    width: 80px;
    margin-top: -0.5rem;
  }
  .mmyyyy {
    color: #2E3191;
    margin-top: -28px;
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
