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
  keywordValue: string;
  languageOptions: SelectItem[];
  genreOptions: SelectItem[];
  channelOptions: SelectItem[];
  scheduleDaysOptions: SelectItem[];
  scheduleDayTime: Date;
  errorSearch = '';

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.initializeValues();
    this.loadingShows = true;
    this.showsService.getShows().subscribe((result) => {
      this.loadingShows = false;
      if (result) {
        this.shows = result;
        console.log(this.shows);
      }
    });
  }

  initializeValues() {
    this.columns = [
      { field: 'imageOriginal', header: 'Poster' },
      { field: 'name', header: 'Name' },
      { field: 'language', header: 'Language' },
      { field: 'networkName', header: 'Channel' },
      { field: 'ratingAverage', header: 'Rating' },
      { field: 'genres', header: 'Genres' }
    ];
    this.languageOptions = [
      { label: 'English', value: 'English' },
      { label: 'Japanese', value: 'Japanese' }
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
      { label: 'ABC', value: 'ABC' },
      { label: 'CBS', value: 'CBS' },
      { label: 'CTV Sci-Fi Channel', value: 'CTV Sci-Fi Channel' },
      { label: 'FOX', value: 'FOX' },
      { label: 'Fuji TV', value: 'Fuji TV' },
      { label: 'FX', value: 'FX' },
      { label: 'HBO', value: 'HBO' },
      { label: 'NBC', value: 'NBC' },
      { label: 'Showcase', value: 'Showcase' },
      { label: 'Showtime', value: 'Showtime' },
      { label: 'TBS', value: 'TBS' },
      { label: 'The CW', value: 'The CW' },
      { label: 'TNT', value: 'TNT' }
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

  onClickOption() {
    this.searchCriteria.Criteria = undefined;
  }

  search() {
    this.errorSearch = '';
    if (this.searchCriteria.Criteria && this.searchCriteria.Type) {
      if (this.searchCriteria.Type === 'Schedule') {
        if (this.scheduleDayTime) {
          this.searchCriteria.Criteria += ` | ${this.scheduleDayTime.getHours()}:${this.scheduleDayTime.getMinutes()}` ;
        }
      }
      this.loadingShows = true;
      this.showsService.getSearch(this.searchCriteria).subscribe(result => {
        this.loadingShows = false;
        if (result) {
          this.shows = [...result];
        } else {
          this.errorSearch = 'No results found';
        }
      });
    } else {
      this.errorSearch = 'Please check your search conditions!!';
    }
  }

}
