import { CatalogRepository } from "../../domain/repository/catalog_repository";
import axios from "axios";

export class CatalogNetworkRepository extends CatalogRepository {
  async getAllProducts(): Promise<Item[]> {
    try {
      const response = await axios.get<Item[]>(
        "http://89.110.125.61:3000/api/products",
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch items");
    }
  }
}
