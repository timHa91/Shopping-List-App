import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddIngredient = new EventEmitter<Ingredient>();
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value)
    this.onAddIngredient.emit(newIngredient);
  }

}
