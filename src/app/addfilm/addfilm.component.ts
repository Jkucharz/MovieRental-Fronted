import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/type.service';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  types;
  typeName;

  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.getAllTypes();
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(value=>{
      this.types = value;
    });
  }

}
