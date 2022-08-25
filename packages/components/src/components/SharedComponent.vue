<template>
  <div class="own-container">
    <h1>Shared component works in {{ parentComponentName }}</h1>
  </div>
</template>

<script setup>
defineProps({
  parentComponentName: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.own-container {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
}
h1 {
  color: #333;
  font-size: 1.5rem;
  margin: 0;
}
</style>
