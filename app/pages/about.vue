<template>
  <div class="font-mono space-y-8">
    <h1 class="text-terminal-amber border-b-2 border-terminal-amber inline-block mb-8">
      ./SYSTEM/USER/BIO
    </h1>

    <div class="grid md:grid-cols-[200px_1fr] gap-8 items-start">
      <div class="relative group border border-terminal-green p-2 bg-terminal-green/5">
        <img
          src="/cats.png"
          alt="local_network_entities"
          class="w-full grayscale brightness-75 group-hover:brightness-100 transition-all"
        >
        <div class="text-[10px] text-center mt-2 opacity-60">
          IMG_SOURCE: cats.png
        </div>
      </div>

      <div class="space-y-4">
        <p>
          <span class="text-terminal-amber font-bold">> IDENTITY:</span>
          Digital Gardener / Code Architect
        </p>
        <p>
          I am a digital inhabitant who thrives on clean code and nostalgic interfaces.
          This instance serves as a central repo for my thoughts and personal metadata.
        </p>
      </div>
    </div>

    <section>
      <h2 class="text-terminal-amber border-b border-terminal-amber/30 pb-2 mb-4">
        01_CORE_INTERESTS.EXE
      </h2>
      <ul class="space-y-2">
        <li>[X] FULLSTACK_WEB_DEVELOPMENT</li>
        <li>[X] PIXEL_ART_RECONSTRUCTION</li>
        <li>[ ] HORTICULTURAL_MAINTENANCE (OFFLINE_MODE)</li>
      </ul>
    </section>

    <section>
      <h2 class="text-terminal-amber border-b border-terminal-amber/30 pb-2 mb-4">
        02_CONNECTION_PROTOCOLS
      </h2>
      <p>
        ESTABLISH_CONNECTION via
        <a
          href="https://github.com/danapixels"
          target="_blank"
          class="text-terminal-green hover:bg-terminal-green hover:text-terminal-bg px-1 no-underline"
        >GITHUB_REMOTE</a> or
        direct <a
          href="mailto:hello@example.com"
          class="text-terminal-green hover:bg-terminal-green hover:text-terminal-bg px-1 no-underline"
        >EMAIL_UPLINK</a>.
      </p>
    </section>
  </div>
</template>
