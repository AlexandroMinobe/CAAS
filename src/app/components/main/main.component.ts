import { IBreeds, ICats } from './../../interfaces/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  breeds!: IBreeds[] 
  cats!: ICats[]
  error!: any
  constructor(private crudService: CrudService) {
    this.getterCats();
   }
  
  ngOnInit(): void {

  }

  getterCats() {
    this.crudService.getCats().subscribe((data:ICats[]) => {console.log("catas")
    this.cats = data
    console.log("catas")
    }, 
    (error:any) => {
      this.error = error
      console.log(error)
    })
  }

  getterBreeds(){
    this.crudService.getBreeds().subscribe((data:IBreeds[])=> {
    let i = 0
    this.breeds = []
    console.log("asdsa")
    while (i < 10){
      this.breeds.push(data[i])
      console.log(i)
      i++
    }
    console.log(this.breeds)

    })
  }


}
