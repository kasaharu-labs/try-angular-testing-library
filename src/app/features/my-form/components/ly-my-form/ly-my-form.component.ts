import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  address: {
    prefectureId: string;
  };
  favaritCategoryIds: string[];
}

@Component({
  selector: 'app-ly-my-form',
  templateUrl: './ly-my-form.component.html',
  styleUrls: ['./ly-my-form.component.scss'],
})
export class LyMyFormComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      prefectureId: new FormControl(''),
    }),
    favaritCategoryIds: new FormArray([]),
  });
}
