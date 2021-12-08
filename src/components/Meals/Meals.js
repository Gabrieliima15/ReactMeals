import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import NewMealForm from "./NewMealForm";
import { Fragment, useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const [items, setItems] = useState(DUMMY_MEALS);

  const onAddMealHandler = (enteredItems) => {
    setItems((prevItems) => {
      return [enteredItems, ...prevItems];
    });
  };

  return (
    <Fragment>
      <MealsSummary />
      <NewMealForm onAddMeal={onAddMealHandler} />
      <AvailableMeals items={items} />
    </Fragment>
  );
};

export default Meals;
