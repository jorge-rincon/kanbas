import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./stylesKanban/kanban.scss"
import mockData from "../../mockData";
import { Card } from "../card/Card";

export function Kanban() {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex(
        (itemData) => itemData.id === source.droppableId
      );
      const destinationColIndex = data.findIndex(
        (itemData) => itemData.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      //desaparacemos la tarea de la columna de origen
      const [removed] = sourceTask.splice(source.index, 1);
      //agregamos la tarea a la columna destino
      destinationTask.splice(destination.index, 0, removed);
      //actualizamos los datos de las tareas en origen y destino
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban" >
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id} >
            
            {(provided) => (
                    <div ref= { provided.innerRef } { ...provided.droppableProps } className="kanban__section"  >
                        <div className="kanban__section__title" >{ section.title }</div>
                        <div className="kanban__section__content" >
                            {
                              section.tasks.map((task,index) => (
                                <Draggable 
                                    key={task.id} 
                                    draggableId={task.id} 
                                    index = { index } >
                                    {(provided, snaphot) => (
                                      <div 
                                          ref= { provided.innerRef }
                                          { ...provided.draggableProps }
                                          { ...provided.dragHandleProps } 
                                          style={{
                                             ...provided.draggableProps.style,opacity: snaphot.isDragging?"0.5":"1" 
                                          }} >
                                            <Card >
                                              { task.title  }
                                            </Card>
                                      </div>
                                    )}  
                                    
                                </Draggable>
                              ))
                            }
                        </div>
                    </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
