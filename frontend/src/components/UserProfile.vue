<template >
    <div v-if="user" class="flex justify-center items-center h-screen">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-5xl mb-10">BIENVENIDO {{ user.name }}</h1>
            <div class="grid grid-cols-2 gap-4">
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-700">Nombre: {{ user.name }}</p>
                </div>
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-700">Apellido: {{ user.lastname }}</p>
                </div>
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-700">Teléfono: {{ user.phone }}</p>
                </div>
                <div class="mb-6">
                    <p class="text-sm font-medium text-gray-700">Email: {{ user.email }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 class="text-6xl font-bold">BIENVENIDO</h1>
        <p class="text-lg font-semibold text-gray-700">Por favor ingrese con su cuenta o registre una nueva</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { User } from '../models/User';
import userService from '../services/userService';

const user = ref<User | null>({
    name: '',
    lastname: '',
    phone: '',
    email: ''
});

onMounted(() => {
    user.value = userService.getUser();
});
</script>

<style scoped></style>