import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strImageSource: string;
    strImageAttribution: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
  }

const cocktail = () => {
    const [cocktail, setCocktail] = useState<Cocktail[]>([])
    const {id} = useRouter().query;

    useEffect(() => {
        fetchCocktail();
    }, [id]);

    console.log(id);

    const fetchCocktail = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setCocktail(data.drinks);
        console.log(data.drinks);
    }

 
    return (  
        <div>
            <h1>cocktail</h1>
            {cocktail.map(item => (
                <div key={item.idDrink}> 
               <h1> {item.strDrink} </h1>
                <Image src={item.strDrinkThumb} alt={item.strDrink} width={100} height={100} />
                </div>
            ))}

        </div>
    );
}
 

export default cocktail;