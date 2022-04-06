import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var H: any;
@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss'],
})
export class HereMapComponent implements OnInit {
  @ViewChild("map")
   mapElement: ElementRef;
  @Input()
   appId: any;

  @Input()
   appCode: any;

    @Input()
    lat: any;

    @Input()
     lng: any;
  constructor() { }

  ngOnInit() {}
  ngAfterViewInit() {
    let platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: this.lat, lng: this.lng }
            }
        );
        let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }

}
