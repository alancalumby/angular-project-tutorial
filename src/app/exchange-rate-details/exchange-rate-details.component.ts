import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Constants } from '../config/constants'

@Component({
  selector: 'app-exchange-rate-details',
  templateUrl: './exchange-rate-details.component.html',
  styleUrls: ['./exchange-rate-details.component.css']
})

export class ExchangeRateDetailsComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  cotacao_dia = ""

  ngOnInit(): void{
    // Exemplo de chamada à API usando o serviço
    this.apiService.get(Constants.API_EXCHANGE_RATE).subscribe(response => {
      this.cotacao_dia = response.conversion_rates.BRL;
    });
  }

}
