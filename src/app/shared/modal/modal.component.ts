import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() modelHeader: string;

  closeResult: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  open(content: any) {
    this.modalService.open(content);
  }
}
