import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";

import app from "@/app";

const makeMock = () => {
  return {
    email: "guilherme@email.com",
    password: "123"
  };
}

describe("Authenticate", () => {
  beforeAll(() => {
    app.server.listen(3333, () => {});
  });

  it("should be able to authenticate", async () => {
    // Arrange
    const { email, password } = makeMock();

    // Act
    const response = await request(app.server)
      .post("/api/auth/sign-in")
      .send({ email, password });

    // Assert
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      token: expect.any(String)
    });
  });
});
