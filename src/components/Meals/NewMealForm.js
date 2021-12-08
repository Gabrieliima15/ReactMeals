import classes from "./NewMealForm.module.css";
import Input from "../UI/Input";
import { useState } from "react";
import Card from "../UI/Card";

const NewMealForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const items = {
      id: Math.random().toString(),
      name: enteredName,
      description: enteredDesc,
      price: +enteredPrice,
    };
    props.onAddMeal(items);
    setEnteredName('');
    setEnteredDesc('');
    setEnteredPrice('');
  };

  return (
    <section className={classes.form}>
      <Card>
        <form onSubmit={submitHandler}>
          <Input
            label="Name"
            input={{
              id: "name_input",
              type: "text",
              onChange: nameHandler,
              value: enteredName,
            }}
          />
          <Input
            label="Description"
            input={{
              id: "description_input" + Math.random().toString(),
              type: "text",
              onChange: descHandler,
              value: enteredDesc,
            }}
          />
          <Input
            label="Price"
            input={{
              id: "price_input" + Math.random().toString(),
              type: "number",
              onChange: priceHandler,
              value: enteredPrice,
            }}
          />
          <button className={classes.btn}>Add Meal</button>
        </form>
      </Card>
    </section>
  );
};

export default NewMealForm;
