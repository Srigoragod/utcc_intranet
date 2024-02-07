<template>
  <div id="calendar">
    <el-calendar v-model="value"  />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "Calendar",
    setup(){
        const value = ref(new Date())
        return{
            value
        }
    }

}
</script>
<style>
  .el-calendar__title{
    font-size: 1.25rem !important;
    color: #2E3191;
  }
  .el-calendar__body {
    padding: 20px 20px 0 20px !important;
  }
  @media only screen and (max-width: 1024px) {
    .el-calendar__header {
      padding: 0 !important;
    }
    .el-calendar__body {
    padding: 0 !important;
    }
  }
</style>

<style lang="scss" scoped>
#calendar {
  font-size: 18px;
}

</style>
<style lang="scss">
#calendar{
.el-calendar__title{
  font-size: 18px;
}
.el-button-group{
  button{
    font-size: 18px;
  }

}
.el-calendar-table thead th {
  padding: 0 0 12px 0;
}
  .el-calendar-table .el-calendar-day{
  padding: 0 4px;
  height: 20px;
}
}

</style>