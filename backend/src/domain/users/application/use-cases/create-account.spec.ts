import { describe, it } from "vitest";

import { CreateAccountUseCase } from "./create-account";
import { 
  InMemoryUsersRepository 
} from "../../../../../tests/repositories/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: CreateAccountUseCase;

function generateMock() {
  const { name, email, password } = { 
    name: "Guilherme", 
    email: "guilherme@email.com", 
    password: "123" 
  };

  return { name, email, password };
}

const { name, email, password } = generateMock();

describe("Create Account", () => {
  beforeEach(async () => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    sut = new CreateAccountUseCase(inMemoryUsersRepository);
  });

  it("should be able to create account", async () => {
    const expected = undefined;
    await sut.execute({
      name,
      email,
      password
    });

    expect(expected).toBeUndefined();
  });

  it("should not be able to create because email already exist", async () => {
    const expected = "Email already in use!";
    let result;

    try {
      result = await sut.execute({
        name,
        email,
        password,
      });

      result = await sut.execute({
        name,
        email,
        password,
      });
    } catch (error: any) {
      result = error;

      expect(expected).toBe(result.message);
    }
  });
});
