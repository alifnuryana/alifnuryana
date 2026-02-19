<template>
  <NuxtLink
    :to="to"
    class="not-prose relative cursor-pointer flex flex-col space-y-4 border border-terminal-green-dim p-4 transition-all duration-150 hover:border-terminal-green hover:bg-terminal-green/5 group focus:outline-none focus:ring-1 focus:ring-terminal-green font-mono"
  >
    <h3 class="font-bold flex items-center gap-2 text-terminal-green group-hover:text-terminal-amber">
      <span
        v-if="icon"
        class="text-xs"
      >[LOG]</span>
      {{ title }}
    </h3>
    <p
      v-if="teaser"
      class="text-sm opacity-80"
    ><em>{{ teaser }}</em></p>
    <span class="self-start text-xs text-terminal-green underline">
      cat ./{{ title.toLowerCase().replace(/\s+/g, '-') }}.md
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
