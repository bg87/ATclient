import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

// import mock users
import { USERS } from '../../mock-users';

@Injectable()
export class UserService {

    // return the mock users array
    getUsers(): User[] {
        return USERS;
    }

}