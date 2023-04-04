import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const search = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const {id} = useRouter().query;

    console.log(id);
    

    useEffect(() => {
        getCocktails();
    }, [id]);


    const getCocktails = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`);
        const data = await res.json();
        setCocktails(data.drinks);
    }
  


    return (  
        <div>
            {/* {cocktails.map((cocktail) => (
                <div key={cocktail.idDrink}>
                    <h1>{cocktail.strDrink}</h1>
                    <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width={100} height={100} />
                </div>
            ))}           */}
        </div>
    );
}
 
export default search;