import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-roteiro',
  templateUrl: './roteiro.component.html',
  styleUrls: ['./roteiro.component.css']
})

export class RoteiroComponent implements OnInit{
  titulo: string = "";
  id: string = '';

  constructor(private route: ActivatedRoute){
  }



  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.titulo = params['title'];
    });
  }
}