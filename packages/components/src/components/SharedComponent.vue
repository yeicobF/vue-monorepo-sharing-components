<template>
  <h1>Componente compartido funciona en {{ parentComponentName }}</h1>
  <p>Hay cambios para el watcher de Rollup</p>
</template>

<script setup>
const props = defineProps({
  parentComponentName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
