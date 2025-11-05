<template>
  <div class="inline-flex gap-1">
    <UButton
      v-for="link in links"
      :key="link.url"
      variant="outline"
      color="neutral"
      :to="link.url"
      :icon="link.icon"
      target="_blank"
      size="lg"
      square
      external
    />
  </div>
</template>

<script lang="ts" setup>
const { links } = useAppConfig()
</script>

<style>

</style>
