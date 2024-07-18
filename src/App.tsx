import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.png";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";
import usePersistantState from "./hooks/usePersistantState.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = usePersistantState<CourseGoal[]>("goals", []);
  //const [goals, setGoals] = useState<CourseGoal[]>([]);
  // or const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals: CourseGoal[]) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals: CourseGoal[]) =>
      prevGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>To-do List</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
