import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalProps) {
  //   function handleDeleteGoal(id: number) {
  //     setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  //   }

  return (
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
  );
}
