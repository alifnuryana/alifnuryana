<template>
  <div class="space-y-8">
    <section>
      <h1>welcome to my digi-garden</h1>
      <p>
        Hi! I'm a dummy inhabitant of this digital garden. This is a replication of the
        <a
          href="https://github.com/danapixels/digio-theme"
          target="_blank"
        >Digio theme</a>
        in Nuxt.
      </p>
      <div class="flex items-center gap-4 py-4">
        <img
          src="/portrait.png"
          alt="portrait"
          class="w-24 h-24 rounded-full border-2 border-white"
        >
        <div>
          <p class="font-bold underline">
            Status:
          </p>
          <p>
            Migrating to Nuxt... <img
              src="/status.png"
              alt="status"
              class="inline h-4"
            >
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="flex items-center gap-2 mb-4">
        <img
          src="/recent-work.png"
          alt="recent-work"
        >
      </div>
      <div class="grid lg:grid-cols-2 gap-4">
        <PostCard
          to="/posts/hello-world"
          title="Hello World"
          teaser="This is a dummy post to test the layout and styles."
          icon="/writing.png"
        />
        <PostCard
          to="/posts/second-post"
          title="Second Post"
          teaser="Another post to see how the grid looks with multiple items."
          icon="/bubble.png"
        />
      </div>
    </section>

    <section>
      <h2>Curiosities</h2>
      <ul>
        <li>
          Exploring Nuxt 3 <img
            src="/sparkle.png"
            alt="sparkle"
            class="inline h-4"
          >
        </li>
        <li>
          Learning Tailwind CSS <img
            src="/sparkle.png"
            alt="sparkle"
            class="inline h-4"
          >
        </li>
        <li>
          Replicating Retro Aesthetics <img
            src="/sparkle.png"
            alt="sparkle"
            class="inline h-4"
          >
        </li>
      </ul>
    </section>
  </div>
</template>
