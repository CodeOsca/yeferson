import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../components/testimonial/interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials:Testimonial[] = [
    {
      name:'Patrick Gutiérrez',
      occupation:'Trabajador independiente',
      img:'./assets/img/patrick.jpg',
      paragraph:'Gracias a Yeferson encontré un buen modo de generar ingresos extra, lo cual me dio la base para poner un negocio pequeño, ahora tengo a dos empleados a mi disposición y no dependo de otros ingresos, así no tengo nada más que decirle a Yeferson que gracias por ser mi mentor en este mundo del emprendimiento.'
    },

    {
      name:'Emanuel Moreno',
      occupation:'Copywriter y redactor de contenidos profesional',
      img:'./assets/img/Emanuel.jpg',
      paragraph:'Cruzarme con Yeferson ha cambiado mi vida, él fue la primera persona en apostar por mi talento como redactor, y desde entonces nos hemos hecho grandes amigos apoyándonos continuamente para alcanzar todos nuestros sueños. Los animo a conectar con él porque además de ser profesional en su trabajo es una persona con un gran corazón.”'
    },
  ]


}
