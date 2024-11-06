import {Injectable} from '@angular/core';
import {asyncScheduler, BehaviorSubject} from 'rxjs';
import {Toast} from '../../models/toast.model';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private readonly delay = 5000;
  private toastSubject = new BehaviorSubject<Toast[]>([]);
  public readonly toasts$ = this.toastSubject.asObservable();


  public showToast(toast: Toast) {
    this.toastSubject.next([...this.toastSubject.getValue(), toast]);

    asyncScheduler.schedule(state => () => this.hideToast(toast), this.delay);
  }


  public hideToast(toast: Toast) {
    this.toastSubject.next(this.toastSubject.getValue().filter(t => t !== toast));
  }
}
