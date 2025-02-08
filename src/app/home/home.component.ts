import {Component, OnInit} from '@angular/core';
import {NavbarItem} from "../modals/navbar-item";
import {JsonPipe, NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SelectComponent} from "../select/select.component";
import {UserService} from "../services/user.service";
import {User} from "../modals/user";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    SelectComponent,
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedUser: User | null = null;
  users: {value: string, label: string}[] = [];
  navbarItems: NavbarItem[] = [
    {
      label: 'Dashboard',
      link: '',
      roles: ['user']
    },
    {
      label: 'Mijn Inschrijvingen',
      link: '/inschrijvingen',
      roles: ['user']
    },
    {
      label: 'Club',
      link: '/club',
      roles: ['vv']
    },
    {
      label: 'Clubs',
      link: '/clubs',
      roles: ['admin']
    },
    {
      label: 'Vrijwilligers',
      link: '/vrijwilligers',
      roles: ['admin', 'vv']
    },
    {
      label: 'Instelligen',
      link: '/instellingen',
      roles: ['user', 'vv']
    }
  ];
  filteredNavbarItems: NavbarItem[] = [];

  constructor(public service: UserService) {

  }


  selecteerGebruiker($event: string) {
    console.log($event);
    this.service.selecteerGebruiker(parseInt($event));
  }

  ngOnInit(): void {
    this.users = this.service.users.map((user: User) => {
      return {
        value: user.kbvbId.toString(),
        label: `${user.voornaam} ${user.achternaam}`
      };
    }) as { value: string, label: string }[];
    this.service.user.subscribe((user: User | null) => {
        console.log("User selected", user);
        this.selectedUser = user;
        console.log("filteren van navbar items");
        console.log(this.navbarItems);
        this.filteredNavbarItems = this.navbarItems.filter((item: NavbarItem) => {
          console.log(!!this.selectedUser);
          return !!this.selectedUser && item.roles.some((role: string) => this.selectedUser?.roles.includes(role));
        });
    });

      this.filteredNavbarItems = this.navbarItems.filter((item: NavbarItem) => {
        console.log(!!this.selectedUser);
        return !!this.selectedUser && item.roles.some((role: string) => this.selectedUser?.roles.includes(role));
      });
  }
}
