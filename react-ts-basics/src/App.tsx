import './App.css'
import CourseGoal from './components/CourseGoal';
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number
}

function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]); 

  function handleAddGoal(goal:string,summary:string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <Header image={{ src: goalsImg, alt: "Pokemon" }} >
        <h1>Your Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoals={handleDeleteGoal} />
    </>
  )
}

export default App
