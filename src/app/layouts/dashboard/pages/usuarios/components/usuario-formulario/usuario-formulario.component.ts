import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrl: './usuario-formulario.component.scss',
})
export class UsuarioFormularioComponent {
  userForm: FormGroup;

  @Output()
  userSubmitted = new EventEmitter();


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
        Validators.minLength(3),
      ]),
      apellido: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
        Validators.minLength(3),
      ]),
      email: this.fb.control('', [
        Validators.required,
      ]),
      pais: this.fb.control('', Validators.required),
      roll: this.fb.control('', Validators.required),
    });
  }

  onSubmit():void{
  if (this.userForm.invalid){
    this.userForm.markAllAsTouched();
  } else {
    this.userSubmitted.emit(this.userForm.value);
    this.userForm.reset();

  }
}
}
