interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface ISaveUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IUserResponseDTO {
  id: string;
  name: string;
  email: string;
  password?: string;
}

interface IUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;

  createdAt: Date;
  updatedAt?: Date;
  removedAt?: Date;
}

export { ICreateUserDTO, ISaveUserDTO, IUserResponseDTO, IUserDTO };
