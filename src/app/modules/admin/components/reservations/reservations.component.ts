import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  currentPage: any = 1;
  total: any;
  reservations: any;

  constructor(private adminService: AdminService,
    private message: NzMessageService
  ){
    this.getReservations(); 
  }

  getReservations(){
    this.adminService.getReservations(this.currentPage-1).subscribe(res=>{
      console.log(res);
      this.reservations = res.reservationDtoList;
      this.total = res.totalPages*5;
    })
  }

  pageIndexChange(value: any){
    this.currentPage = value;
    this.getReservations();
  }
}


