import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class contactformComponent implements OnInit {
  // Inicialmente no se ha hecho clic en el input
  isNameInputFocus:boolean = false; 
  isNameInputInit:boolean = false; 

  isEmailInputFocus:boolean = false;
  isEmailInputInit:boolean = false; 

  isSubjectInputFocus:boolean = false; 
  isSubjectInputInit:boolean = false; 

  isMessageInputFocus:boolean = false; 
  isMessageInputInit:boolean = false; 

  // Valor del input inicialmente vacío
  nameInputValue:string = ''; 
  emailInputValue:string = ''; 
  subjectInputValue:string = ''; 
  messageInputValue:string = ''; 

  formStatusMessage:string = ''; // Variable para mostrar el estado del formulario
  contactForm: FormGroup; // Creamos un FormGroup para el formulario
  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicializamos formulario con sus campos y validadores
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {}
  // Función para obtener mensajes de error personalizados
  getErrorMessage(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control && control.errors) {
      const errors = control.errors;
  
      if (errors['required']) {
        return `${controlName} is required`;
      }
      if (errors['minlength']) {
        return `Your ${controlName} must contain more than ${errors['minlength'].requiredLength} characters.`;
      }
      if (errors['maxlength']) {
        return `Your ${controlName} must contain less than ${errors['minlength'].requiredLength} characters.`;
      }
      if (errors['email']) {
        return 'Please enter a valid email or phone number.';
      }
    }
  
    return ''; // Devuelve una cadena vacía si no hay errores
  }

   // Función para manejar el envío del formulario
  async submitForm() {
    if (this.contactForm.valid) {
      const formData = new FormData(); // Creamos un FormData para los datos del formulario
      
      // Agregamos los campos al FormData
      for (const key in this.contactForm.value) {
        if (this.contactForm.value.hasOwnProperty(key)) {
          formData.append(key, this.contactForm.value[key]);
        }
      }

      const headers = new HttpHeaders({
        'Accept': 'application/json' // Definimos el encabezado "Accept" para aceptar JSON
      });

      try {
        // Enviando la solicitud HTTP POST a Formspree
        const response = await firstValueFrom(this.http.post('https://formspree.io/f/mnqkpejd', formData, { headers }));

        if (response) {
          this.formStatusMessage = "Thanks for contacting me, I will reach you as soon as possible!";
          this.contactForm.reset(); // Reiniciamos el formulario
          this.isNameInputInit = false; 
          this.isEmailInputInit = false; 
          this.isSubjectInputInit= false; 
          this.isMessageInputInit = false;
        } else {
          this.formStatusMessage = "Oops! There was a problem, contact me at hello@ramonestol.com";
        }
      } catch (error) {
        this.formStatusMessage = "Oops! There was a problem, contact me at hello@ramonestol.com";
      }
    } else {
      this.isNameInputInit=true;
      this.isEmailInputInit=true;
      this.isSubjectInputInit=true;
      this.isMessageInputInit=true;
      this.formStatusMessage = "Oops! Confirm all the fields";
    }
  }
}
