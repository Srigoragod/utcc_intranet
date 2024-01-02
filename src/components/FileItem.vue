<template>
  <div
    class="flex justify-between items-center item-file hover:shadow-lg"
  >
    <div class="flex items-center">
      <div class="icon-item">
        <font-awesome-icon
          v-if="icon == 'file'"
          :icon="['fas', 'file-pdf']"
          class="text-[28px]"
        />
        <font-awesome-icon v-else-if="icon == 'word'" :icon="['fas', 'file-word']"  class="text-[28px]" />
        <font-awesome-icon v-else :icon="['fas', 'link']" class="text-[28px]" />
     
      </div>
      <div class="leading-none pl-4">
        <h5 v-html="name"></h5>
        <div class="text-desc" v-html="description"></div>
      </div>
    </div>
    <div>
      <button class="btn-circle"  >
        <font-awesome-icon
          v-if="icon == 'file'"
          :icon="['fas', 'download']"
          class="text-[20px]"
        />
        <font-awesome-icon
          v-else
          :icon="['fas', 'arrow-right']"
          class="text-[20px]"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "FileItem",
  props: {
    icon: { type: String, required: false },
    name:{ type: String, required: false },
    description:{ type: String, required: false }
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.item-file {
  color: #343443;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  
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

  button {
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
      color: #005bc0;
    }
    h5 {
      color: #005bc0;
    }
    .text-desc {
      color: #005bc0;
    }
    button {
      background-color: #2e3191;
      svg {
        color: white;
      }
    }
  }
}
</style>
