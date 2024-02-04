<template>
  <div>
  <button :class="classCustom" class="is-desktop btn btn-xs md:btn-sm lg:btn-sm xl:btn-sm  btn-outline btn-primary rounded-full py-3 px-1 sm:px-2 md:px-4 lg:px6  text-[22px] sm:text-base md:text-base">
    <div class="flex items-center">
     <font-awesome-icon v-if="position == 'left'" class="text-sm md:text-[18px] lg:text-[18px]" :icon="[`${typeIcon}`, `${icon}`]" />
     <div class="text-[22px] sm:text-lg md:text-lg lg:text-xl md:text-ellipsis">   {{ textButton }}</div>
     <font-awesome-icon v-if="position == 'right'" class="text-sm md:text-[18px] lg:text-[18px]" :icon="[`${typeIcon}`, `${icon}`]" />
    </div>
  </button>
  <div class="is-mobile btn-blue grid justify-items-center">
    <font-awesome-icon class="text-2xl icon-svg" :icon="[`${typeIcon}`, `${icon}`]" />
    <div class="text-base text-btn block">   {{ textButton }}</div>
  </div>
</div>
</template>

<script>
import { ref,defineComponent } from 'vue';
export default defineComponent({
  name: "ButtonPrimaryOutline",
  props: {
    textButton: { type: String, required: true },
    url: { type: String, required: true },
    typeIcon: { type: String, required: true },
    icon: { type: String, required: false },
    isDisable: { type: Boolean, required: false, default: false },
    position: { type: String, required: false },
    classCustom: { type: String, required: false }
  },
  setup(props,ctx){
    const url = ref(props.url)
    const onClickButton =()=>{
      if(url.value){
        window.open(url.value, '_blank')
      }else {
        console.log('page not found');
        // page not found
      }
    }
    return {
      onClickButton,
      // textButton,
      // icon,
      // typeIcon

    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
.is-desktop{
  @include mobile {
    display: none;
  }
}
.is-mobile {
  @include min-desktop  {
    display: none;

  }
  @include mobile {
   text-align: center;
   .icon-svg {
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    color: $a-blue-005BC0;
    border: 1px solid $a-blue-005BC0;
    padding: .75rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
   }
   .text-btn {
    color: $a-blue-005BC0;
   }

  }

}
button {
  color: $a-blue-005BC0;
  border-radius: 50px;
  border: 1px solid $a-blue-005BC0;
  display: flex;
//   justify-content: start;
  align-items: center;
  min-width: auto;
  min-height: 38px;
  padding: 0 1.65rem 0 1.75rem;

  .text-ellipsis{
  white-space: nowrap; 
  width: 50px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  }

  svg {
    fill: $a-blue-005BC0;
    margin: 0 0.5rem 0 0.5rem;
    path {
      fill: $a-blue-005BC0;
    }
  }

  &:hover {
    background-color: $a-blue-005BC0;
    color: #fff;
    svg {
      transform: scale(1);
    }
  }
}
</style>
