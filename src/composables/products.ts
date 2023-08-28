import { Product } from "../types/products";
import useApi from "./api";
import { Ref, ref } from "vue";

export type UsableProducts = Promise<{ products: Ref<Product[] | undefined> }>;

export default async function useProducts(): UsableProducts {
  const { response: products, request } = useApi<Product[]>(
    "https://ecomm-products.modus.workers.dev/"
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { products };
}
