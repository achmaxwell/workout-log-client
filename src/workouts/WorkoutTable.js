import React from 'react';
import { Table, Button } from 'reactstrap';

const WorkoutTable = (props) => {

    const workoutMapper = () => {
        return props.workouts.map((workout, index) => {
            return(
            <tr key={index}>
                <th scope="row">{workoutMapper.id}</th>
                <td>{workout.result}</td>
                <td>{workout.description}</td>
                <td>{workout.definition}</td>
                <td>
                    <Button color="warning">Update</Button>
                    <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                </td>
            </tr>
            )
        })
    }

    const deleteWorkout = (workout) => {
        fetch(`http://localhost:3000/log/${workout.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-type': 'application/json',
            'Authorization': props.token
            })
        }).then(() => props.fetchWorkouts())
    }

    return(
        <div>
            <h3>Workout History</h3>
            <hr />
            <Table striped>
                <thread>
                    <tr>
                        <th>#</th>
                        <th>Results</th>
                        <th>Description</th>
                        <th>Definition</th>
                    </tr>
                </thread>
                <tbody>

                </tbody>
            </Table>
        </div>
    );
};

export default WorkoutTable;