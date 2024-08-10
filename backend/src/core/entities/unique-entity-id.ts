import { randomUUID } from "node:crypto";

class UniqueEntityId {
  private _value: string;

  constructor(value?: string) {
    this._value = value ?? randomUUID();
  }

  toString(): string {
    return this._value;
  }
}

export { UniqueEntityId };
