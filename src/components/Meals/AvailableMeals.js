import Card from "../UI/Card";
import MealItem from "./MealItem/MealsItem";

import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  const fetchMeals = async() => {
   const response = await  fetch('https://food-order-application-dca6c-default-rtdb.firebaseio.com/meals.json')
    
   if(!response.ok) {
     throw new Error('Something Went Wrong!')
   }

   const responseData = await response.json()
    
    const loadedMeals = []
    for(const key in responseData) {
      loadedMeals.push({
        id:key,
        ...responseData[key]
      })
    }

    setMeals(loadedMeals)
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    })    
  }, [])


  if (isLoading) {
    return <section className={classes['meals-loading']}><p>Loading...</p></section>
  }
  if(httpError) {
    return <section className={classes['meals-error']}><p>{httpError}</p></section>    
  }
  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
