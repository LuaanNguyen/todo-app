import React, { FormEvent } from "react";

export default function NewGoal() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text"></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text"></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
