import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import style from '../styles/Header.module.css';
import { useRouter } from "next/router";



export interface Cocktail {
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

const Header = () => {
  const [search, setSearch] = useState<string>("");
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);

    const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await res.json();
    setCocktails(data.drinks);
    
    router.push({
      pathname: '/search',
      query: { cocktails: JSON.stringify(data.drinks) },
    });
  };





  return (
    <div className={style.div}>
    <header>
      <nav className={style.nav}>
        <ul className={style.ul}>
        <img src="https://www.shutterstock.com/image-vector/martini-icon-logo-vector-alcohol-260nw-275608232.jpg" alt="logo" className={style.img} /> 
        <Link href='/cocktails' > <li className={style.li}>Les 6 dernier</li></Link>
        <Link href='/cocktaillist' ><li className={style.li}>Tous Les cocktails</li></Link> 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
              <Link href='/search'>  <button type="submit">Search</button></Link>
            </form>         
        </div>
        </ul>
      </nav>
    </header>
    </div>
  );
};

export default Header;
