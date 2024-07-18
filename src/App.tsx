import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.png";
import Header from "./components/Header.tsx";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn ReactTS">
        <p>Learn React and TypeScript from the ground up. </p>
      </CourseGoal>
    </main>
  );
}

export default App;
