import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'node-calculator';
  nodes = 0;
  level = 0;
  width = 0;

  onKeyUp(type: string, event: any): void {
    switch(type) {
      case "width": this.width = event.target.value; break;
      case "level": this.level = event.target.value; break;
      default: console.log("Not supported");
    }
    this.nodes = this.getNodes(this.width, this.level);
  }

  getNodes(x: number, y: number): number {
    let arr: number[] = [], n: number = 0;
    if(y > 0) {
      for(let i: number = 0; i <= y; i++) {
        if(i === 0) arr.push(1);
        else arr.push(arr[i-1]*x);
        n = n + arr[i];
      }
    } else {
      if(y === 0) n = 1;
      else console.log("Error al calcular los nodos");
    }
    return n;
  }

}
