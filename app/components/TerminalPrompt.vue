<template>
  <div class="inline-flex items-center gap-2 font-mono text-terminal-amber">
    <span>{{ username }}@{{ hostname }}:{{ path }}$</span>
  </div>
</template>

<script setup>
defineProps({
  username: { type: String, default: 'alifnuryana' },
  hostname: { type: String, default: 'personal-site' },
  path: { type: String, default: '~' },
})
</script>
