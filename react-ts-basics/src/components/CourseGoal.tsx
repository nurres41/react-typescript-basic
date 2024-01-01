import { PropsWithChildren } from "react"

// Children ReactNode define automaticly
type CourseGoalProps = PropsWithChildren<{ id: number, title: string; onDelete: (id: number) => void; }>

const CourseGoal = ({title, children, id, onDelete}: CourseGoalProps) => {
  return (
    <article>
          <div>
              <h2>{ title}</h2>
              {children}
          </div>
          <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal
