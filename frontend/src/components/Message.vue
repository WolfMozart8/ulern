<!--! sin usar -->
<template>
    <div class="absolute end-0 w-full" :class="error ? 'bg-red-400' : 'bg-green-300'">
        <p class="text-center font-mono text-2xl">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text?: string
    error?: boolean
}>()
</script>