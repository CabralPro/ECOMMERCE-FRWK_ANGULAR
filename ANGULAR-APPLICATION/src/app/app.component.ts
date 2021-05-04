import { Component } from '@angular/core';
import { ToastrService } from '@_shared/services/toastr-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(public toaster: ToastrService) {
		window.toaster = toaster;
	}
}

declare global {
	interface Window { toaster: ToastrService; }
}
