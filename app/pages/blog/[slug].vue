<template>
  <article class="font-mono max-w-3xl mx-auto">
    <header class="mb-12 border-b border-terminal-green-dim pb-4">
      <div class="text-xs text-terminal-amber mb-2 uppercase tracking-tighter">
        ROOT > BLOG > {{ slug.replace(/-/g, '_').toUpperCase() }}
      </div>
      <h1 class="text-3xl border-none shadow-none mb-2">
        {{ title }}
      </h1>
      <p class="text-xs opacity-60">
        TIMESTAMP: {{ date }} | AUTHOR: ALIF_NURYANA
      </p>
    </header>

    <div class="my-8 relative">
      <img
        v-if="heroImage"
        :src="heroImage"
        alt=""
        class="w-full h-auto border border-terminal-green-dim grayscale blur-[1px] opacity-80"
      >
      <div class="absolute inset-0 bg-terminal-green/5 pointer-events-none" />
    </div>

    <div class="content space-y-6 leading-relaxed">
      <p>
        This is a dummy blog post content for <strong>{{ title }}</strong>.
        It demonstrates how the layout looks with text, images, and other elements.
      </p>

      <blockquote class="border-l-4 border-terminal-amber bg-terminal-amber/5 p-4 italic text-terminal-amber">
        "The digital garden is a metaphor for a personal, non-linear, and public thinking space."
      </blockquote>

      <h2 class="text-terminal-amber mt-12 mb-4 border-b border-terminal-amber/20">
        01_SECTION_ONE
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <h2 class="text-terminal-amber mt-12 mb-4 border-b border-terminal-amber/20">
        02_SECTION_TWO
      </h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>

    <hr class="mt-16 opacity-30">

    <div class="mt-8">
      <NuxtLink
        to="/blog"
        class="text-terminal-green hover:bg-terminal-green hover:text-terminal-bg px-2 no-underline"
      >
        [ RETURN_TO_LOGS ]
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
const date = '2024-02-19'
const heroImage = '/dislikes.png' // Just a dummy image from static
</script>
