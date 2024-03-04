import { useEffect, useState } from "react";
import { RecipeList } from "./types.ts";

interface BunsListProps
{
    buns: RecipeList;    
}

export const BunsList = (props: BunsListProps) => {
    return (
        <div>
            {recipes.buns.map((bun : recipe) => (
                <div key={bun.slug}>
                    <h2>{bun.name}</h2>
                    <img width={320} src={bun.imageSrc} alt={bun.name} />
                </div>
            ))}
        </div>
    );
};