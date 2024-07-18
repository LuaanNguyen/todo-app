import React, { FormEvent } from "react";

export default function NewGoal() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    new FormData(e.currentTarget);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal"></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" name="summary"></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
