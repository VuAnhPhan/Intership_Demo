/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './app.component.html'
})
export class HeroFormTemplateComponent {

  powers = ['Trưởng phòng', 'Nhân viên', 'Giám đốc'];

  hero = {name: 'Ông/ Bà.', alterEgo: 'Ông/ Bà', power: this.powers[0]};

}
