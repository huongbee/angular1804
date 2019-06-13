import { Component } from '@angular/core';

@Component({
  selector: '#app-root',
  // template: `
  //   <h2>Hello Angular</h2>
  //   <p>Welcome</p>
  // `,
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  isShow = true;

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

}
