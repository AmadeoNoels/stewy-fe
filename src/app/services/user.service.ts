import { Injectable } from '@angular/core';
import {User} from "../modals/user";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Subject<User | null> = new Subject<User | null>();
  users: User[] = [
    {
      kbvbId: 1,
      voornaam: 'John',
      achternaam: 'Doe',
      roles: ['user']
    },
    {
      kbvbId: 2,
      voornaam: 'Veiligheidsverantwoordelijke',
      achternaam: '',
      roles: ['vv']
    },
    {
      kbvbId: 3,
      voornaam: 'Super',
      achternaam: 'Admin',
      roles: ['admin']
    }
  ]

  constructor() {
  }

  selecteerGebruiker(kbvbId: number): void {
    const user: User = this.users.find(({kbvbId: id}) => id === kbvbId) as User;
    if (user) {
      this.user.next(user);
    } else {
      this.user.next(null);
    }
  }
}
