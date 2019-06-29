import { Component, OnInit } from '@angular/core';
import { TypeService } from '../service/type.service';

@Component({
  selector: 'app-editfilm',
  templateUrl: './editfilm.component.html',
  styleUrls: ['./editfilm.component.css']
})
export class EditfilmComponent implements OnInit {
  types;
  typeName;

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.getAllTypes();
  }

  getAllTypes(){
    this.typeService.getAllTypes().subscribe(value=>{
      this.types = value;
    });
  }

}
