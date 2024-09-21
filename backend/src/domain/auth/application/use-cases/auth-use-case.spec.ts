import { describe, it } from "vitest";

import { 
  CreateAccountUseCase 
} from "@/domain/users/application/use-cases/create-account";
import { 
  InMemoryUsersRepository 
} from "../../../../../tests/repositories/in-memory-users-repository";

import { AuthUseCase } from "./auth-use-case";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: AuthUseCase;

function generateMock() {
  const { name, email, password } = { 
    name: "Guilherme", 
    email: "guilherme@email.com", 
    password: "123" 
  };

  return { name, email, password };
}

const { name, email, password } = generateMock();

describe("Auth Use Case", () => {
  beforeEach(async () => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    sut = new AuthUseCase(inMemoryUsersRepository);

    const createAccountUseCase = new CreateAccountUseCase(
      inMemoryUsersRepository
    );

    await createAccountUseCase.execute({ name, email, password });
  });

  it("should be able to log in", async () => {
    const { token } = await sut.execute({
      email,
      password
    });

    expect(token).toBeTruthy();
  });

  it("should not be able to log because incorrect email", async () => {
    let result;

    try {
      result = await sut.execute({
        email: "guilherme.sousa@email.com",
        password,
      });
    } catch (error) {
      expect(result).toBeUndefined();
    }
  });

  it("should not be able to log because incorrect password", async () => {
    let result;

    try {
      result = await sut.execute({
        email,
        password: "1234",
      });
    } catch (error) {
      expect(result).toBeUndefined();
    }
  });
});
