class User {
    private name: string;
    private email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public saveToDatabase(): void {
      // Code to save user data to database would go here
    }
  
    public sendEmail(subject: string, body: string): void {
      console.log(`Sending email to ${this.email} with subject "${subject}" and body: ${body}`);
      // Code to actually send the email would go here
    }
  }
  