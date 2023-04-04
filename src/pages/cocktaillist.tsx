import Header from "@/compenents/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }

const cocktaillist = ({data} :{data: Cocktail[]}) => {

    const [cocktails, setCocktails] = useState<Cocktail[]>([]);

    useEffect(() => {
        setCocktails(data);
    }, [data]);


    return ( 
    <div>
      <Header />
      <h2>cocktail</h2>
          {cocktails.map(item => (
            <div key={item.idDrink}>{item.strDrink}
           <Link href={`cocktail/${item.idDrink}`}> <Image src={item.strDrinkThumb} alt={item.strDrink} width={100} height={100} /> </Link>
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
 
export default cocktaillist;