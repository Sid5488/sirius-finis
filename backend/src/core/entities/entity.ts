import { UniqueEntityId } from "./unique-entity-id";

class Entity {
  get id(): UniqueEntityId {
    return this.id;
  }

  set id(value: UniqueEntityId) {
    this.id = value;
  }

  get createdAt(): Date {
    return this.createdAt;
  }

  set createdAt(value: Date) {
    this.createdAt = value;
  }

  get updatedAt(): Date {
    return this.updatedAt;
  }

  set updatedAt(value: Date) {
    this.updatedAt = value;
  }

  get removedAt(): Date | null {
    return this.removedAt;
  }

  set removedAt(value: Date) {
    this.removedAt = value;
  }
}

export { Entity };
