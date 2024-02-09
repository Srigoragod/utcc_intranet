<template>
<div>
  <div
    @click="onClick(item.url)"
    class="is-desktop flex justify-self-start w-full bg-white bg-opacity-70 drop-shadow p-4 rounded-xl items-center cursor-pointer hover:drop-shadow-xl hover:text-a-blue-005BC0 hover:bg-opacity-80"
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
      <p class="text-lg text-desc">
        {{ item.description }}
      </p>
    </div>
  </div>
  <div   @click="onClick(item.url)" class="is-mobile grid justify-items-center">

      <div
      class="icon-faculty h-10 w-10 bg-white rounded-full flex items-center justify-center p-2 drop-shadow-md"
    >
      <span class="uppercase font-black text-2xl" :class="[`${item.color}`]">{{
        item.icon
      }}</span>
    </div>
    <p class="text-name text-center text-lg"> {{ item.name }}</p>
    <p class="text-xs leading-none text-center opacity-50"> {{ item.description }}</p>

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

<style lang="scss" scoped>
@import "../../style/base.scss";

.is-desktop {
  @include mobile {
      display: none;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;

    @include min-desktop{
      font-size: 1.5rem;
      width: 100%;
    }

  }
  .text-desc {
    font-size: 1.125rem;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 150px;

    @include min-desktop{
      width: 100%;
    }
  }



  .icon-name{
    @include tablet{
     padding-left: 0.5rem;
     padding-right: 0.5rem;
    }
  }


}

.is-mobile {
  @include mobile {
    .icon-faculty{
      padding: 0.75rem;
      border-radius: 0.5rem;
      max-height: 48px;
      max-width: 48px;
    }
    .text-name {
      width: 84px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 1rem;
      line-height: normal;
      padding-top: 0.25rem;
      color: $a-blue-005BC0;
    }
  }

  @include min-desktop {
    display: none;
  }
}
</style>
