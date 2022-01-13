import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentInit{
  @ViewChild('buttonMenu') btn!:ElementRef<HTMLElement>

  ngAfterContentInit(){
    const script = document.createElement('script')
    script.src = './assets/js/main.js'
    document.body.appendChild(script)
  }

  onClick(){
    document.getElementById('navbarSupportedContent').classList.remove('show')
    document.querySelector('.navbar-toggler').classList.remove('collapse')
  }
}
