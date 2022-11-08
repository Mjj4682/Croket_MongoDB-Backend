export interface IUser {
  name: string;
  email: string;
  password: string;
  date: Date;
}

export interface createUser {
  name: string;
  email: string;
  password: string;
  date?: Date;
}
