import { Project } from './project.model';

export class User {
    id: number;
    name: string;
    email: string;
    projects: Array<Project>;
}