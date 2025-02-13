import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialBoards = [
  {
    id: uuidv4(),
    title: "To Do",
    tasks: [{ id: uuidv4(), content: "Task 1" }],
  },
  {
    id: uuidv4(),
    title: "In Progress",
    tasks: [{ id: uuidv4(), content: "Task 2" }],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [{ id: uuidv4(), content: "Task 3" }],
  },
];

const KanbanBoard: React.FC = () => {
  const [boards, setBoards] = useState(initialBoards);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceBoardIndex = boards.findIndex(
      (b) => b.id === source.droppableId
    );
    const destinationBoardIndex = boards.findIndex(
      (b) => b.id === destination.droppableId
    );

    const sourceBoard = boards[sourceBoardIndex];
    const destinationBoard = boards[destinationBoardIndex];

    const sourceTasks = [...sourceBoard.tasks];
    const destinationTasks = [...destinationBoard.tasks];

    const [movedTask] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, movedTask);

    const newBoards = [...boards];
    newBoards[sourceBoardIndex] = { ...sourceBoard, tasks: sourceTasks };
    newBoards[destinationBoardIndex] = {
      ...destinationBoard,
      tasks: destinationTasks,
    };

    setBoards(newBoards);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4">
        {boards.map((board) => (
          <Droppable key={board.id} droppableId={board.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-64 bg-gray-100 p-4 rounded-lg shadow"
              >
                <h2 className="text-lg font-bold mb-2">{board.title}</h2>
                {board.tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 bg-white rounded shadow mb-2"
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
