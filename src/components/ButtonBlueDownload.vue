<template>
  <div class="flex justify-between items-center container-btn-blue-download h-[100px] hover:shadow-lg">
    <div class="flex items-center">
      <div class="icon-svg">
    
        <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'link']" />
        <font-awesome-icon v-else :icon="['fas', 'calendar']" />
      </div>
      <div class="button-content w-full pl-4">
        <div class="text-button text-ellipsis overflow-hidden">
          <h4 class="text-ellipsis overflow-hidden md:text-[24px] lg:text-[34px] md:truncate md:w-[205px] lg:w-full ">{{ textButton }}</h4>
        </div>
        <div class="text-desc -mt-2" v-html="description"></div>
      </div>
    </div>
    <div class="btn-dowload">
        
        <!-- <i  class="el-icon-download"></i> -->
      <font-awesome-icon v-if="icon== 'file'"  :icon="['fas', 'download']" />
      <font-awesome-icon v-if="icon== 'link'" :icon="['fas', 'arrow-right']" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'ButtonBlueDownload',
    props: {
    textButton: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, required: false },
    description: { type: String, required: false},
    isDisable: { type: Boolean, required: false, default: false },
  },
};
</script>

<style lang="scss" scoped>
.container-btn-blue-download {

//   color: #005BC0;
  color: #787878;
  border-radius: 10px;
  border: 1px solid #E5F1FB;
  cursor: pointer;

  .icon-svg {
    min-height: 80px;
    padding-left: 1rem;
    padding-top: 0.75rem;

    svg {
      height: 53px;
      width: 53px;
    }
  }
  .button-content {
    width: 100%;

    h4{
        // color: #005BC0;
        color: #787878;
    }

    .text-button {
        color: #787878;
        font-size: 1rem;
    }
  }

  .btn-dowload {
    min-height: 100px;
    min-width: 100px;
    background-color: #E5F1FB;
    text-align: center;
    padding-top: 2.25rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    svg {
      height: 32px;
      width: 32px;
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
    }
    .btn-dowload {
        background-color: #005BC0;
        svg{
            color: #fff;
        }
    }


  }
}
</style>
