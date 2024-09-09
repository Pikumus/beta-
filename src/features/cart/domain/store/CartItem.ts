import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { di } from "../../../../di/di";

export const useItemCartStore = defineStore("cartStore", () => {
  // State
  const itemCart = ref<Cart_Item[]>([]); // Начальное значение - пустой массив

  // Getters
  const isEmpty = computed(() => itemCart.value.length === 0);

  const totalItemsInCart = computed(() => {
    return itemCart.value.reduce((total, item) => total + item.quantity, 0);
  });

  // Actions
  const fetchItemCart = async () => {
    try {
      const cartItems = await di.cartRepository.getCart();
      itemCart.value = cartItems;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  async function addItemToCart(productId: number, quantity: number) {
    try {
      await di.cartRepository.postCart(productId, quantity);
      await fetchItemCart(); // Обновляем корзину после добавления товара
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  }

  const removeItemFromCart = (itemId: number) => {
    itemCart.value = itemCart.value.filter((item) => item.id !== itemId);
  };

  return {
    fetchItemCart,
    itemCartAll: itemCart,
    isEmpty,
    totalItemsInCart,
    addItemToCart,
    removeItemFromCart,
  };
});
