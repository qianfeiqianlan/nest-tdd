export class User {
  id?: number;
  name: string;
  phone: string;
  public static create(phone: string, name: string): User {
    return {
      phone,
      name,
    };
  }
}
