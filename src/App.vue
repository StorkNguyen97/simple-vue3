<script setup lang="ts">
import Products from "./components/Products.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Products />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
