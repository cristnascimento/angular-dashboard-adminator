import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer-imports',
  templateUrl: './footer-imports.component.html',
  styleUrls: ['./footer-imports.component.scss']
})
export class FooterImportsComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("after init")
    let urls = [
    {type:"text/javascript", src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", integrity:"", crossorigin: ""},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1", crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM", crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js", integrity:"sha512-JRlcvSZAXT8+5SQQAvklXGJuxXTouyq8oIMaYERZQasB8SBDHZaUbeASsJWpk0UUrf89DP3/aefPPrlMR1h1yQ==", crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdn.jsdelivr.net/npm/chart.js@2.8.0"},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js", integrity:"sha512-3PRVLmoBYuBDbCEojg5qdmd9UhkPiyoczSFYjnLhFb2KAFsWWEMlAPt0olX1Nv7zGhDfhGEVkXsu51a55nlYmw==",crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js",integrity:"sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==",crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/perfect-scrollbar.min.js",integrity:"sha512-yUNtg0k40IvRQNR20bJ4oH6QeQ/mgs9Lsa6V+3qxTj58u2r+JiAYOhOW0o+ijuMmqCtCEg7LZRA+T4t84/ayVA==",crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdnjs.cloudflare.com/ajax/libs/skycons/1396634940/skycons.min.js",integrity:"sha512-ChQiOC9OBUvQ75KLv3+YRxCQLV1bSWnGfcSdaP1v3iu6XSkmge+eXCu3lcV+O+Uvdjb+LGMZd/KAvV4rkEfbzw==", crossorigin:"anonymous"},
    {type:"text/javascript", src:"https://cdn.datatables.net/v/dt/dt-1.10.22/datatables.min.js"},
    {type:"module", src:"/assets/scripts/index.js"},
    {type:"text/javascript", src:"/assets/scripts/googleMaps/index.js"},
    {type:"text/javascript", src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA&callback=initMap"}
  ];

  urls.forEach( item => {
    const s = this.document.createElement('script');
    s.type = item.type;
    s.src = item.src;
    if (item.integrity) {
      s.integrity = item.integrity;
    }

    if (item.crossorigin) {
      s.crossorigin = item.crossorigin;
    }
    //this.elementRef.nativeElement.appendChild(s);
  });

  }

}
