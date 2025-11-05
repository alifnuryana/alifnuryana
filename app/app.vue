<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtLoadingIndicator
        :height="5"
        color="primary"
      />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
