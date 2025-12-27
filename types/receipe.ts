export interface Recipe {
    favorites: any;
    id: string;
    name: string;
    description?: string | null;
    time: number;
    cuisine: string;
    pantryMatch?: number | null;
    ingredients: string[];
    instructions?: string | null;
    imageUrl?: string | null;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface Favorite {
    id: string;
    userId: string;
    recipeId: string;
    recipe?: Recipe;
    createdAt: string;
  }
  
  