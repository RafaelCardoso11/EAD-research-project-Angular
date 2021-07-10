import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-content-result-discentes-research',
  templateUrl: './content-result-discentes-research.component.html',
  styleUrls: ['./content-result-discentes-research.component.scss']
})
export class ContentResultDiscentesResearchComponent implements OnInit {

  constructor() { }

  public lineChartColors: Color[] = [
   
    { // red
      backgroundColor: '#4cdbc3a2',
      borderColor: '#4CDBC4',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  //maior
  public pieGraficoColors = [
    {
      backgroundColor: [
        '#0088CE', //azulzinho forte
        '#C31A2D', // vermelho
        '#81B6EA', // azulzinho claro
        '#4CDBC4', // verde-agua
        '#F15050', // rosa
        '#FF2424' // vermelho escur
      ],
      borderColor: [
        'white'

      ],
      borderWidth: 2
    }

  ];

  public tipoGraficoPie: ChartType = 'pie';
  public tipoGraficoBar: ChartType = 'bar';
  public tipoGraficoDonut: ChartType = 'doughnut';
  public tipoGraficoLine: ChartType = 'line';
  public legend = true;


  //Grafico1
  public pieGrafico1Label: Label[] = [['Instituição Pública'], ['Instituição Privada']];
  public pieGrafico1Data: SingleDataSet = [126, 35];

  //Grafico2
  public pieGrafico2Label: Label[] = [['Belém'], ['Ananindeua'], ['Marituba'], 'Outro'];
  public pieGrafico2Data: SingleDataSet = [108, 46, 100, 3];

  //Grafico3
  public pieGrafico3Label: Label[] = [['Masculino'], ['Feminino']];
  public barChartData: ChartDataSets[] = [
    { data: [97, 64], label: 'Sexo' }

  ];
  public graficoMaior1Label: Label[] = [['Saúde Mental'], ['Desempenho']];
  public graficoMaior1: ChartDataSets[] = [
    { data: [107, 104], label: 'Afetou' },
    { data: [23, 26], label: 'Não afetou' }
  ];
  public graficoMaiorLabel: Label[] = [['Qualidade de ensino']];
  public graficoMaior2: ChartDataSets[] = [
    { data: [12], label: 'Péssimo', backgroundColor: '#0088CE'},
    { data: [9], label: 'Ruim', backgroundColor: '#C31A2D'},
    { data: [44], label: 'Regular', backgroundColor: '#81B6EA'},
    { data: [44], label: 'Bom', backgroundColor: '#4CDBC4' },
    { data: [15], label: 'Ótimo', backgroundColor: '#F15050' },
    { data: [6], label: 'Excelente', backgroundColor: '#FF2424'}
  ];

  // backgroundColor: 'rgba(148,159,177,0.2)',
  // borderColor: 'rgba(148,159,177,1)',
  // pointBackgroundColor: 'rgba(148,159,177,1)',
  // pointBorderColor: '#fff',
  // pointHoverBackgroundColor: '#fff',
  // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  public graficoMenor1Label: Label[] = [['Menos de 1 hora'], ['De 1 a 2 horas'], ['De 2 a 4 horas'], ['5 ou mais horas']];
  public graficoMenor1Data: SingleDataSet = [18, 36, 52, 24];

  public graficoMenor2Label: Label[] = [['Trabalha'], ['Não trabalha']];
  public graficoMenor2Data: SingleDataSet = [47, 83];

  public graficoBottom1Label: Label[] = [['Ens. Fundamental'], ['Ens. Médio'], ['Ens. Superior']];
  public graficoBottom1Data: SingleDataSet = [8, 81, 41];

  public graficoBottom2Label: Label[] = [['Em dispositivos'], ['Em dinheiro'], ['Não houve auxílio']];
  public graficoBottom2: SingleDataSet = [107, 104, 15];

  public graficoBottom3Label: Label[] = [['Internet estável'], ['Internet instável'], ['Sem internet']];
  public graficoBottom3Data: SingleDataSet = [79, 42, 9];
  public graficoBottom3Datasets: ChartDataSets[] = [
    { label: 'Tipo de Auxílio' }
  ];

  ngOnInit(): void {
  }

}
