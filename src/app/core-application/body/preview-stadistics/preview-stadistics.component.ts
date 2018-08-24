import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PreviewService } from './preview.service';


@Component({
    selector: 'app-preview-stadistics',
    templateUrl: './preview-stadistics.component.html',
    styleUrls: ['./preview-stadistics.component.css'],
    providers: [PreviewService]
})
export class PreviewStadisticsComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 6.27053;
    lng: number = -75.57211999999335;
    array = [];
    searchbar ="";
    messager = "../../../../assets/images/delivery-cart.png";
    locate = "../../../../assets/images/placeholder.png";
    chart = [];
    constructor(private service: PreviewService) { }

    ngOnInit() {
        this.service.getCollection().subscribe(res => {
            this.array = res;
        });

        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
                labels: ["8:00 AM", "10:00 AM", "12:00 M", "2:00 PM", "4:00 PM", "6:00 PM"],
                datasets: [{
                    label: 'Entregas completadas en el dia laboral',
                    data: [12, 19, 5, 2, 3, 34],
                    backgroundColor: [



                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [

                        'rgba(75, 192, 192, 1)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    center(lat,long){
        console.log(lat + "" + long);
        this.lat = lat;
        this.lng = long;
    }

 /*    search(){
        this.array = this.array.filter(t => (t.mensajero.nombre).String.contains(this.searchbar));
    } */

}
