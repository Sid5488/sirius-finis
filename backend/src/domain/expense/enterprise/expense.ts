import { Entity } from "@/core/entities/entity";

class Expense extends Entity {
  constructor() {
    super();
  }

  public get title(): number {
    return this.title;
  }

  public set title(value: number) {
    this.title = value;
  }

  public get price(): number {
    return this.price;
  }

  public set price(value: number) {
    this.price = value;
  }

  public get categoryId(): string {
    return this.categoryId;
  }

  public set categoryId(value: string) {
    this.categoryId = value;
  }

  public get userId(): string {
    return this.userId;
  }

  public set userId(value: string) {
    this.userId = value;
  }
}

export { Expense }
