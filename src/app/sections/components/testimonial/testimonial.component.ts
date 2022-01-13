import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from './interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimonial!:Testimonial

}
