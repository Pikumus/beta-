<template>
  <div class="flex items-center space-x-2">
    <!-- Кнопка уменьшения -->
    <button
      @click="decrement"
      class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-200"
      aria-label="Уменьшить"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path d="M19 13H5v-2h14v2z" />
      </svg>
    </button>

    <!-- Ценовой блок -->
    <span class="text-xs font-semibold">{{ price }} ₽</span>

    <!-- Кнопка увеличения -->
    <button
      @click="increment"
      class="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-200"
      aria-label="Увеличить"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useItemCartStore } from "@/features/cart/domain/store/CartItem.ts";

// Получаем данные из стора
const store = useItemCartStore();

// Определяем свойства компонента
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

// Локальное состояние для количества
const localQuantity = ref(props.quantity);

// Функция для увеличения количества
function increment() {
  localQuantity.value += 1;
  addToCart();
}

// Функция для уменьшения количества
function decrement() {
  if (localQuantity.value > 1) {
    localQuantity.value -= 1;
    addToCart();
  }
}

// Функция для добавления в корзину
async function addToCart() {
  await store.addItemToCart(props.productId, localQuantity.value);
}
</script>

<style scoped>
/* Дополнительная стилизация, если необходимо */
</style>
