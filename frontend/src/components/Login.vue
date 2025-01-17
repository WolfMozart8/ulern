<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <form class="w-1/3 p-6 bg-white rounded-lg shadow-lg" @submit.prevent="loginUser">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Login</h2>

            <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" v-model="user.email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" v-model="user.password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
            </div>
            <div class="flex justify-center">
                <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register</button>
            </div>

        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UserLogin } from '../models/UserLogin';
import userService from '../services/userService';

const user = ref<UserLogin>({
    email: '',
    password: ''
});

// TODO: service?
const loginUser = async () => {
    userService.login(user.value);
};
</script>

<style scoped></style>