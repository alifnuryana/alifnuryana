<template>
  <div>Under Construction!</div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index-page', () => {
  return queryCollection('pages').path('/').first()
})

if (!page.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})
</script>
