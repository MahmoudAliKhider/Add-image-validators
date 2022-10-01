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
  images:any[]=[]
  title = 'AddImage';
//base64

  getImage(event:any){
  let files = event.target.files  //Array
  for(let x=0;x<3;x++){
    let filel  = files[x];
    let reader = new FileReader()
    reader.readAsDataURL(filel)
    reader.onload = ()=>{
   this.images.push(reader.result)
    }
  }
  }
}

