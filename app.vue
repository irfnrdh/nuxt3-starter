<script lang="ts" setup>
  useSeoMeta({
    ogImage: "/cover.png",
    twitterTitle: "Starter",
    twitterDescription: "Nuxt 3 Starter.",
    twitterImage: "/cover.png",
    twitterCard: "summary_large_image",
  });

  useHead({
    title: "StarterInd - Nuext 3 Starterkit Project",
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/icon.png",
      },
    ],
  });
</script>



<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <UiVueSonner />
    </NuxtLayout>
  </div>
</template>
