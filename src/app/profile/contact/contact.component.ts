import { Component,ViewChild, ElementRef,Renderer2  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('successEmailModal') successEmailModal!: ElementRef;

  model: any = {};
  messageContent = {
    name:'',
    email: '',
    subject: '',
    message: '',
  };  
  constructor(private http:HttpClient,private renderer: Renderer2){}
  ngAfterViewInit() {
    if (this.successEmailModal) {
      // Access the nativeElement property only if successModal is not null
      this.successEmailModal.nativeElement.click();
    }  }
  ngOnInit() {
     }    

    messageAjay() {
      console.log(`Message ${this.messageContent}`);
      this.http.post('http://localhost:5000/message-ajay', this.messageContent,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'text' // Specify the expected response type as 'text'
      }).subscribe({
        next: response => console.log(response),
        error: error => {
          console.error('An error occurred:', error);
        },
        complete: () => {
        console.log('Completed');
        this.openModal();
        this.messageContent = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }
      });
      
    }
    
  openModal() {
    if (this.successEmailModal) {
      this.renderer.addClass(this.successEmailModal.nativeElement, 'show');
      this.renderer.setStyle(this.successEmailModal.nativeElement, 'display', 'block');
      setTimeout(() => {
        this.closeModal();
      }, 3000);
    }
  }

  closeModal() {
    if (this.successEmailModal) {
      this.renderer.removeClass(this.successEmailModal.nativeElement, 'show');
      this.renderer.setStyle(this.successEmailModal.nativeElement, 'display', 'none');
    }
  }
}
