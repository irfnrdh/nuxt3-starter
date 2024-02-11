<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="h-screen  flex items-center justify-center flex-col">
    
    <h2 class="text-8xl mb-3 font-semibold">{{ error.statusCode }}</h2>
    <p class="mb-5">Halaman yang anda tuju tidak ditemukan!</p>
    <UiButton @click="handleError" variant="outline" >Kembali</UiButton>
  </div>
</template>
