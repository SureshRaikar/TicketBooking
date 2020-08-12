import React, { useState, useCallback } from 'react';

const MyTasks = () => {
  const [taskCount, setTaskCounts] = useState(0);

  // Hook prevents the child component rendering if the dependency is not changed at all 
  const addTaskCount = useCallback(() => {
    setTaskCounts(taskCount + 1);
  }, [] ); // now check the child comp log in line number 23 
  // change the dependency to [taskCount] 
  // and see how it works by checking the log

  return(
    <div>
      <h2>useCallback | Demo </h2>
      <p>Task Count: {taskCount }</p>
      <Increment action={addTaskCount}></Increment>
    </div>
  )
}

const Increment = (props) => {
  console.log('Rendering Child comp'); 
  return(
    <button onClick={props.action}>Increment</button>
  )
}

export default MyTasks;