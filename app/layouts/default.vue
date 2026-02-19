<template>
  <div>
    <TheHeader />
    <div class="flex justify-center">
      <img
        src="/border-home1.png"
        alt="border-home1"
      >
    </div>
    <main>
      <div class="mx-auto w-full max-w-4xl px-4 py-6">
        <slot />
      </div>
    </main>
    <div class="flex justify-center">
      <img
        src="/border-home1.png"
        alt="border-home1"
      >
    </div>
    <TheFooter />
  </div>
</template>
