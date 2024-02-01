<template>
  <div>
    <div class="flex justify-between items-start">
      <TextUnderline
        :text="'Risk'"
        :desc="'งานบริหารความเสี่ยง และแบบฟอร์มบริหารความเสี่ยง'"
      ></TextUnderline>
      <div>
      <Seclect class="w-screen"></Seclect>
      </div>
    </div>
    <div class="flex flex-col w-full lg:flex-row">
      <div
        class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
      >
        content
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <div
        class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
      >
        content
      </div>
    </div>
  </div>
</template>

<script>
import TextUnderline from "../components/Text/TextUnderline.vue";
import Seclect from "../components/Select/Seclect.vue";

export default {
  name: "DividerRisk",
  components: {
    TextUnderline,
    Seclect
  },
};
</script>

<style></style>
