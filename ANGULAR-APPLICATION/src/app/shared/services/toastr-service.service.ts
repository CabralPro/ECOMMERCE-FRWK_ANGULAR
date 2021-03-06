import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class ToastrService {

	constructor(private snackBar: MatSnackBar) { }

	success(msg: string) {
		this.snackBar.open(msg, 'X', {
			duration: 5000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: ["msg-success"],
		});

	}

	error(msg: string) {
		this.snackBar.open(msg, 'X', {
			duration: 5000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: ["msg-error"],
		});
	}

	warning(msg: string) {
		this.snackBar.open(msg, 'X', {
			duration: 5000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: ["msg-warning"],
		});
	}

}