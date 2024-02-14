<template>
    <div class="mt-8 ">
    <div class="text-title">
         <!-- <h4 class="font-bold text-topic-name">ไฟล์อัพเดทล่าสุด</h4> -->
         <!-- รายการเอกสารที่มีการอัพเดทล่าสุดทั้งหมด -->
         <TextUnderline :text="'Latest Update'" :desc="''"></TextUnderline>
         <a class="link link-primary link-seemore text-[20px] hidden" @click="clickShowMore(isShowMore)"> {{textShow}}</a>
    </div>
 
    <div class="show-menu ">
        <ButtonPrimaryOutline
        v-for="(item, index) in itemList"
        :key="index"
        @click="clikShortCut(item.url)"
        :textButton="item.textName"
        :url="item.url"
        :typeIcon="item.typeIcon"
        :icon="item.icon"
        :isDisable="item.isDisable"
        >
        </ButtonPrimaryOutline>
    </div>
    <!-- <div v-show="isNoData" class="noData w-full h-[40px]">
            <p class="text-a-gray-787878 text-center pt-1 text-lg">No Data</p>
        </div> -->
    </div>
</template>

<script>
import {ref} from 'vue';
import TextUnderline from '../components/Text/TextUnderline.vue';
import ButtonPrimaryOutline from '../components/Button/ButtonPrimaryOutline.vue';
export default {
    name: "LastUpdate",
    components:{
        TextUnderline,
        ButtonPrimaryOutline
    },
    setup(props){
        const textShow = ref('View More')
        const isShow = ref(false)
        const isNoData = ref(false)
        const itemList = ref([
        {
          "textName": "ระบบจองห้อง HYFLEX",
          "url": "https://hyflex.utcc.ac.th/",
          "type":"link",
          "typeIcon": "fas",
          "icon": "chalkboard-teacher"
        }
        ]);
        const clikShortCut = () =>{
            console.log('clikShortCut ... run');
        }
        const clickShowMore = () =>{
            console.log('clickShowMore ... run ');
        }

        return{
            textShow,
            isShow,
            clickShowMore,
            itemList,
            clikShortCut,
            isNoData
        }

    }

}
</script>

<style lang="scss" scoped>
@import "../style/base.scss";

.text-title {
    display:  flex;
    justify-content: space-between;

    .link{
        @include mobile {
            display: none;
        }
    }
}
.btn-all {
    @include mobile {
        display: none;
    }
}
.noData {
    background-color: #f8f8f8;
    border-radius: 10px;
    position: relative;
    align-items: center;
    padding: 0.25rem 0;
}

.show-menu {
  gap: 2rem;
  padding: 2rem 1rem;
  display: flex;
  flex-flow: row wrap;
  // justify-content: start;
  @include mobile{
    padding: 1rem 1rem;
  }
  @include min-desktop{
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    justify-content: left;
  }
}

</style>