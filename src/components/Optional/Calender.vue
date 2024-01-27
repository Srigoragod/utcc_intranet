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