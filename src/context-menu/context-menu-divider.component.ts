import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-context-menu-divider",
	template: "",
	styles: [`
		:host {
			display: list-item;
			list-style: none;
		}
	`]
})
export class ContextMenuDividerComponent {
	@HostBinding("class.bx--context-menu-divider") dividerClass = true;
	@HostBinding("attr.role") role = "separator";
}
