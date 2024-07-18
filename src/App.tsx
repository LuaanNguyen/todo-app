import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.png";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

export type CourseGoal = {
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

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>To-do Tasks</h1>
      </Header>
      <CourseGoalList goals={goals} />
      <button type="button" onClick={handleAddGoal}>
        Add Goal
      </button>
    </main>
  );
}

export default App;
