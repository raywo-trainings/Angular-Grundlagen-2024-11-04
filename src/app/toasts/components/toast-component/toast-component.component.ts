import {Component, input} from '@angular/core';
import {Toast} from '../../models/toast.model';

@Component({
  selector: 'app-toast-component',
  standalone: true,
  imports: [],
  templateUrl: './toast-component.component.html',
  styleUrl: './toast-component.component.scss'
})
export class ToastComponentComponent {

  public toast = input.required<Toast>();

}
