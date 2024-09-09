import axios from "axios";
import { CartRepository } from "../../domain/repository/cart_repository";

export class CartNetworkRepository extends CartRepository {
  async getCart(): Promise<Cart_Item[]> {
    try {
      const response = await axios.get<Cart_Item[]>(
        "http://89.110.125.61:3000/api/cart",
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch items");
    }
  }

  async postCart(productId: number, quantity: number): Promise<Cart_Item> {
    try {
      const response = await axios.post("http://89.110.125.61:3000/api/cart", {
        productId,
        quantity,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  }
}
