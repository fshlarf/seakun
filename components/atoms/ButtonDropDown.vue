<template>
  <div @click="$emit('onClick')">
    <label v-if="label" for="exampleInputEmail1">{{ label }}</label>
    <div :class="`btn btn-drop ${extendClass}`">
      <span class="truncate">{{ btnText }}</span>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-chevron-down"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    btnText: String,
    extendClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-drop {
  text-align: left;
  border-radius: 0.25rem !important;
  position: relative;
  background-color: white;
  color: rgb(118, 118, 118);
  border: 1px solid #ced4da;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(1.5em + 0.75rem + 4px) !important;
}
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 800px) {
  .btn-drop {
    width: 100%;
  }
}
.full-width {
  width: 100% !important;
}
</style>
