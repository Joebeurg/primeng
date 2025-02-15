import { Component } from '@angular/core';

@Component({
    selector: 'block-ui-accessibility-doc',
    standalone: false,
    template: ` <app-docsectiontext>
        <h3>Screen Reader</h3>
        <p>
            BlockUI manages <i>aria-busy</i> state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like <i>role</i> and <i>aria-live</i> can be used to define live regions.
        </p>

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </app-docsectiontext>`
})
export class AccessibilityDoc {}
