<template>
  <svg class="icon">
    <use :xlink:href="'#'+name" />
  </svg>
</template>

<script lang="ts">
// eslint-disable-next-line prefer-const
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().forEach(requireContext);
};
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {
  props: ["name"],
   name: "Icon"
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>