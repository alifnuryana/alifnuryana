<template>
  <header class="py-6 px-6">
    <div class="flex justify-start items-center">
      <nav>
        <ul class="flex list-none m-0 p-0 gap-4 items-center">
          <li>
            <NuxtLink to="/">
              <img
                src="/digigarden2025.png"
                alt="home"
                class="h-6"
              >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/posts"
              class="text-sm"
            >posts</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/me"
              class="text-sm"
            >me</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
