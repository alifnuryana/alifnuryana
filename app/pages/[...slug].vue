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
const { data: page } = await useAsyncData(`page-${route.path}`, async () => {
  return await queryCollection('content').path(route.path).first()
})
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
defineOgImageComponent('NuxtSeo', {
  title: page.value?.title,
  description: page.value?.description,
})
</script>

<style>

</style>
