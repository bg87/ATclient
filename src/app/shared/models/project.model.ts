import { Contribution } from './contribution.model';
import { User } from './user.model';

export class Project {
    id: number;
    title: string;
    description: string;
    team: Array<User>;
    contributions: Array<Contribution>;
}