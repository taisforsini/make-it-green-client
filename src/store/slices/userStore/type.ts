export type UserStoreType = {
  name: string;
  email: string;
  cpf: string;
};

const userDataInitialState: UserStoreType = {
  name: "",
  email: "",
  cpf: "",
};
export default userDataInitialState;
