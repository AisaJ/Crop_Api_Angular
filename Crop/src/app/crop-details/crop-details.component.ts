import { Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Crop } from '../crop';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  @Input() crop:Crop;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      id:number;
      name:string;
      category_id:number;
      description:string;
      created_at:string;
      updated_at:string
    }
    this.http.get<ApiResponse>("http://localhost:8080/crop-rest/create").subscribe(data=>{
      this.crop= new Crop(data.id,data.name,data.category_id,data.description,data.created_at,data.updated_at)
  },err=>{
    this.crop= new Crop("Error retrieving data");
    console.log("Error occured ")
})
  }

}
