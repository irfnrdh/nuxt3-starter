<template>
    <div>
        <UiNavbar>
            <UiContainer class="flex h-14 items-center justify-between ">
                <p class="font-semibold">Starter</p>
                <nav class="hidden items-center gap-5 sm:flex">
                    <!-- <NuxtLink class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        v-for="l in ['Home', 'auth/login']" :key="l" to="/">{{ l }}</NuxtLink> -->

                        <NuxtLink class="text-sm text-muted-foreground transition-colors hover:text-foreground"  to="/">Home</NuxtLink>
                        <NuxtLink class="text-sm text-muted-foreground transition-colors hover:text-foreground"  to="/auth/login">Login</NuxtLink>
                </nav>
            </UiContainer>
        </UiNavbar>
    </div>
</template>

<script setup></script>
