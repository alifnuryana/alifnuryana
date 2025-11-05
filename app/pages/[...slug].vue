<template>
  <div>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <div v-else>
      <h1>Page Not Found</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.params.slug}`, async () => {
  return await queryCollection('content').path(route.params.slug).first()
})
</script>

<style>

</style>
