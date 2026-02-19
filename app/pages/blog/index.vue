<template>
  <div class="space-y-8">
    <h1 class="flex items-center gap-2">
      <img
        src="/writing.png"
        alt=""
      >
      Writing
    </h1>
    <div class="grid gap-6">
      <PostCard
        to="/blog/hello-world"
        title="Hello World"
        teaser="This is the first dummy post in the collection."
        icon="/writing.png"
      />
      <PostCard
        to="/blog/second-post"
        title="Second Post"
        teaser="Testing how the list looks with more than one item."
        icon="/bubble.png"
      />
    </div>
  </div>
</template>
