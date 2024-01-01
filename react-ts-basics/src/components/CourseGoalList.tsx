import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"

type CourseGoalList = {
    goals: CGoal[]
    onDeleteGoals: (id:number) => void
}

const CourseGoalList = ({goals, onDeleteGoals}: CourseGoalList) => {
  return (
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoals}>
                <p>{ goal.description}</p>
            </CourseGoal>
          </li>  
        ))}
      </ul>
  )
}

export default CourseGoalList
