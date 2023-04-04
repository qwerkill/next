import Header from "@/compenents/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }
  

const cocktails = ({data}:{data: Cocktail[]} ) => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [cocktailsRondom, setCocktailsRondom] = useState<Cocktail[]>([]);

    useEffect(() => {
        setCocktails(data);
        console.log("ezarzaerazer",cocktails);
        dataRondom();
    }, [data]);


    const dataRondom = async () => {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        setCocktailsRondom(data.drinks);
        console.log("ezarzaerazer",cocktailsRondom);
    } 

  
    const cocktailCut = cocktails.slice(data.length - 6,)

      return (
        <div>
          <Header/>
          <h2>cocktail random</h2>
          {cocktailsRondom.map(item => (
            <div key={item.idDrink}>{item.strDrink}
            <Image src={item.strDrinkThumb} alt={item.strDrink} width={100} height={100} />
            </div>
          ))}
          <h2>cocktail</h2>
          {cocktailCut.map(item => (
            <div key={item.idDrink}>{item.strDrink}
            <Image src={item.strDrinkThumb} alt={item.strDrink} width={100} height={100} />
            </div>
          ))}
        </div>
      );
    }
    
    export async function getStaticProps() {
      const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      const data = await res.json();

    
      return {
        props: {
          data: data.drinks,
        },
      };
    }

    



export default cocktails;