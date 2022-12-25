import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

interface CustomForm {
  inputForm: string;
  selectForm: {
    selectedFormId: string;
  };
  selectFormMultiIds: string[];
}

@Component({
  selector: 'app-ly-my-form',
  templateUrl: './ly-my-form.component.html',
  styleUrls: ['./ly-my-form.component.scss'],
})
export class LyMyFormComponent {
  form = new FormGroup({
    inputForm: new FormControl(''),
    selectForm: new FormGroup({
      selectedFormId: new FormControl(''),
    }),
    selectFormMultiIds: new FormArray([]),
  });

  // TODO: フォームのセレクトボックスに色々設定する
}
