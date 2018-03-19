import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const H = window['H'];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;

  map: any;

  constructor() { }

  ngOnInit() {
    this.map = this.initializeMap();
  }

  initializeMap() {
    const platform = new H.service.Platform({
      app_id: 'DemoAppId01082013GAL',
      app_code: 'AJKnXv84fjrb0KIHawS0Tg',
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers({
      tileSize: 256 * Math.min(2, devicePixelRatio),
      ppi: devicePixelRatio > 1 ? 320 : 72
    });
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: { lat: 39.50, lng: -98.35 },
        pixelRatio: Math.min(2, devicePixelRatio),
        zoom: 4
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    return map;
  }
}
