<template>
  <button
    class="flex w-full justify-between items-center item-file cursor-pointer hover:shadow-lg"
    :class="[
      isDisable
        ? 'cursor-not-allowed disabled:opacity-60 disabled'
        : '',
    ]"
    :disabled="isDisable"
    @click="onClickButton(icon, fileName)"
  >
    <div class="flex items-center w-full">
      <div class="icon-item">
        <font-awesome-icon
          v-if="icon == 'file'"
          :icon="['fas', 'file-pdf']"
          class="text-[28px]"
        />
        <font-awesome-icon
          v-else-if="icon == 'word'"
          :icon="['fas', 'file-word']"
          class="text-[28px]"
        />
        <font-awesome-icon
          v-else-if="icon == 'download'"
          :icon="['fas', 'file-arrow-down']"
          class="text-[28px]"
        />
        <font-awesome-icon v-else-if="icon == 'school'" :icon="['fas', 'graduation-cap']" class="text-[28px]" />
        <font-awesome-icon v-else :icon="['fas', 'link']" class="text-[28px]" />
      </div>
      <div class="leading-none pl-4">
        <span v-if="isFull">
          <h5 v-html="name" class="file-name md:text-[22px]" ></h5>
        </span>
        <span v-else>
          <span v-if="name && name.length >= 69">
            <el-tooltip
              class="item-tooltip"
              effect="dark"
              popper-class="text-[20px]"
              :content="name"
              placement="top-start"
            >
              <h5
                class=" md:text-[22px]"
                :class="handleWidthWhitespace()"
                v-html="name"
                :alt="name"
              ></h5>
            </el-tooltip>
          </span>
          <h5 class="file-name md:text-[22px] lg:text-[24px] xl:text-[24px]" v-else :class="handleWidthWhitespace()" v-html="name"></h5>
        </span>

        <div class="text-desc" v-html="description"></div>
      </div>
    </div>
    <div>
      <div class="btn-circle">
        <font-awesome-icon
          v-if="icon == 'file' || icon == 'download'"
          :icon="['fas', 'arrow-right']"
          class="transform rotate-90 text-lg"
        />
        <font-awesome-icon
          v-else
          class="text-lg"
          :icon="['fas', 'arrow-right']"
        />
      </div>
    </div>
  </button>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "FileItem",
  props: {
    icon: { type: String, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    url: { type: String, required: true },
    isDisable: { type: Boolean, required: false },
    fileName: { type: String, required: false },
    pathFile: { type: String, required: false },
    isNotHome: { tyep: Boolean, required: true, default: false },
    isFull: { tyep: Boolean, required: false, default: false },
  },
  setup(props, ctx) {
    const txtClass = ref('text-ellipsis overflow-hidden whitespace-nowrap ');
    const onClickButton = (icon) => {
      if (icon !== "download") {
        if (!props.isDisable) {
          if (props.url) {
            window.open(props.url, "_blank");
          } else {
            console.log("page not found");
            // page not found
          }
        } else {
          return;
        }
      } else {
        handleDownloadPDF(icon);
      }
    };
    const handleDownloadPDF = async () => {
      try {
        // Replace 'your-pdf-api-endpoint' with the actual API endpoint for the PDF
        console.log(
          "pathFile ...",
          props.pathFile,
          "file name ...",
          props.fileName
        );
        const response = await fetch(props.pathFile);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Replace 'your-filename.pdf' with the desired file name
        const filename = props.fileName;

        // Create a Blob from the response data
        const blob = await response.blob();

        // Create a download link
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        // Append the link to the document and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    };
    const handleWidthWhitespace = ()=>{
      return `${txtClass.value} ${props.isNotHome ? 'w-[259px] ' : 'md:w-[250px]  '}`

    }
    return {
      onClickButton,
      handleWidthWhitespace,
    };
  },
});
</script>
<style>
.item-tooltip {
  font-size: 2rem;
}
.el-popper {
  font-size: 1rem;
}
.el-alert {
  font-size: 1rem;
}
</style>
<style lang="scss" scoped>
@import "../../style/base.scss";
.item-file {
  color: #005bc0;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  // opacity: 0.5;

  text-align: left;
  .icon-item {
    // color: #787878;
    color: #005bc0;
    font-size: 1.25rem;
  }
  .file-name {
    @include mobile{
      font-size: 1.5rem;
      width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .text-desc {
    // color: #787878;
    color: #005bc0;
    font-size: 18px;
  }
  &:nth-child(even) {
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 0.2) 5.41%,
      rgba(239, 245, 249, 0.2) 96.08%
    );
  }

  .btn-circle {
    cursor: pointer;
    border-radius: 100%;
    padding: 15px 20px;
    background-color: #f9fafb;

    svg {
      color: #0874d9;
    }
  }

  &:hover {
    // background-color: #E5F1FB;
    // border: 1px solid #E5F1FB;
    .icon-item {
      transform: scale(1.25);
      color: #005bc0;
    }
    h5 {
      color: #005bc0;
    }
    .text-desc {
      color: #005bc0;
    }
    .btn-circle {
      background-color: #2e3191;
      svg {
        color: white;
      }
    }
  }

  &.disabled {
    .icon-item {
      color: #787878;
    }
    h5 {
      color: #787878;
    }
    .text-desc {
      color: #787878;
    }
    .btn-circle {
      background-color: white;
      svg {
        color: #787878;
      }
      &:hover {
        .btn-circle {
          background-color: white;
          svg {
            color: #787878;
          }
        }
      }
    }
  }
}
</style>
