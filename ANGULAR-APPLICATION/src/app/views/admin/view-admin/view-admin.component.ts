import { Component, OnInit } from '@angular/core';
import { AdminService } from '@_components/admin/_services/admin.service';

@Component({
	selector: 'app-view-admin',
	templateUrl: './view-admin.component.html',
	styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

	constructor(public adminService: AdminService) { }

	ngOnInit(): void { }

}
