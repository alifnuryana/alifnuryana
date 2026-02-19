<template>
  <header class="py-4 font-mono">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <NuxtLink
        to="/"
        class="text-terminal-amber font-bold text-lg hover:bg-terminal-amber hover:text-terminal-bg px-2 no-underline"
      >
        [ ALIF_NURYANA_OS_V1.0 ]
      </NuxtLink>
      <nav>
        <ul class="flex flex-wrap list-none m-0 p-0 gap-4 text-sm">
          <li
            v-for="item in navItems"
            :key="item.path"
          >
            <NuxtLink
              :to="item.path"
              class="hover:bg-terminal-green hover:text-terminal-bg px-1 no-underline"
            >
              ./{{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navItems = [
  { path: '/about', label: 'about' },
  { path: '/blog', label: 'blog' },
  { path: '/project', label: 'projects' },
  { path: '/contact', label: 'contact' },
]
</script>
