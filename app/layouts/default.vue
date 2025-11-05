<template>
  <div class="max-w-4xl mx-auto p-8">
    <header class="flex flex-col gap-5">
      <div class="flex items-start justify-between">
        <AppBrand />
        <UColorModeButton />
      </div>
      <AppNavigation />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
