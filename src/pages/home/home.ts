import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('projCliLineCanvas') projCliLineCanvas;
  @ViewChild('projNucDoughnutCanvas') projNucDoughnutCanvas;

  projCliLineChart: any;
  projNucDoughnutChart: any;

  constructor(public navCtrl: NavController) {  }

  ionViewDidLoad(){
    // Gráfico de número de projetos e clientes
    this.projCliLineChart = new Chart(this.projCliLineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan-Mar', 'Abr-Jun', 'Jul-Set', 'Out-Dez'],
        datasets: [
          {
            label: 'Nº de projetos',
            data: [4, 8, 6, 12],
            backgroundColor: 'rgba(30, 136, 229, 1)',         // Positive color
            borderColor: 'rgba(30, 136, 229, 1)',             // Positive color
            borderWidth: 2,
            pointBackgroundColor: 'rgba(30, 136, 229, 1)',    // Positive color
            pointHitRadius: 5,
            fill: false
          },
          {
            label: 'Nº de clientes',
            data: [4, 6, 6, 8],
            backgroundColor: 'rgba(67, 160, 71, 1)',         // Balanced color
            borderColor: 'rgba(67, 160, 71, 1)',             // Balanced color
            borderWidth: 2,
            pointBackgroundColor: 'rgba(67, 160, 71, 1)',    // Balanced color
            pointHitRadius: 5,
            fill: false
          } 
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      }
    });

    // Gráfico de números de projetos por núcleo
    this.projNucDoughnutChart = new Chart(this.projNucDoughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['ADM', 'ALIM', 'CIV', 'MEC', 'PROD', 'QUIM', 'TEC'],
        datasets: [
          {
            label: 'Nº de projetos',
            data: [3, 8, 5, 3, 3, 4, 5],
            backgroundColor: [
              'rgba(156, 39, 176, 1)',  // Royal color
              'rgba(121, 85, 72, 1)',   // Mashed color
              'rgba(251, 140, 0, 1)',   // Attention colorß
              'rgba(30, 136, 229, 1)',  // Positive color
              'rgba(253, 216, 53, 1)',  // Energized color
              'rgba(245, 61, 61, 1)',   // Danger color
              'rgba(67, 160, 71, 1)'    // Balanced color
            ]
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      }
    });
  }
}
