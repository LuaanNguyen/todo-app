import { FormEvent } from "react";
import { useRef } from "react";

type NewGoalProps = {
  onAddGoal: (name: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset(); //reset the form after submission

    if (enteredGoal === "") {
      alert("Goal can't be empty");
    } else {
      onAddGoal(enteredGoal, enteredSummary);
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
