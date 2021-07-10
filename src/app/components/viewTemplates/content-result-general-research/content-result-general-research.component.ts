import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-content-result-general-research',
  templateUrl: './content-result-general-research.component.html',
  styleUrls: ['./content-result-general-research.component.scss']
})
export class ContentResultGeneralResearchComponent implements OnInit {
  constructor() { }

    //maior
    public pieGraficoColors = [
      {
        backgroundColor: [
          '#f15050',
          'rgb(173, 20, 38)',
          '#7e0606',
          '#57060f'
      ],
        borderColor: [
          'white'
    
      ],
      borderWidth: 2
      }
      
    ];

    public tipoGraficoPie: ChartType = 'pie';
    public tipoGraficoBar: ChartType = 'bar';
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
    { data: [97, 64], label: 'Sexo' },

  ];



  ngOnInit(): void {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

}
