<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useItemCartStore } from "@/features/cart/domain/store/CartItem";

const store = useItemCartStore();
const loading = ref(true);

// Вычисляем количество товаров в корзине
const count = computed(() => store.totalItemsInCart);

// Функция перехода на страницу корзины
function goToCart() {
  window.location.href = "/cart"; // Замените на фактический путь к странице корзины
}

onMounted(async () => {
  loading.value = true; // Включаем индикатор загрузки
  await store.fetchItemCart(); // Загружаем данные корзины при монтировании
  loading.value = false; // Отключаем индикатор загрузки
  console.log("Loaded products:", store.itemCartAll);
});
</script>

<template>
  <button
      @click="goToCart"
      class="relative bg-gray-200 border border-gray-200 rounded-full p-2 hover:bg-white transition-colors duration-200 focus:outline-none"
      aria-label="Корзина"
  >
    <!-- Иконка корзины -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 h-6 text-gray-500"
        fill="currentColor"
    >
      <title>Корзина</title>
      <path
          d="M22 9H17.21L12.83 2.44C12.64 2.16 12.32 2 12 2S11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9M12 4.8L14.8 9H9.2L12 4.8M18.5 19L5.5 19L3.31 11H20.7L18.5 19M12 13C10.9 13 10 13.9 10 15S10.9 17 12 17 14 16.1 14 15 13.1 13 12 13Z"
      />
    </svg>

    <!-- Индикатор количества товаров -->
    <span
        v-if="!loading && count > 0"
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
    >
      {{ count }}
    </span>
  </button>
</template>

<style scoped>
/* Дополнительный стиль для точной настройки, если необходимо */
</style>
