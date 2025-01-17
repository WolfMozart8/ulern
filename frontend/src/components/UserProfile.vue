<template >
    <div v-if="user" class="flex justify-center items-center h-screen bg-gray-100">
        <div class="w-1/3 p-6 bg-white rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Profile</h2>
            <div class="grid grid-cols-2 gap-4">

                <div class="mb-6">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" v-model="user.name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        disabled>
                </div>
                <div class="mb-6">
                    <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
                    <input type="text" name="lastname" id="lastname" v-model="user.lastname"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        disabled>
                </div>
                <div class="mb-6">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="text" name="phone" id="phone" v-model="user.phone"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        disabled>
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" v-model="user.email"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        disabled>
                </div>

            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center h-screen bg-gray-100">
        <p class="text-lg font-semibold text-gray-700">Por favor ingrese con su cuenta o registre una cuenta nueva</p>
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