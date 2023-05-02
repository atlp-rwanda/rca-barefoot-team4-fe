export type TRegisterUser = {
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

export type TLogin = {
  email: string;
  password: string;
};
