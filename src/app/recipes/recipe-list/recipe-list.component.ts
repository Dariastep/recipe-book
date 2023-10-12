import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'This a description', 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg'),
  new Recipe('Test Recipe', 'This a description', 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg', ),
  new Recipe('Test Recipe', 'This a description', 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg', )
];

constructor() {
}

  protected readonly Recipe = Recipe;
}
