import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import {
  modalOutletSlideAnimation,
  modalOutletDisplayAnimation
} from './animations/outletModal.animation';
import { OutletModalAnimationState } from './enum/outlet-model-animation-state';

@Component({
  selector: 'app-outlet-modal',
  templateUrl: './outlet-modal.component.html',
  styles: [],
  animations: [modalOutletSlideAnimation, modalOutletDisplayAnimation]
})
export class OutletModalComponent implements OnInit {
  @Input() name: 'left' | 'right';
  animationState: OutletModalAnimationState;
  pattern: RegExp;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pattern = new RegExp(`\(${this.name}:.*?\)`, 'g');
    let closedAnimationState: OutletModalAnimationState;

    if (this.name === 'left') {
      closedAnimationState = OutletModalAnimationState.closedLeft;
    } else {
      closedAnimationState = OutletModalAnimationState.closedRight;
    }

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.setAnimationState(
          this.pattern.test(e.urlAfterRedirects)
            ? OutletModalAnimationState.open
            : closedAnimationState
        );
      });
  }

  async close() {
    let navigationCommands: any[];
    let animationState: OutletModalAnimationState;

    if (this.name === 'left') {
      navigationCommands = ['', { outlets: { left: null } }];
      animationState = OutletModalAnimationState.closedLeft;
    } else {
      navigationCommands = ['', { outlets: { right: null } }];
      animationState = OutletModalAnimationState.closedRight;
    }

    return (
      (await this.router.navigate(navigationCommands)) &&
      this.setAnimationState(animationState)
    );
  }

  private setAnimationState(animationState: OutletModalAnimationState) {
    this.animationState = animationState;
  }
}
