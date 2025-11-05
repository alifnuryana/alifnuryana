<template>
  <!-- TODO: fix add padding in scroll -->
  <div class="flex gap-3 font-mono overflow-x-auto">
    <NuxtLink
      to="/about"
      class="underline"
      active-class="font-bold"
    >
      /tentang
    </NuxtLink>
    <NuxtLink
      to="/uses"
      class="underline"
      active-class="font-bold"
    >
      /menggunakan
    </NuxtLink>
    <NuxtLink
      to="/projects"
      class="underline"
      active-class="font-bold"
    >
      /proyek
    </NuxtLink>
    <NuxtLink
      to="/posts"
      class="underline"
      active-class="font-bold"
    >
      /tulisan
    </NuxtLink>
    <NuxtLink
      to="/contact"
      class="underline"
      active-class="font-bold"
    >
      /kontak
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
