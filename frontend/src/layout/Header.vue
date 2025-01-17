<template>
    <header class="bg-gray-800 py-4 px-8">
        <nav class="flex justify-between items-center w-full">
            <router-link to="/" class="text-white text-lg font-bold">Home</router-link>
            <div v-if="!isLogged">
                <router-link to="/register" class="text-white text-lg font-bold ml-4">Registrarse</router-link>
                <router-link to="/login" class="text-white text-lg font-bold ml-4">Ingresar</router-link>
            </div>
            <div v-else>
                <button @click="logout" class="text-white text-lg font-bold ml-4">Salir</button>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userService from '../services/userService';

const isLogged = ref(false);

onMounted(() => {
    isLogged.value = userService.getUser() !== null;
});

const logout = () => {
    userService.logout();
    isLogged.value = false;
};
</script>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
}

nav a:hover {
    color: #ccc;
}
</style>