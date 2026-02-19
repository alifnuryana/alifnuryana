<template>
  <div class="bg-terminal-bg min-h-screen text-terminal-green selection:bg-terminal-green selection:text-terminal-bg">
    <TerminalWrapper>
      <TheHeader />
      <main class="py-4">
        <slot />
      </main>
      <TheFooter />
    </TerminalWrapper>
  </div>
</template>
