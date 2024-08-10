class Email {
  private readonly value: string;

  constructor(value: string) {
    if (!Email.isValid(value)) throw new Error("Invalid email.");

    this.value = value;
  }

  public get email(): string {
    return this.value;
  }

  public static isValid(email: string): boolean {
    const regexPattern: string = 
      "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" +
      "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

    return email !== null && email.match(regexPattern) !== null;
  }
}

export { Email };
