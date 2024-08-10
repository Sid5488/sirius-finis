import { Email } from "./value-object/email";
import { Entity } from "@/core/entities/entity";

class User extends Entity {
  constructor() {
    super();
  }

  public get name(): string {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public set email(email: string) {
    if (!Email.isValid(email)) {
      throw new Error("Invalid email!");
    }

    this.email = email;
  }

  public get email(): string {
    return this.email;
  }

  public get password(): string {
    return this.password;
  }

  public set password(value: string) {
    this.password = value;
  }
}

export { User };
