import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  title = 'AATurismo - Home'
  Roteiros = [
    {
      id: '1',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://ssvpbrasil.org.br/wp-content/uploads/2021/03/Santu%C3%A1rio-de-Aparecida-15.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
    {
      id: '2',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://pt.rssc.com/sites/default/files/VOY220505_Ephesus-Turkey442x254_CruiseCard.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
    {
      id: '3',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://pt.rssc.com/sites/default/files/VOY220505_Ephesus-Turkey442x254_CruiseCard.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
    {
      id: '4',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://pt.rssc.com/sites/default/files/VOY220505_Ephesus-Turkey442x254_CruiseCard.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
    {
      id: '5',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://pt.rssc.com/sites/default/files/VOY220505_Ephesus-Turkey442x254_CruiseCard.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
    {
      id: '6',
      titulo: 'ROMARIA APARECIDA DO NORTE - 7 Dias',
      img: 'https://pt.rssc.com/sites/default/files/VOY220505_Ephesus-Turkey442x254_CruiseCard.jpg',
      data_inicio: '00/00/0000',
      data_termino: '01/01/0101',
    },
  ]
}