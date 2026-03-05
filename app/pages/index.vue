<script lang="ts" setup>
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('pages').path('/').first()
})

if (!page.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}

useSeoMeta({
  title: page.value.seo.title,
  description: page.value.seo.description,
})
</script>

<template>
  <div>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </div>
</template>
