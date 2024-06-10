import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hook/useWorkoutsContext"

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            console.log(response)
            const json = await response.json()
            
            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    
                    <p key={workout._id}>{workout.title}</p>

                ))}
            </div>
        </div>
    )
}

export default Home