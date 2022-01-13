import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartSectionComponent } from './start-section/start-section.component';
import { RoyalQSectionComponent } from './royal-qsection/royal-qsection.component';
import { SalaryOnlineSectionComponent } from './salary-online-section/salary-online-section.component';
import { SocialnetworksSectionComponent } from './socialnetworks-section/socialnetworks-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { VenturesSectionComponent } from './ventures-section/ventures-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const COMPONENTS = [StartSectionComponent, RoyalQSectionComponent, SalaryOnlineSectionComponent, SocialnetworksSectionComponent, ContactSectionComponent, AboutMeSectionComponent, VenturesSectionComponent, TestimonialsComponent ]

@NgModule({
  declarations: [ ...COMPONENTS, TestimonialComponent ],
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
