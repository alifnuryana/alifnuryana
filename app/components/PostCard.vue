<template>
  <NuxtLink
    :to="to"
    class="not-prose block relative cursor-pointer flex flex-col space-y-4 rounded-lg border border-white p-6 transition-all duration-150 hover:border-pink-300 group focus:outline-none focus:ring-2 focus:ring-pink-300"
  >
    <h3 class="font-semibold flex items-center gap-2">
      <img
        v-if="icon"
        :src="icon"
        alt=""
      >
      {{ title }}
    </h3>
    <p v-if="teaser"><em>{{ teaser }}</em></p>
    <span class="self-start text-sm text-white underline">
      Read more →
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  teaser?: string
  icon?: string
}>()
</script>
