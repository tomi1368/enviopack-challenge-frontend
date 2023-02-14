import action from "../helpers/rest-client";

export class ErrorProduct extends Error {}

class Product {
  public update({ _id, ...rest }) {
    return action
      .Patch({
        url: `/products/${_id}`,
        body: rest,
      })
      .then((response) => {
        return { response };
      })
      .catch((error) => {
        return { error };
      });
  }

  public getAll() {
    return action
      .Get({
        url: "/products",
      })
      .then((response) => {
        return { response };
      })
      .catch((error) => {
        return { error };
      });
  }
}

const product = new Product();
export default product;
