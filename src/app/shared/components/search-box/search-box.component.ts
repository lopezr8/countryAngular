import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();
  //? otra forma: public onValue = new EventEmitter<string>();
  @Input()
  public placeholder:string = '';


  emitValue(val:string):void{
    this.onValue.emit(val);

  }
}
