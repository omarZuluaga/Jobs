import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;  

@Component({
  selector: 'app-jobs-map',
  templateUrl: './jobs-map.component.html',
  styleUrls: ['./jobs-map.component.scss']
})
export class JobsMapComponent implements AfterViewInit {

  @Input() jobs: any[] = [];
  @Output() jobOver = new EventEmitter();

  private map: any;
  
  constructor() { }

  ngAfterViewInit() { //se ejecuta antes de que se muestre información en la vista
    this.initMap();
    this.setMarkers();
  } 

  private initMap() {
    this.map = L.map('map', {
      center: [ 10.39972, -75.51444],
      zoom: 12.5
    });

    this.map.invalidateSize();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      noWrap: true,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);

    let marker: any;

    const Icon = new L.Icon({
      iconSize: [37, 37],
      iconAnchor: [19, 27],
      popupAnchor: [1, -24],
      iconUrl: 'assets/images/marker.png'
    });

    this.map.locate({}).on('locationfound', (event: any) => {
      marker = new L.marker(event.latlng, {icon: Icon}).addTo(this.map);
      marker.bindPopup('<p>Posición actual</p>');
      marker.openPopup();
    }).on('locationerror', _ => {
      if (marker) {
        this.map.removeLayer(marker);
        marker = undefined;
      }
    });
  }

  private setMarkers() {
    for (const job of this.jobs) {
      const lat = +job.latitude;
      const lon = +job.longitude;
      const marker = L.marker([lat, lon]).addTo(this.map);
      marker.on('mouseover', () => {
        this.jobOver.emit(job);
      });
      marker.on('mouseout', () => {
        this.jobOver.emit(null);
      });
      marker.bindPopup( `<img style="max-height:4rem;max-width:4rem;" />`, {maxWidth: 'none'});
      const popup = marker.getPopup();
      const setting = popup._content.replace('<img style="max-height:4rem;max-width:4rem;" />', 
      `<img style="max-height:4rem;max-width:4rem;" src= ${job.image} />`);
      marker.setPopupContent(setting);
    }
  }
}
