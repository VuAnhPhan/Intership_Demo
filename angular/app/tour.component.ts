import { Component } from '@angular/core';
 
@Component({
  selector: 'app-little-tour',
  template: `
  <h2>DANH SÁCH CÔNG  VIỆC</h2>
    <input #newCV
      (keyup.enter)="addCV(newCV.value)"
      (blur)="addCV(newCV.value); newCV.value='' ">
      
 
    <button (click)="addCV(newCV.value)">Add</button>
 
    <ul><li *ngFor="let CV of CVs">{{CV}}</li></ul>
  `
})
export class DanhSachCongViec {
  CVs = ['Làm TypeScript', 'Làm Angular 2'];
  addCV(newCV: string) {
    if (newCV) {
      this.CVs.push(newCV);
    }
  }
}