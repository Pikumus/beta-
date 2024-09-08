import { CatalogRepository } from "../features/home/domain/repository/catalog_repository";
import { CartNetworkRepository } from "../features/cart/data/repository/cart_network_repository";
import { CartRepository } from "../features/cart/domain/repository/cart_repository";
import { CatalogNetworkRepository } from "../features/home/data/repository/catalog_network_repository";

class DI {
  catalogRepository: CatalogRepository = <CatalogRepository>(
    new CatalogNetworkRepository()
  );
  cartRepository: CartRepository = <CartRepository>new CartNetworkRepository();
}

export const di = new DI();
