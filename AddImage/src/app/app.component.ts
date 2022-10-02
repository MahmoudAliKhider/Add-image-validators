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
  preview :any="";
  ImageIndex!:number;
  title = 'AddImage';
//base64

  getImage(event:any){

  let files = event.target.files  //Array
  let sliderLength = this.images.length + files.length
if(sliderLength > 5){
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
    this.ImageIndex = index;
    this.preview =  this.images[index]
  }

  Delate(){
    this.images.splice(this.ImageIndex,1)
    if(this.images.length == this.ImageIndex){
      --this.ImageIndex;
    this.preview =  this.images[this.ImageIndex]

    }else{
    this.preview =  this.images[this.ImageIndex]

    }

  }

  minasImage(){

    --this.ImageIndex;
    this.preview =  this.images[this.ImageIndex]

  }
  plussImage(){
    ++this.ImageIndex;
    this.preview =  this.images[this.ImageIndex]

  }
}

