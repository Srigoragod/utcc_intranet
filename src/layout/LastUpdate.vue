<template>
    <div class="mt-8">
    <div class="flex justify-between items-start">
         <!-- <h4 class="font-bold text-topic-name">ไฟล์อัพเดทล่าสุด</h4> -->
         <TextUnderline :text="'อัพเดทล่าสุด'" :desc="'รายการเอกสารที่มีการอัพเดทล่าสุดทั้งหมด'"></TextUnderline>
         <el-link class="text-[20px]" type="primary"><h6>ดูทั้งหมด</h6></el-link>
    </div>
 
    <div class="pt-2">
        <div class="noData w-full h-[40px]">
            <p class="text-a-gray-787878 text-center "><h6>No Data</h6></p>
        </div>
    </div>
    </div>
</template>

<script>
import TextUnderline from '../components/Text/TextUnderline.vue';
export default {
    name: "LastUpdate",
    components:{
        TextUnderline
    }

}
</script>

<style lang="scss">
.noData {
    background-color: #f8f8f8;
    border-radius: 10px;
    position: relative;
    align-items: center;
    padding: 0.25rem 0;
}

</style>