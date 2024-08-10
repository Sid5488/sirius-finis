interface IAuthDTO {
  email: string;
  password: string;
}

interface IAuthResponseClientDTO {
  id: string;
  name: string;
  email: string;
  
  createdAt: Date;
  updatedAt: Date | null;
  removedAt: Date | null;
}

interface IAuthResponseDTO {
  user: IAuthResponseClientDTO | {};
  token: string;
}

export { IAuthDTO, IAuthResponseDTO };
