import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  images:any[]=[];
  preview :any=""
  title = 'AddImage';
//base64

  getImage(event:any){

  let files = event.target.files  //Array
  let sliderLength = this.images.length + files.length
if(sliderLength>5){
  let limit = 5 - this.images.length;
  for(let x=0;x<limit;x++){
    let filel  = files[x];
    let reader = new FileReader()
    reader.readAsDataURL(filel)
    reader.onload = ()=>{
   this.images.push(reader.result)
    }
  }

}else{


  for(let x=0;x<files.length;x++){
    let filel  = files[x];
    let reader = new FileReader()
    reader.readAsDataURL(filel)
    reader.onload = ()=>{
   this.images.push(reader.result)
    }
  }

}

  }
  display(index:any){
this.preview =  this.images[index]
  }
}

