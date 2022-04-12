import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  openAddSpaces(content:any){
    this.modalService.open(content, {centered:true, size:'lg'})
  }
}
