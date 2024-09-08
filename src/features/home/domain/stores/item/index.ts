import { defineStore } from "pinia";
import { ref } from "vue";
import { di } from "../../../../../di/di";

export const useItemStore = defineStore("homeStore", () => {
  // State
  const itemAll = ref<Item[]>([]); // Начальное значение - пустой массив

  // Getters (если нужны)

  // Setters (если нужны)

  // Actions

  const fetchItemAll = async () => {
    try {
      const charAll = await di.catalogRepository.getAllProducts();
      itemAll.value = charAll;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const postItemProducts = async () => {
    try {
      charItem = await di.catalogRepository.getAllProducts();
    } catch (error) {}
  };

  return {
    itemAll,
    // fetchItemId,
    fetchItemAll,
  };
});
