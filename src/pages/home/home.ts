import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	map: any;
	@ViewChild('map') mapElement: ElementRef;
	
	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public geolocation: Geolocation) {
	}

	ionViewDidLoad(){
		this.loadMap();
	}
	
	loadMap(): void {
		this.geolocation.getCurrentPosition().then((position) => {
 
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			setTimeout(() => {
				this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
			}, 1000);
		}, (err) => {
			console.log(err);
		});
 
	}

}
