<template>
  <button
    class="flex w-full justify-between items-center item-file"
    :class="[
      isDisable
        ? 'cursor-not-allowed disabled:opacity-50 disabled'
        : 'cursor-pointer hover:shadow-lg ',
    ]"
    :disabled="isDisable"
    @click="onClickButton(icon,fileName)"
  >
    <div class="flex items-center">
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
        <font-awesome-icon v-else :icon="['fas', 'link']" class="text-[28px]" />
      </div>
      <div class="leading-none pl-4">
        <h5 v-html="name"></h5>
        <div class="text-desc" v-html="description"></div>
      </div>
    </div>
    <div>
      <div class="btn-circle">
        <font-awesome-icon
          v-if="icon == 'file' || icon == 'download' "
          :icon="['fas', 'download']"
          class="text-[20px]"
        />
        <font-awesome-icon
          v-else
          :icon="['fas', 'arrow-right']"
          class="text-[20px]"
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
    fileName: {type: String, required: false},
    pathFile: {type: String, required: false}
  },
  setup(props, ctx) {
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
        handleDownloadPDF(icon)
      }
    };
    const handleDownloadPDF = async () => {
      try {
        // Replace 'your-pdf-api-endpoint' with the actual API endpoint for the PDF
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
    return {
      onClickButton,
    };
  },
});
</script>

<style lang="scss" scoped>
.item-file {
  color: #343443;
  padding: 0.75rem 2rem;
  border-radius: 10px;

  text-align: left;
  .icon-item {
    color: #787878;
  }
  .text-desc {
    color: #787878;
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
    border-radius: 50%;
    padding: 12px 15px;
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
