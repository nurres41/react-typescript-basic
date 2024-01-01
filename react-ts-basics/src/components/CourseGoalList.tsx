import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"
import InfoBox from "./InfoBox"
import { ReactNode } from "react"

type CourseGoalList = {
    goals: CGoal[]
    onDeleteGoals: (id:number) => void
}

const CourseGoalList = ({goals, onDeleteGoals}: CourseGoalList) => {
  
  if(goals.length === 0){
    return <InfoBox mode="hint"> You have no course goals yet. Start adding some!</InfoBox>
  }

  let warningBox: ReactNode;

  if(goals.length >= 4){
    warningBox = <InfoBox mode='warning' severity="high">You are collecting a lot of goals. Do not put too much on your plate!</InfoBox>
  }
  
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoals}>
                <p>{ goal.description}</p>
            </CourseGoal>
          </li>  
        ))}
      </ul>
      </>
  )
}

export default CourseGoalList
