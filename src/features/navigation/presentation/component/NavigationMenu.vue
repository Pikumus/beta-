<script setup>
import { ref } from "vue";
import SearchBar from "@/features/navigation/presentation/component/SearchBar.vue";
import CartButton from "@/features/cart/presentation/component/CartButton.vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="bg-white min-w-full px-4 py-4 flex items-center justify-between">
    <search-bar />
    <nav class="hidden md:flex space-x-4">
      <cart-button />
    </nav>

    <button class="md:hidden text-2xl" @click="toggleMenu">
      <span :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'">button</span>
    </button>
    <div
      v-if="menuOpen"
      class="md:hidden absolute top-16 left-0 r-16 w-full z-20 h-full bg-gray-600 text-white"
    >
      <nav class="flex flex-col items-center py-4 space-y-2">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Services</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
