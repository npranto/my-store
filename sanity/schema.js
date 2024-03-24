import { product } from "./schemaTypes/product";
import { user } from "./schemaTypes/user";
import { order } from "./schemaTypes/order";

export const schema = {
  types: [product, user, order],
};
