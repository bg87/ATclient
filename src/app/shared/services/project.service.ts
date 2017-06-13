import { Injectable } from '@angular/core';

import { Project } from '../models/project.model';

// import mock projects
import { PROJECTS } from '../../mock-projects';

@Injectable()
export class ProjectService {

    // return mock projects array
    getProjects(): Project[] {
        return PROJECTS;
    }
    
}