import mainServer from "./api_main_server";

class userApi {
  public createUser = async (body: {
    name: string;
    email: string;
    cpf: string;
  }) => {
    try {
      await mainServer.post("/user/new-user", body);
      return true;
    } catch (error) {
      return false;
    }
  };

  public updateUser = async (body: {
    name: string;
    email: string;
    cpf: string;
  }) => {
    try {
      await mainServer.put("/user/update-user", body);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default new userApi();
