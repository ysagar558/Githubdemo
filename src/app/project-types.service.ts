import { Injectable } from '@angular/core';
import{Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypesService {
  projectTypes: Project[]=[
  {
    name : "Software Development",startingPrice:100000
  },
  {
    name : "Digital Tranformation",startingPrice:200000
  },
  {
    name : "IT Service Management",startingPrice:200000
  }
];

  constructor() { }
  getAllProjectTypes() : Project[]
  {
    return this.projectTypes;
  }
  getProjectTypeByName(name : string) : Project{
    var projectType:Project = {name:"",startingPrice:0};
    console.log("services called with Argument"+ name);
    this.projectTypes.forEach(p=>{
      if(p.name == name){
        projectType=p;
      }
    });
    return projectType;
  }
}
