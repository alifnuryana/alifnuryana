<template>
  <div class="font-mono space-y-8">
    <h1 class="text-terminal-amber border-b-2 border-terminal-amber inline-block mb-8">
      ./CONFIG/HARDWARE_SOFTWARE
    </h1>

    <p>
      CURRENT SYSTEM CONFIGURATION AND TOOLING:
    </p>

    <div class="grid md:grid-cols-2 gap-8 mt-8">
      <section class="border border-terminal-green-dim p-4">
        <h2 class="text-terminal-amber border-b border-terminal-amber/20 pb-2 mb-4">
          DEV_ENVIRONMENT
        </h2>
        <ul class="space-y-1">
          <li>IDE: VS_CODE (ADVANCED)</li>
          <li>RUNTIME: NUXT_3 + VUE_3</li>
          <li>ENGINE: TAILWIND_V4</li>
          <li>MANAGER: PNPM_PKGS</li>
        </ul>
      </section>

      <section class="border border-terminal-green-dim p-4">
        <h2 class="text-terminal-amber border-b border-terminal-amber/20 pb-2 mb-4">
          HARDWARE_SPECS
        </h2>
        <ul class="space-y-1">
          <li>INPUT: MECHANICAL_KEYBOARD</li>
          <li>VISUAL: DUAL_HEAD_MONITOR</li>
          <li>OS: LINUX_KERNEL_LATEST</li>
        </ul>
      </section>
    </div>
  </div>
</template>
