<template>
  <div class="flex items-center bg-white">
    <font-awesome-icon
      :icon="['fas', 'calendar']"
      class="text-[20px] mr-4 text-a-blue-005BC0"
    />
    <!-- ปีการศึกษา -->
    <select
      v-model="selectedYear"
      @change="handleYear"
      class="select select-bordered w-full max-w-xs"
    >
      <option v-for="(item, index) in years" :key="index">{{ item }}</option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MenuSortByYear",
  emits: ['on-chenge'],
  setup(props, ctx) {
    const selectedYear = ref(null);
    const years = ref([]);
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 8;

    const handleYear = () => {
        console.log(selectedYear.value);
        ctx.emit("on-chenge", selectedYear.value);
    };

    const initialData = () => {
      selectedYear.value = currentYear + 543;
      for (let year = currentYear; year >= startYear; year--) {
        years.value.push(year + 543);
      }
    };
    initialData();
    return {
      selectedYear,
      years,
      handleYear,
    };
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 1.5rem;
  color: #005bc0;
}
</style>
