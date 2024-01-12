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

export type RecipeList = Recipe[];