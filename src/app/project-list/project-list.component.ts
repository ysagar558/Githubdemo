import { Component, OnInit,Inject } from '@angular/core';
import {Project} from '../project';
import {ProjectTypesService} from '../project-types.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectTypes: Project[]  = [];

  constructor(private projectTypesService : ProjectTypesService){}

  ngOnInit(): void {
    this.projectTypes = this.projectTypesService.getAllProjectTypes();
  }

}
