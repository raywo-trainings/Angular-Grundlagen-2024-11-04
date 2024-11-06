import {Component, inject} from '@angular/core';
import {ToastService} from '../services/toast.service';
import {AsyncPipe} from '@angular/common';
import {ToastComponentComponent} from '../toast-component/toast-component.component';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [
    AsyncPipe,
    ToastComponentComponent
  ],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss'
})
export class ToastContainerComponent {

  private toastService = inject(ToastService)
  protected toasts$ = this.toastService.toasts$

}
