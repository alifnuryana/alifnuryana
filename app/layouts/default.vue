<template>
  <div class="max-w-4xl mx-auto p-8">
    <header class="flex flex-col gap-5">
      <AppBrand />
      <AppNavigation />
    </header>

    <main class="py-10">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
