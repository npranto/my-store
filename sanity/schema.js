import { product } from "./schemaTypes/product";
import { user } from "./schemaTypes/user";
import { order } from "./schemaTypes/order";
import { orderItem } from "./schemaTypes/order-item";
import { address } from "./schemaTypes/address";
import { productVariation } from "./schemaTypes/product-variation";
import { store } from "./schemaTypes/store";

export const schema = {
  types: [product, user, order, productVariation, orderItem, address, store],
};
