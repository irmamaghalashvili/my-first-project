import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

}
