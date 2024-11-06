import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgControl} from '@angular/forms';


/**
 * A Directive that marks form controls as invalid if they are in an
 * 'INVALID' state.
 *
 * It applies the 'error' validity message to the form control's native
 * element based on its validation status.
 *
 * Implements OnInit for initializing the validity state and subscribing to
 * status changes.
 * Implements OnDestroy for cleanup of the subscription.
 *
 * @param {NgControl} control - Injected Angular NgControl to monitor the
 *                              status of the form control.
 * @param {ElementRef} elem - Injected ElementRef to access and manipulate
 *                            the DOM element of the form control.
 */
@Directive({
  selector: '[appMarkInvalid]',
  standalone: true
})
export class MarkInvalidDirective implements OnInit, OnDestroy {
  private subscription$?: Subscription;


  constructor(private control: NgControl, private elem: ElementRef) {
  }


  ngOnInit(): void {
    // Initially marking the control as invalid only if the control is
    // used (dirty) or was touched.
    if (this.control.touched || this.control.dirty) {
      this.elem.nativeElement.setCustomValidity(this.control.status === 'INVALID' ? 'error' : '');
    }

    this.subscription$ = this.control.statusChanges?.subscribe(status => {
      this.elem.nativeElement.setCustomValidity(status === 'INVALID' ? 'error' : '');
    });
  }


  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
