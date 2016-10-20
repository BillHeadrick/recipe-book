import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicago Dog', 'Excellent', 'http://www.viennabeef.com/filebin/images/historyOfChicagoDog.jpg', [
      new Ingredient('Sesame Seed Bun', 1),
      new Ingredient('Hot Dog', 1)
    ]),
    new Recipe('Dallas Dog', 'Deep Fried Goodness', 'http://www.wienerschnitzel.com/wp-content/uploads/2014/10/corndog_main.jpg', [])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
