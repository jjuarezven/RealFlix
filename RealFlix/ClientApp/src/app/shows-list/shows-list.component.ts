import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows-service';
import { Show } from '../models/show';
import { ColumnItem } from '../models/ColumnItem';
import { SearchOptions, EnumUtils, Language } from '../models/enums';
import { SearchCriteria } from '../models/SearchCriteria';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: Array<Show>;
  columns: Array<ColumnItem>;
  loadingShows = false;
  searchCriteria: SearchCriteria = new SearchCriteria();
  selectedSearch: string;
  keywordValue: string;
  languageOptions: [];

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
      }
    });
    var r = Object.entries(Language).map(x => x.values);
    console.log(r);
  }

  handleSelection(selection: any) {
    this.selectedSearch = selection;
    console.log(selection);
  }

}
