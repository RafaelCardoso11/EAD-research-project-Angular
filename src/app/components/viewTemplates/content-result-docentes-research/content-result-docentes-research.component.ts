import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-content-result-docentes-research',
  templateUrl: './content-result-docentes-research.component.html',
  styleUrls: ['./content-result-docentes-research.component.scss']
})
export class ContentResultDocentesResearchComponent implements OnInit {

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

  public barChartData: ChartDataSets[] = [{ data: [108, 46, 100, 3], label: 'Município' },];
  //Saude Mental
  public pieGrafico1Label: Label[] = [['Sim'], ['Não']];
  public pieGrafico1Data: SingleDataSet = [21, 10];

  //Desempenho
  public pieGrafico2Label: Label[] = [['Sim'], ['Não']];
  public pieGrafico2Data: SingleDataSet = [14, 17];

  //treinamento
  public pieGrafico3Label: Label[] = [['Sim'], ['Não']];
  public pieGrafico3Data: SingleDataSet = [22, 9];
  public grafico3sets: ChartDataSets[] = [{ label: 'Treinamento ofertado' },];
  //Dispositivos
  public grafico4Label: Label[] = [['Telefone celular'], ['Tablet'], ['Notebook'], ['Computador Desktop']];
  public grafico4Data: SingleDataSet = [29, 9, 26, 8];
  public grafico4sets: ChartDataSets[] = [{ label: 'Dispositivos que o docente possui' },];
  //Desinteresse + afetou
  public grafico5Label: Label[] = [['Não'], ['Sim, pouca diferença.'], ['Sim, muita diferença.'], ['Afetou pouco']];
  public grafico5sets: ChartDataSets[] =
    [{ data: [2, 7, 22], label: 'Desinteresse dos alunos' },
    { data: [9, 11, 7, 4], label: 'Afetou' }
    ];
  //Area de atuação
  public grafico6Label: Label[] = [['Ensino Médio'], ['Ensino Fundamental'], ['Ensino Superior'], ['Educação Infantil']];
  public grafico6Data: SingleDataSet = [12, 14, 4, 1];
  ngOnInit(): void {
  }

}
