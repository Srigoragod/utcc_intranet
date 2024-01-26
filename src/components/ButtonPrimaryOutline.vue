<template>
  <button class="btn btn-sm btn-outline btn-primary rounded-full py-3 px-6 text-[22px]">
    <div class="flex items-center">
     <font-awesome-icon v-if="position == 'left'" class="text-[18px]" :icon="[`${typeIcon}`, `${icon}`]" />
     <div class="text-content md:text-ellipsis">   {{ textButton }}</div> 
     <font-awesome-icon v-if="position == 'right'" class="text-[18px]" :icon="[`${typeIcon}`, `${icon}`]" />
    </div>
  </button>
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
@import "../style/base.scss";
button {
  font-size: 22px;
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
    width: 18px;
    height: 18px;
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
