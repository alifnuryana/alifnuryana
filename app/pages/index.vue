<template>
  <div class="space-y-12 font-mono">
    <section class="space-y-4">
      <div class="flex flex-col gap-1 text-terminal-amber">
        <p class="m-0">
          Initializing system components...
        </p>
        <p class="m-0">
          [ OK ] Kernel loaded
        </p>
        <p class="m-0">
          [ OK ] Network interface active
        </p>
        <p class="m-0">
          [ OK ] Personal data decrypted
        </p>
      </div>

      <h1 class="mt-8">
        WELCOME TO ALIF_NURYANA terminal.io
      </h1>

      <div class="grid md:grid-cols-[150px_1fr] gap-8 items-start py-4">
        <div class="relative group">
          <img
            src="/portrait.png"
            alt="user_portrait"
            class="w-full grayscale contrast-125 border-2 border-terminal-green brightness-75 group-hover:brightness-100 transition-all"
          >
          <div class="absolute inset-0 bg-terminal-green/10 pointer-events-none" />
        </div>

        <div class="space-y-4">
          <p>
            <span class="text-terminal-amber font-bold">> WHOAMI:</span>
            Software Engineer / Digital Inhabitant
          </p>
          <p>
            <span class="text-terminal-amber font-bold">> LOCATION:</span>
            The Digital Garden (Nuxt Implementation)
          </p>
          <p>
            <span class="text-terminal-amber font-bold">> STATUS:</span>
            <span class="animate-pulse">RUNNING_MIGRATION_TASKS...</span>
          </p>
          <p class="text-sm opacity-80 italic">
            "Replicating retro aesthetics in high-fidelity terminal sessions."
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-terminal-amber border-b border-terminal-amber/30 pb-2 mb-6">
        RECENT_LOGS.EXE
      </h2>
      <div class="grid lg:grid-cols-2 gap-6">
        <PostCard
          to="/blog/hello-world"
          title="LOG: Hello World"
          teaser="System bootstrap and initial testing protocols."
          class="border border-terminal-green-dim p-4 hover:border-terminal-green transition-colors"
        />
        <PostCard
          to="/blog/second-post"
          title="LOG: Second Post"
          teaser="Analyzing grid layout stability and data flow."
          class="border border-terminal-green-dim p-4 hover:border-terminal-green transition-colors"
        />
      </div>
    </section>

    <section>
      <h2 class="text-terminal-amber border-b border-terminal-amber/30 pb-2 mb-4">
        SYSTEM_CAPABILITIES.CFG
      </h2>
      <ul class="space-y-2">
        <li>VUE_FRAMEWORK :: NUXT_3_STABLE</li>
        <li>STYLING_ENGINE :: TAILWIND_CSS_V4</li>
        <li>AESTHETIC_MODULE :: RETRO_TERMINAL_V1.0</li>
        <li>LEARNING_SUBROUTINE :: ACTIVE</li>
      </ul>
    </section>
  </div>
</template>
