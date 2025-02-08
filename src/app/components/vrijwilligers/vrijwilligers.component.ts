import { Component } from '@angular/core';
import {Vrijwilliger} from "../../modals/vrijwilliger";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-vrijwilligers',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './vrijwilligers.component.html',
  styleUrl: './vrijwilligers.component.css'
})
export class VrijwilligersComponent {
  vrijwilligers: Vrijwilliger[] = [{
    voornaam: 'John',
    achternaam: 'John Doe',
    club: 'genk',
  } as Vrijwilliger];


}
