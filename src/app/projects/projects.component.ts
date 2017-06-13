import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects = this.projectService.getProjects();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

}
