<template>
  <button class="hover:shadow-lg cursor-pointer" @click="onClickButton()">
    <font-awesome-icon v-if="icon == 'phone'" :icon="['fas', 'phone']" />
    <div class="text-content md:text-ellipsis">   {{ textButton }}</div>
    <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'arrow-right']" />
  </button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ButtonBlue",
  props: {
    textButton: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, required: false },
    isDisable: { type: Boolean, required: false, default: false },
  },
  setup(props,ctx){
    const onClickButton =()=>{
      if(props.url){
        window.open(props.url, '_blank')
      }else {
        console.log('page not found');
        // page not found
      }
    }
    return {
      onClickButton
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
