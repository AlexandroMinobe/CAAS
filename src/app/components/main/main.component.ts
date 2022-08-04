import { IBreeds, ICats, IFavouriteCat } from './../../interfaces/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  breeds: IBreeds[]  = []
  cats: ICats[] = []
  error: any
  favouritedCats: IFavouriteCat[] = []
  info: any

  constructor(private crudService: CrudService) {
    this.getterBreeds();
    this.getterFavourites();
    // this.getterCat();
   }
  
  ngOnInit(): void {

  }

  getterCat():void{
    console.log("favs:", this.favouritedCats)
    this.crudService.getCat(this.favouritedCats[0].image_id).subscribe((data:any)=>{
      this.info = data
      console.log(this.info)
    })
  }

  getterCats():void {
    this.crudService.getCats().subscribe((data:ICats[]) => {console.log("catas")
    this.cats = data
    }, 
    (error:any) => {
      this.error = error
      console.log(error)
    })
  }

  getterBreeds():void{
    this.crudService.getBreeds().subscribe((data:IBreeds[])=> {
    let i = 0
    while (i < 10){
      this.breeds.push(data[i])
      console.log(i)
      i++
    }

    })
  }

  getterFavourites():void{
    this.crudService.getFavouritedCats().subscribe((data:any)=>{
      this.favouritedCats = data
      console.log(this.favouritedCats)
      this.getterCat()
    })
    
  }



  favouriteCat(id:string):void{
    this.crudService.favouriteCat(id, 'user-123').subscribe((data:any) =>{
      this.getterFavourites()
    })
  }


}
