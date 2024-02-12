<template>
  <div>
  <div class="btn-blue grid justify-items-center cursor-pointer">
    <font-awesome-icon class="text-2xl icon-svg" :icon="[`${typeIcon}`, `${ !icon ? 'sailboat': icon }`]" />

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
    typeIcon: { type: String, required: false, default: 'fas' },
    icon: { type: String, required: false, default: 'sailboat' },
    isDisable: { type: Boolean, required: false, default: false }
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

.btn-blue{


  .icon-svg {
  //   @include min-desktop{
  //   width: 48px;
  // }
    color: $a-blue-005BC0;
    border: 1px solid $a-blue-005BC0;
    padding: .75rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    @include min-desktop {
      padding: 1.25rem;
      font-size: 1.75rem;
      width: 30px;
      height: 30px;
    }
   }
   .text-btn {
    color: $a-gray-64748b;
    // padding: 0 3rem;
    text-align: center;
    font-size: 1.125rem;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    // overflow: hidden;
    // max-width: 70px;
   }

  &:hover {
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    .icon-svg {
    background-color: $a-blue-005BC0;
    color: #fff;
    svg {
      transform: scale(1);
    }

  }
  .text-btn {
    color: $a-blue-005BC0;
      // transform: scale(1.25);
   }
  }
  @include mobile {
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  }
  @include tablet {
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  }

}

// .is-desktop{
//   @include mobile {
//     display: none;
//   }
//   @include tablet {
//     display: none;
//   }
// }
// .is-mobile {
//   @include min-desktop  {
//     display: none;

//   }

//   @include mobile {
//    text-align: center;
//    .icon-svg {
//     filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
//     color: $a-blue-005BC0;
//     border: 1px solid $a-blue-005BC0;
//     padding: .75rem;
//     border-radius: 0.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 0.5rem;
//    }
//    .text-btn {
//     color: $a-blue-005BC0;
//    }

//   }

//   @include tablet {
//     text-align: center;
//    .icon-svg {
//     filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
//     color: $a-blue-005BC0;
//     border: 1px solid $a-blue-005BC0;
//     padding: .75rem;
//     border-radius: 0.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 0.5rem;
//    }
//    .text-btn {
//     color: $a-blue-005BC0;
//    }

//   }
//   }

// button {
//   color: $a-blue-005BC0;
//   border-radius: 50px;
//   border: 1px solid $a-blue-005BC0;
//   display: flex;
// //   justify-content: start;
//   align-items: center;
//   min-width: auto;
//   min-height: 38px;
//   padding: 0 1.65rem 0 1.75rem;

//   .text-ellipsis{
//   white-space: nowrap; 
//   width: 50px; 
//   overflow: hidden;
//   text-overflow: ellipsis; 
//   }

//   svg {
//     fill: $a-blue-005BC0;
//     margin: 0 0.5rem 0 0.5rem;
//     path {
//       fill: $a-blue-005BC0;
//     }
//   }

//   &:hover {
//     background-color: $a-blue-005BC0;
//     color: #fff;
//     svg {
//       transform: scale(1);
//     }
//   }
// }
</style>
