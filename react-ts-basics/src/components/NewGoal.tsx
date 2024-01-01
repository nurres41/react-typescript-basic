import { FormEvent, useRef } from "react";

interface AddGoal {
    onAddGoal: (goal:string, summary:string) => void
}

const NewGoal = ( {onAddGoal}: AddGoal) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null) ;

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = goal.current!.value;

        //Reset to inputs after get true data
        event.currentTarget.reset();

        onAddGoal(enteredGoal,enteredSummary)
    }

  return (
    <form onSubmit={handleSubmit}>
          <p>
              <label htmlFor="goal">Your Goal</label>
              <input ref={goal} id="goal" type="text"  />
        </p>
          <p>
              <label htmlFor="summary">Short Summary</label>
              <input ref={summary} id="summary" type="text" />
        </p>
        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal
