import { Directive, HostListener, Optional } from '@angular/core';
import { NavController } from '../../navigation/nav-controller';
/**
 * @name NavPop
 * @description
 * Directive to declaratively pop the current page off from the
 * navigation stack.
 *
 * @usage
 * ```html
 * <ion-content>
 *
 *  <button ion-button navPop>Go Back</button>
 *
 * </ion-content>
 * ```
 *
 * Similar to {@link /docs/api/components/nav/NavPush/ `NavPush` }
 * @demo /docs/demos/src/navigation/
 * @see {@link /docs/components#navigation Navigation Component Docs}
 * @see {@link ../NavPush NavPush API Docs}
 */
var NavPop = (function () {
    function NavPop(_nav) {
        this._nav = _nav;
        if (!_nav) {
            console.error('navPop must be within a NavController');
        }
    }
    /**
     * @hidden
     */
    NavPop.prototype.onClick = function () {
        // If no target, or if target is _self, prevent default browser behavior
        if (this._nav) {
            this._nav.pop().catch(function () {
                (void 0) /* console.debug */;
            });
            return false;
        }
        return true;
    };
    NavPop.decorators = [
        { type: Directive, args: [{
                    selector: '[navPop]'
                },] },
    ];
    /** @nocollapse */
    NavPop.ctorParameters = function () { return [
        { type: NavController, decorators: [{ type: Optional },] },
    ]; };
    NavPop.propDecorators = {
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
    return NavPop;
}());
export { NavPop };
//# sourceMappingURL=nav-pop.js.map