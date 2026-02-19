<template>
  <article>
    <header class="mb-8">
      <h1>{{ title }}</h1>
      <p class="text-sm italic">
        Published on: {{ date }}
      </p>
    </header>

    <div class="my-8">
      <img
        v-if="heroImage"
        :src="heroImage"
        alt=""
        class="w-full h-auto rounded-lg"
      >
    </div>

    <div class="content">
      <p>
        This is a dummy blog post content for <strong>{{ title }}</strong>.
        It demonstrates how the layout looks with text, images, and other elements.
      </p>

      <blockquote>
        "The digital garden is a metaphor for a personal, non-linear, and public thinking space."
      </blockquote>

      <h2>Section 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <h2>Section 2</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>

    <hr>

    <div class="mt-8">
      <NuxtLink
        to="/posts"
        class="underline"
      >← Back to posts</NuxtLink>
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
