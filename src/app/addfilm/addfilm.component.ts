import { HttpMoviesService, Types } from './../service/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/type.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  types;
  typeName;
  
  addError ='';

  constructor(private typeService: TypeService,private movieService: HttpMoviesService) {}

  input(type){
    if(type.selected){
      type.selected = false;
    }else{
      type.selected = true;
    }
  }

  addMovie(formData: NgForm){
    let selectedTypes = new Array<Types>();

    for(let t of this.types){
      if(t.selected == true){
        selectedTypes.push(t);
      }
    }

    this.movieService.addMovie(formData.value.mname,selectedTypes,formData.value.mdirector,formData.value.mproductionYear,formData.value.mdescription);
  }

  ngOnInit() {
    this.getAllTypes();
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(value=>{
      this.types = value;
    });
  }

}
