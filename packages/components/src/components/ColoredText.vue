<template>
  <span :style="{ color }" class="test">
    <slot />
  </span>
</template>

<script setup>
import { computed } from "vue";
import "./styles.css";

const props = defineProps({
  theme: {
    type: String,
    default: "light",
  },
  color: {
    type: String,
    default: "blue",
  },
});

const colors = {
  blue: {
    name: "blue",
    isVar: false,
  },
  accentBlue: {
    name: "--accent-blue",
    isVar: true,
  },
  white: {
    name: "white",
    isVar: false,
  },
  dark: {
    name: "--primary-dark",
    isVar: true,
  },
};

const color = computed(() => {
  const currentColor = colors[props.color];
  return currentColor.isVar
    ? `var(${currentColor.name}, white)`
    : currentColor.name;
});
</script>

<style scoped>
.light-blue {
  color: var(--blue-light);
}
.white {
  color: var(white);
}
.black {
  color: var(--primary-dark);
}
/* Apply styles to slot */
</style>
