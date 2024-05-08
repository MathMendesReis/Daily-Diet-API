class Email {
    private readonly email: string;
  
    constructor(email: string) {
      if (!this.validateEmail(email)) {
        throw new Error('Invalid email');
      }
  
      this.email = email;
    }
  
    private validateEmail(email: string): boolean {
      // Implemente a validação do email aqui
      return true;
    }
  
    getEmail(): string {
      return this.email;
    }
  }