<script setup>
import { computed, onMounted } from "vue";
import CommonPlus from "@/common/CommonPlus.vue";
import { useItemStore } from "@/features/home/domain/stores/item/index.ts";

const store = useItemStore();

const products = computed(() => store.itemAll);

onMounted(async () => {
  await store.fetchItemAll();
  console.log("Loaded products:", products.value);
});
</script>

<template>
  <div class="relative">
    <div
      class="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
    >
      <!-- Карточки продуктов -->
      <div
        v-for="product in products"
        :key="product.id"
        class="relative bg-white border border-gray-200 rounded-lg shadow-md flex-none w-64 h-80"
      >
        <!--        <img-->
        <!--          :src="product.image"-->
        <!--          :alt="product.name"-->
        <!--          class="w-full h-40 object-cover rounded-t-lg"-->
        <!--        />-->
        <div class="p-4 flex flex-col h-full">
          <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>
          <p class="text-gray-700 mb-4"></p>
          <div class="flex items-center gap-3">
            <common-plus
              :price="product.price"
              :productId="product.id"
              :quantity="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительная стилизация для прокрутки */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
}

.scrollbar-track-gray-100::-webkit-scrollbar-track {
  background-color: #f3f4f6;
}
</style>
