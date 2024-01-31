<template>
  <div
    @click="onClick(item.url)"
    class="flex justify-self-start w-full bg-white bg-opacity-60 drop-shadow p-4 rounded-xl items-center cursor-pointer hover:drop-shadow-xl hover:text-a-blue-005BC0"
  >
    <div
      class="icon-faculty h-16 w-16 bg-white rounded-full flex items-center justify-center p-4"
    >
      <span class="uppercase font-black text-4xl" :class="[`${item.color}`]">{{
        item.icon
      }}</span>
    </div>
    <div class="icon-name pl-4 leading-none">
      <h5>
        {{ item.name }}
      </h5>
      <p class="text-base">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonFaculty",
  props: {
    item: {
      type: Object,
      required: true,
      default: {
        icon: null,
        name: null,
        desc: null,
        url: null,
        color: "",
      },
    },
  },
  setup() {
    const onClick = (url) => {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.log("page not found");
        // page not found
      }
    };
    return {
      onClick,
    };
  },
};
</script>

<style></style>
