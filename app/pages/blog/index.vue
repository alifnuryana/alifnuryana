<template>
  <div class="space-y-8 font-mono">
    <h1 class="text-terminal-amber border-b-2 border-terminal-amber inline-block mb-8">
      ./SYSTEM/LOGS/WRITING
    </h1>
    <div class="grid gap-6">
      <PostCard
        to="/blog/hello-world"
        title="LOG_001: Hello World"
        teaser="System bootstrap and initial testing protocols."
        icon="writing"
      />
      <PostCard
        to="/blog/second-post"
        title="LOG_002: Second Post"
        teaser="Analyzing grid layout stability and data flow."
        icon="bubble"
      />
    </div>
  </div>
</template>
