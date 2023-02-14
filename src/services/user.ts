import action from "../helpers/rest-client";

export class ErrorUser extends Error {}

class User {
  public update({ ...rest }) {
    return action
      .Patch({
        url: `/user`,
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
        url: "/user",
      })
      .then((response) => {
        return { response };
      })
      .catch((error) => {
        return { error };
      });
  }
}

const user = new User();
export default user;
