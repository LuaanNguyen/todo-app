import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.id.toString()}
            onDeleteGoal={onDeleteGoal}
          >
            <p>Learn React and TypeScript from the ground up. </p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
