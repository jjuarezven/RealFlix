import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows-service';
import { Show } from '../models/show';
import { ColumnItem } from '../models/ColumnItem';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Array<Show>;
  columns: Array<ColumnItem>;
  loadingShows = false;

  constructor(private showsService: ShowsService) { }

  ngOnInit() {

    this.columns = [
      { field: 'image', header: 'Poster' },
      { field: 'name', header: 'Name' },
      { field: 'genres', header: 'Genres' }
  ];
    this.loadingShows = true;
    this.showsService.getShows().subscribe(result => {
      this.loadingShows = false;
      if (result) {
        this.shows = result;
        console.log(this.shows[0]);
      }
    });
  }

}
