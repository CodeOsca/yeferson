import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent{
  private date:Date = new Date()
  private dateHappy:number[] = [19, 11, 2003]

  get giveAge(){
    const MONTH = this.date.getMonth() + 1
    const DAY = this.date.getDate()
    const YEAR = this.date.getFullYear()
    const AGE = YEAR - this.dateHappy[2]
    return MONTH > this.dateHappy[1] || MONTH === this.dateHappy[1] && DAY >= this.dateHappy[0] ? AGE : AGE -1
  }

}
