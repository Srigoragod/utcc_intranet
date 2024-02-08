<template>
  <div>
    <div class="is-desktop" :class="`flex items-start container-date ${dateMeeting.isActive ? 'active' : '' }`">
    <div class="div-date w-[80px] h-full ">
      <div class="dd mb-2"><h1>{{ date }}</h1></div>
      <div class="mmyyyy ">{{ `${monthShort} ${currentYear}` }}</div>
    </div>
    <div class="div-desc pl-4 pt-1 w-full">
      <div class="title items-start -mt-2">
        <h4 class="text-ellipsis overflow-hidden text-name">{{textName}}</h4>
      </div>
      <div class="div-time-location -mt-2" v-html="textDesc">
      </div>
    </div>
    <div class="text-base day-ago pt-1 text-right text-a-gray-787878 w-[120px]">{{ textDay }}</div>
  </div>
  <div class="is-mobile">
    <div class="container-date-mobile">
      <div class="div-date">
      <div class="text-date">{{ date }}</div>
      <div class="mmyyyy text-mmyyyy">{{ `${monthShort} ${currentYear}` }}</div>
    </div>
    <div class="textday-mobile">
      {{ textDay }}
    </div>
    </div>
    <div class="div-desc-mobile">
      <div class="text-name-mobile">{{textName}}</div>
      <div class="div-time-location-mobile" v-html="textDesc">
      </div>
    </div>

  </div>
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
@import "../../style/base.scss";


.text-name{

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 2rem;
  // width: 160px;
  @include tablet {
      font-size: 1.75rem;
      width: 160px;
  }

}

.div-desc{
  padding-left: .5rem;
}

.is-desktop {
  @include mobile {
    display: none;
  }
}
.is-mobile {
@include tablet {
    display: none;
  }
  background: linear-gradient(180deg, #f8f8f8 0%, #eff5f9 46.35%, #e5f1fb 100%);
  line-height: normal;
  padding: 0.25rem 0.375rem;
  border-radius: 10px;
  border: 1px solid $a-blue-E5F1FB;
  width: 100%;
  height: 100%;
@include mobile {

  .container-date-mobile{
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
    padding:0.125rem;
    .div-date {
      background-color: $a-blue-2E3191;
      width: 3.25rem;
      height: fit-content;
      color: #fff;
      position: relative;
      align-items: start;
      padding: 0 0.375rem;
      display: grid;
      border: 0.5rem;
      border-radius: 0.375rem;
      .text-date {
      font-size: 2.75rem ;
      line-height: normal;
      height: 2.75rem;
      width: 3rem;
      margin-top: -0.5rem;
    }
    .text-mmyyyy {
      margin-top: -0.375rem;
    }

    }
    .textday-mobile{
      line-height: 1;
      font-size: 1.125rem;
    }

  }
  .div-desc-mobile{
    .text-name-mobile{
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1;
      padding-top: 0.5rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 160px;
          }
    .div-time-location-mobile{
      font-size: 1rem;
    }
  }


  }
  @include min-desktop {
    display: none;
  }
}
.container-date {
  height: 100px;
  border-radius: 20px;
  padding: 0.5rem 1rem ;
  background-color: #F8F8F8;

  @include tablet {
    padding: 0 0.5rem 0 0;
  }
  @include max-tablet{
    // background-color: lime;
    width: 90%;
  }

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

  h1{
    @include mobile{
      font-size: 62px;
      line-height: normal;
    }
    @include tablet {
      font-size: 58px;
      padding-top: .75rem;
    }
  }


}

.div-desc {
  h4{
    @include mobile {
      font-size: 24px;
    }
  }

  @include tablet {
    padding-top: 1rem;
    padding-left: 0.5rem;
  }

}
.div-time-location {
    font-size: 1rem;
    line-height: normal;
    margin-top: 0.125rem;
    @include mobile{
      font-size: 1.125rem;
    }
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
