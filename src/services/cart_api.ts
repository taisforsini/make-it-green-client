import mainServer from "./api_main_server";

class cartApi {
  public createCart = async (body: {
    cpf: string;
    quantity: number;
    productName: string;
  }) => {
    try {
      const res = await mainServer.post("/cart/", body);
      return res.data;
    } catch (error) {
      return false;
    }
  };
}

export default new cartApi();
