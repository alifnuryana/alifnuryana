<template>
  <div class="crt-screen min-h-screen border-4 border-gray-800 rounded-lg shadow-2xl relative bg-terminal-bg m-2 lg:m-4 flex flex-col">
    <div class="scanline" />

    <!-- Terminal Title Bar -->
    <div class="bg-gray-800 text-gray-400 px-4 py-1 flex justify-between items-center text-xs uppercase tracking-widest border-b border-gray-700 select-none">
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/50" />
        <div class="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div class="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div>Alif Nuryana - Terminal Session</div>
      <div class="w-12" />
    </div>

    <!-- Terminal Content -->
    <div class="flex-1 overflow-auto p-4 lg:p-8 font-mono relative z-10">
      <div class="typewriter">
        <slot />
      </div>
      <div class="mt-8 flex items-center">
        <TerminalPrompt />
        <span class="terminal-cursor" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.typewriter {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
