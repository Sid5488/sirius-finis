import { Entity } from "@/core/entities/entity";

class Category extends Entity {
  constructor() {
    super();
  }

  public get name(): string {
    return this.name;
  }

  public set name(value: string) {
    this.name = value;
  }

  public get userId(): string {
    return this.userId;
  }

  public set userId(value: string) {
    this.userId = value;
  }
}

export { Category };
