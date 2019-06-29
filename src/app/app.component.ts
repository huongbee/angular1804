import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '#app-root',
  template: `
    <app-product-api></app-product-api>
  `,
  // styles: [
  //   `
  //   h2{
  //     color:red
  //   }
  //   `,
  //   `
  //   p{
  //     font-size: 30px
  //   }
  //   `
  // ]
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://api.openweathermap.org/data/2.5/find?appid=01cc37655736835b0b75f2b395737694&q=Hanoi';
  idCity: number;

  constructor(private http: HttpClient){
    this.http.get(this.url)
    .toPromise()
    .then((result: any) => this.idCity = result.list[0].id)
    .catch(error => console.log(error))
  }
  title = 'angular1804';

  // prop binding
  myClass = 'color-red second-class';

  // style binding
  redColor = 'red';
  blueColor = 'blue';
  fontSize = '40px';

  // ngStyle
  myStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#f3f3f3'
  };

  isValid = false;
  isShow = false;
  arrNumber: number[] = [4, 1, 5, 6, 8];
  // arrNumber: Array<number> = [4, 1, 5, 6];


  // ngClass
  newClass = {
    'color-red': true,
    'second-class': false
  };

  // event binding
  valueInput: string;

  getValue(input: any) {
      this.valueInput = input.value;
  }
  onKeyUp(data: string) {
    // console.log(data);
  }
  changeData(): boolean {
    return this.isShow = !this.isShow;
  }
}
