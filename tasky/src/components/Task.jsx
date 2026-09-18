const Task = (props) => {

    const getPriorityColor = () => {
    if (props.priority === "High") {
        return "red";
    }

    if (props.priority === "Medium") {
        return "orange";
    }

    return "green";
    }

    return (
        <div
            className="card"
            style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}
        >
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p
                className="priority"
                style={{color: getPriorityColor()}}
                >
                Priority: {props.priority}
            </p>
            <p className="description">{props.description}</p>

            <button
                onClick={props.markDone}
                className="doneButton"
            >
                Done
            </button>

            <button
                className="deleteButton"
                onClick={props.deleteTask}
            >
                Delete
            </button>
        </div>
    )
}

export default Task;