import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.png";
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  // or const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "New Goal",
        description: "New Description",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>To-do Tasks</h1>
      </Header>
      <button type="button" onClick={handleAddGoal}>
        Add Goal
      </button>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.id.toString()}>
              <p>Learn React and TypeScript from the ground up. </p>
            </CourseGoal>
            <button type="button" onClick={() => handleDeleteGoal(goal.id)}>
              Delete Goal
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
