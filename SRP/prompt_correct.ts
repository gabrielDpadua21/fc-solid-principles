class EmailSender {
    private emailService: EmailService;
  
    constructor(emailService: EmailService) {
      this.emailService = emailService;
    }
  
    public sendEmail(to: string, subject: string, body: string): void {
      this.emailService.send(to, subject, body);
    }
  }
  
  class EmailService {
    public send(to: string, subject: string, body: string): void {
      console.log(`Sending email to ${to} with subject "${subject}" and body: ${body}`);
    }
  }
  