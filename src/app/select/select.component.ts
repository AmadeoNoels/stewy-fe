import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() options!: { label: string, value: any }[];
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  placeholder = 'Maak u keuze';

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue)
    this.valueChange.emit(selectedValue);
  }
}
