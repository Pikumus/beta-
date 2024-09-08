export abstract class CatalogRepository {
  abstract getAllProducts(): Promise<Item[]>;
}
