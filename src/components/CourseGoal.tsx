import React, { FC, type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

//ReactNode for {children}

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>; // (same as ReactNode)

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
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
