export abstract class CartRepository {
  abstract getCart(): Promise<Cart_Item[]>;

  abstract addCart(productId: number, quantity: number): Promise<Cart_Item>;
}
