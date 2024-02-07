<template>
 <div>
  <div class="is-desktop flex justify-between items-center container-btn-blue-download h-[100px] hover:shadow-lg" @click="onClickButton()">
    <div class="flex items-center">
      <div class="icon-svg">
        <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'link']" class="sm:text-base text-3xl"/>
        <font-awesome-icon v-else :icon="['fas', 'calendar']" class="sm:text-base text-3xl" />
      </div>
      <div class="button-content w-full pl-4">
        <div class="text-button text-ellipsis overflow-hidden">
          <h4 class="text-ellipsis overflow-hidden whitespace-nowrap">{{ textButton }}</h4>
        </div>
        <div class="text-[18px] mt-1" v-html="description"></div>
      </div>
    </div>
    <div class="btn-dowload">
        <!-- <i  class="el-icon-download"></i> -->
      <font-awesome-icon class="text-xl" v-if="icon== 'file'"  :icon="['fas', 'download']" />
      <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'arrow-right']" />
    </div>
  </div>
  <div class="is-mobile container-btn-blue-download h-full">
    <div class="icon-svg-mobile">
        <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'link']" class="text-4xl"/>
        <font-awesome-icon v-else :icon="['fas', 'calendar']" class="text-4xl" />
    </div>
    <div class="button-content-mobile w-full relative justify-items-center">
        <div class="text-button-mobile">
          <label>{{ textButton }}</label>
        </div>
        <div class="text-desc" v-html="description"></div>
    </div>
  </div>
 </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ButtonBlueDownload',
    props: {
    textButton: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, required: false },
    description: { type: String, required: false},
    isDisable: { type: Boolean, required: false, default: false },
    class:{ type: String, required: false }
  },
  setup(props){
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
@import "../../style/base.scss";
.container-btn-blue-download {
  color: #005BC0;
  // color: #787878;
  border-radius: 10px;
  border: 1px solid #E5F1FB;
  cursor: pointer;

  .icon-svg {
    min-height: 80px;
    padding-left: 1rem;
    padding-top: 0.75rem;
    @include mobile {
      max-height: 48px;
      max-width: 48px;
    }
    @include tablet {
      padding-left: 0.25rem;
      padding-top: 1.25rem;
       margin: 1rem;
    }

    svg {
      height: 52px;
      width: 52px;
      margin-right: 1rem;
      @include mobile {
      height: 28px;
      width: 28px;
      margin-right: 4px;
     }
     @include tablet {
      height: 38px;
      width: 38px;
      margin-right: 4px;
     }
    }
 
  }
  .button-content {
    width: 100%;

    h4{
        color: #005BC0;
        // color: #787878;
    }

    @include tablet {
      padding: 0;
    }
    .text-button {
        color: #787878;
        font-size: 1rem;
        h4{
          @include mobile {
            font-size: 28px;
            width: 200px;
          }
          @include tablet{
            font-size: 28px;
            width: 180px;
          }
        }
    }
  }

  .btn-dowload {
    min-height: 100px;
    min-width: 80px;
    background-color: #E5F1FB;
    text-align: center;
    padding-top: 2.25rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    svg {
      height: 24px;
      width: 24px;
      color: #005BC0;
    }
  }

  &:hover {

    h4{
        color: #005BC0;
    }
    border: 1px solid #005BC0;
    .icon-svg {
        color: #005BC0;
        transform: scale(1.25);
    }
    .btn-dowload {

        background-color: #005BC0;
        svg{
            color: #fff;
        }
    }


  }
}
.is-desktop {
  @include mobile {
    display: none;
  }
}
.is-mobile {
  @include mobile{
    &.container-btn-blue-download{
    display: grid;
    justify-items: center;
   }
   .text-desc {
    font-size: 1rem;
    color: $a-gray-343443;
    opacity: 0.5;
   }
  }
  @include tablet {
    display: none;
  }
  @include min-desktop{
    display: none;
  }
  padding: 1rem  0.375rem;
  justify-content: center;
  display: grid;


  .icon-svg-mobile{
    display: grid;
    // justify-content: center;
  }
  .text-button-mobile{
    font-size: 1.25rem;
    line-height: 1;
    padding-top: 0.75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    lable{
      padding-top: 0.75rem;
    }
  }
  .text-desc{
    width: 100%;
    text-align: center;
  }

}

</style>
