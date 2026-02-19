<template>
  <div class="font-mono">
    <h1 class="text-terminal-amber border-b-2 border-terminal-amber inline-block mb-8">
      ./BIN/EXECUTABLES
    </h1>
    <p class="mb-8">
      SCANNING REPOSITORIES FOR ACTIVE PROJECTS...
    </p>

    <div class="grid lg:grid-cols-2 gap-4">
      <PostCard
        to="/"
        title="PROJ_COMING_SOON"
        teaser="Compiling project metadata. Connection status: PENDING."
        icon="loading"
      />
    </div>
  </div>
</template>
