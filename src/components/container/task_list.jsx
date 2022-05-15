import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/todo.class';
import TaskComponent from '../pure/task';

//* import styles
import '../../styles/task__list.scss';

const TaskListComponent = () => {
  const defaultTask = [
    new Task(
      'Pasear perro',
      'Llevar al perro a pasear 20 min',
      true,
      LEVELS.level0
    ),
    new Task(
      'Hacer tarea',
      'Terminar la tarea de ingles',
      false,
      LEVELS.level1
    ),
  ];
  //* Component state
  const [tasks, setTask] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  //* Life cycle control using effectState
  useEffect(() => {
    console.log('Task State has been modified');
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log('TaskList component is going to be unmounted');
    };
  }, [tasks]);

  //* Component body to get rendered
  return (
    <div>
      <div className="col-12">
        <Box borderWidth="2px" borderRadius="lg" overflow="hidden">
          {/* Header (Title) */}
          <Box borderWidth="1px" p="1em">
            <h5>To Do:</h5>
          </Box>
          {/* Body (tastks table) */}
          <div
            className="card-body p-2"
            data-mdb-perfect-scrollbar="true"
            style={{ position: 'relative', height: '400px' }}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th scope="col">Title</Th>
                  <Th scope="col">description</Th>
                  <Th scope="col">priority</Th>
                  <Th scope="col">Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task}></TaskComponent>
                  );
                })}
              </Tbody>
            </Table>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default TaskListComponent;
