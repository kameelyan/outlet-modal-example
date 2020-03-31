import { OutletModalComponent } from './outlet-modal.component';
import { OutletModalAnimationState } from './enum/outlet-model-animation-state';
import { BehaviorSubject } from 'rxjs';

describe('OutletModalComponent', () => {
    let component: OutletModalComponent;

    let navigationFacadeMock: any;
    let routerMock: any;

    let storeSelect$: BehaviorSubject<boolean>;

    beforeEach(() => {
        storeSelect$ = new BehaviorSubject<boolean>(false);

        navigationFacadeMock = {
            leftOutletOpen: storeSelect$.asObservable(),
            rightOutletOpen: storeSelect$.asObservable(),
        };

        routerMock = {
            navigate: jest.fn(),
        };

        component = new OutletModalComponent(
            navigationFacadeMock,
            routerMock,
        );
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('leftOutlet', () => {
        it('should open left outlet', () => {
            component.name = 'left';

            storeSelect$.next(true);

            component.ngOnInit();

            expect(component.open).toBeTruthy();
            expect(component.open).toBe(navigationFacadeMock.leftOutletOpen);
            expect(component.animationState).toBe(OutletModalAnimationState.open);
        });

        it('should close left outlet', () => {
            component.name = 'left';

            storeSelect$.next(false);

            component.ngOnInit();

            expect(component.open).toBeTruthy();
            expect(component.open).toBe(navigationFacadeMock.leftOutletOpen);
            expect(component.animationState).toBe(OutletModalAnimationState.closedLeft);
        });

        it('should close left outlet and navigate', () => {
            component.name = 'left';

            storeSelect$.next(true);

            component.ngOnInit();

            routerMock.navigate.mockResolvedValue(true);

            component.close().then(() => {
                expect(routerMock.navigate).toHaveBeenCalledWith(['', { outlets: { left: null } }]);
                expect(component.animationState).toBe(OutletModalAnimationState.closedLeft);
            });
        });
    });

    describe('rightOutlet', () => {
        it('should open right outlet', () => {
            component.name = 'right';

            storeSelect$.next(true);

            component.ngOnInit();

            expect(component.open).toBeTruthy();
            expect(component.open).toBe(navigationFacadeMock.rightOutletOpen);
            expect(component.animationState).toBe(OutletModalAnimationState.open);
        });

        it('should close right outlet', () => {
            component.name = 'right';

            storeSelect$.next(false);

            component.ngOnInit();

            expect(component.open).toBeTruthy();
            expect(component.open).toBe(navigationFacadeMock.rightOutletOpen);
            expect(component.animationState).toBe(OutletModalAnimationState.closedRight);
        });

        it('should close right outlet and navigate', () => {
            component.name = 'right';

            storeSelect$.next(true);

            component.ngOnInit();

            routerMock.navigate.mockResolvedValue(true);

            component.close().then(() => {
                expect(routerMock.navigate).toHaveBeenCalledWith(['', { outlets: { right: null } }]);
                expect(component.animationState).toBe(OutletModalAnimationState.closedRight);
            });
        });
    });
});
