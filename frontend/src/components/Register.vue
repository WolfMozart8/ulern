<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <form class="w-1/3 p-6 bg-white rounded-lg shadow-lg" @submit.prevent="registerUser">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Register</h2>
            <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" v-model="user.name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
            </div>
            <div class="mb-6">
                <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
                <input type="text" name="lastname" id="lastname" v-model="user.lastname"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
            </div>
            <div class="mb-6">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" name="phone" id="phone" v-model="user.phone"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required>
            </div>
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
import type { UserRegister } from '../models/UserRegister';

const user = ref<UserRegister>({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: ''
});

// TODO: service?
const registerUser = async () => {
    const API_URL = "http://127.0.0.1:8000/api";
    
    
    try { 
        const response = await fetch(`${API_URL}/register`, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(user.value) 
        }); 

        if (!response.ok) { throw new Error('Error en la petición'); } 

        const data = await response.json(); 
        console.log('Usuario registrado:', data); } 

        catch (error) { 
            console.error('Error registrando usuario:', error); 
        }
};
</script>

<style scoped></style>