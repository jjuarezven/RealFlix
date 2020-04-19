import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows-service';
import { Show } from '../models/show';
import { ColumnItem } from '../models/ColumnItem';
import { SearchOptions, EnumUtils, Language } from '../models/enums';
import { SearchCriteria } from '../models/SearchCriteria';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'],
})
export class ShowsListComponent implements OnInit {
  shows: Array<Show>;
  columns: Array<ColumnItem>;
  loadingShows = false;
  searchCriteria: SearchCriteria = new SearchCriteria();
  selectedSearch: string;
  keywordValue: string;
  languageOptions: SelectItem[];
  genreOptions: SelectItem[];
  channelOptions: SelectItem[];
  scheduleDaysOptions: SelectItem[];
  scheduleDayTime: Date;

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.initializeValues();
    this.loadingShows = true;
    this.showsService.getShows().subscribe((result) => {
      this.loadingShows = false;
      if (result) {
        this.shows = result;
      }
    });
  }

  initializeValues() {
    this.columns = [
      { field: 'image', header: 'Poster' },
      { field: 'name', header: 'Name' },
      { field: 'genres', header: 'Genres' }
    ];
    this.languageOptions = [
      { label: 'English', value: 'English' },
      { label: 'Spanish', value: 'Spanish' }
    ];
    this.genreOptions = [
      { label: 'Drama', value: 'Drama' },
      { label: 'Music', value: 'Music' },
      { label: 'Romance', value: 'Romance' },
      { label: 'Science-Fiction', value: 'Science-Fiction' },
      { label: 'Thriller', value: 'Thriller' },
      { label: 'Action', value: 'Action' },
      { label: 'Crime', value: 'Crime' },
      { label: 'Horror', value: 'Horror' },
      { label: 'Mystery', value: 'Mystery' },
      { label: 'Adventure', value: 'Adventure' }
    ];
    this.channelOptions = [
      { label: 'Drama', value: 'Drama' },
      { label: 'Music', value: 'Music' },
      { label: 'Romance', value: 'Romance' },
      { label: 'Science-Fiction', value: 'Science-Fiction' },
      { label: 'Thriller', value: 'Thriller' },
      { label: 'Action', value: 'Action' },
      { label: 'Crime', value: 'Crime' },
      { label: 'Horror', value: 'Horror' },
      { label: 'Mystery', value: 'Mystery' },
      { label: 'Adventure', value: 'Adventure' }
    ];
    this.scheduleDaysOptions = [
      { label: 'Monday', value: 'Monday' },
      { label: 'Tuesday', value: 'Tuesday' },
      { label: 'Wednesday', value: 'Wednesday' },
      { label: 'Thursday', value: 'Thursday' },
      { label: 'Friday', value: 'Friday' },
      { label: 'Saturday', value: 'Saturday' },
      { label: 'Sunday', value: 'Sunday' }
    ];
  }
}
