import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-fiscal-note',
  templateUrl: './view-fiscal-note.component.html',
  styleUrls: ['./view-fiscal-note.component.less']
})
export class ViewFiscalNoteComponent implements OnInit {

  constructor() { }

  fiscalNotes: any = [
    {
      number: 250555,
      client: 'Lourdes',
      type: 'BALCÃO',
      status: 'Sem início',
      totalValue: 'R$ 1.055,85'
    },
    {
      number: 250556,
      client: 'Vera Cruz',
      type: 'EXPEDIÇÂO',
      status: 'Conferida',
      totalValue: 'R$ 2.000,85'

    }
  ];

  notification: string = 'Atenção, confira o código da nota fiscal com o código da peça.'

  ngOnInit() {
  }

}
