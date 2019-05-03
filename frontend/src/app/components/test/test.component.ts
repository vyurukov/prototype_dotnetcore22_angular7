import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { Talent } from 'src/app/talent/talent.type';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  subscriptionProfile: Subscription;
  private values: string[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionProfile = this.dataService.getPersonDetails()
        .subscribe(
          result => {
            this.values = result;
          },
          error => {
            console.log(error);
          });

         // this.dataService.getToken();
  }

}
