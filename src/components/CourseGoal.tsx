import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

//ReactNode for {children}

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDeleteGoal: (id: number) => void;
}>; // (same as ReactNode)

export default function CourseGoal({
  title,
  id,
  children,
  onDeleteGoal,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button type="button" onClick={() => onDeleteGoal(id)}>
        Delete Goal
      </button>
    </article>
  );
}

//Alternative Syntax
//FC: Functional Components
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
