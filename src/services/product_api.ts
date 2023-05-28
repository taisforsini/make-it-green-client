import mainServer from "./api_main_server";

class productApi {
  public getProducts = async () => {
    try {
      const res = await mainServer.get("/product");
      return res.data;
    } catch (error) {
      return false;
    }
  };
}

export default new productApi();
