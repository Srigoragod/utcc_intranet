<template>
    <div class="mb-4">
        <div class="flex justify-between items-center">
            <div>
                <TextUnderline :text="topicName" :desc="''"/>
            </div>
            <div>
             <MenuSortByYear @on-chenge="handleYear" ></MenuSortByYear>
            </div>
        </div>
    </div>
    <div class="is-desktop" v-if="fileData && fileData.length > 0">
      <FileList
        v-for="(item, index) in fileData"
        :id="item.id"
        :key="index"
        class="break-inside-avoid first:mt-0"
        :topicName="item.topicName"
        :isAlert="item.isAlert"
        :alertDetail="item.alertDetail"
        :dataList="item.itemList"
        :isHeightFull="item.isFull"
        :isNotHome="isNotHome"
        :isShowTopic="false"
      ></FileList>
    </div>
    
</template>
<script >
import { ref,defineComponent } from "vue";

// data
import risk_data from "../data/risk_data.json"

// component
import TextUnderline from '../components/Text/TextUnderline.vue';
import MenuSortByYear from "../components/Menu/MenuSortByYear.vue";
import FileList from "../components/File/FileList.vue";

export default defineComponent({
    name: "Risk",
    components: {
        TextUnderline,
        MenuSortByYear,
        FileList
    },
    setup(){
        const fileData = ref(risk_data);
        const topicName = ref('งานบริหารความเสี่ยง')
        const year = ref(null)
        const handleYear =(val) =>{
            console.log('run ... risk', val);
        }
        return{
            topicName,
            handleYear,
            fileData
        }
    }
})
</script>