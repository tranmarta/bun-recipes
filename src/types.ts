export type Ingredient = string;

export type Instruction = string;

export interface Recipe {
    name: string;
    slug: string;
    country: string;
    description: string;
    imageSrc: string;
    ingredients: Ingredient[];
    instructions: Instruction[];
}

export interface recipePreview {
    name: string;
    imageSrc: string;
}
export type RecipeList = Recipe[];