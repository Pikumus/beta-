export abstract class CatalogRepository {
  abstract getById(id: number): Promise<Item>;
  abstract getAllProducts(): Promise<Item[]>;
}
