<template>
  <div>
    <h1>About Me</h1>
    <div class="flex justify-center my-8">
      <img
        src="/cats.png"
        alt="cats"
        class="max-w-xs"
      >
    </div>
    <p>
      I am a digital gardener who loves clean code and nostalgic designs.
      This page is a placeholder for my personal information.
    </p>

    <h2>Interests</h2>
    <ul>
      <li>
        <input
          type="checkbox"
          checked
          disabled
        > Web Development
      </li>
      <li>
        <input
          type="checkbox"
          checked
          disabled
        > Pixel Art
      </li>
      <li>
        <input
          type="checkbox"
          disabled
        > Gardening (the real kind)
      </li>
    </ul>

    <h2>Contact</h2>
    <p>
      Find me on
      <a
        href="https://github.com/danapixels"
        target="_blank"
      >GitHub</a> or
      reach out via <a href="mailto:hello@example.com">email</a>.
    </p>
  </div>
</template>
