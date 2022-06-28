import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing;

  constructor(private route: ActivatedRoute,) {
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const foundListing = fakeListings.find(listing => listing.id == id);
    this.listing = foundListing;
  }

}
