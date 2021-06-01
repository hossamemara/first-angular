import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  imgSources:any[]=[
    {imgSrc:"assets/Images/cabin.png",modalHead:"LOG CABIN"},
 {imgSrc:"assets/Images/cake.png",modalHead:"TASTY CAKE"} ,
 {imgSrc:"assets/Images/circus.png",modalHead:"CIRCUS TENT"},
 {imgSrc:"assets/Images/game.png",modalHead:"CONTROLLER"},
 {imgSrc:"assets/Images/safe.png",modalHead:"LOCKED SAFE "},
 {imgSrc:"assets/Images/submarine.png",modalHead:"SUBMARINE"}

  ];
  source:any;
  modalHead:string=""
  constructor() { }

  ngOnInit(): void {
  }
  showPortfolio(eventInfo:any)
  {
    this.source=eventInfo.target.src;
    console.log(this.source)
    if(this.source=='http://localhost:4200/assets/Images/cabin.png')
    {
      this.modalHead='LOG CABIN'
    }
    else if(this.source=='http://localhost:4200/assets/Images/cake.png')
    {
      this.modalHead='TASTY CAKE'
    }
    else if(this.source=='http://localhost:4200/assets/Images/circus.png')
    {
      this.modalHead='CIRCUS TENT'
    }
    else if(this.source=='http://localhost:4200/assets/Images/game.png')
    {
      this.modalHead='CONTROLLER'
    }
    else if(this.source=='http://localhost:4200/assets/Images/safe.png')
    {
      this.modalHead='LOCKED SAFE'
    }
    else if(this.source=='http://localhost:4200/assets/Images/submarine.png')
    {
      this.modalHead='SUBMARINE'
    }
  }

}
