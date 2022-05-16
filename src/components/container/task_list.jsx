//* Chakra UI & react modules
import {
  Box,
  Container,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

//* Child Components
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

//* Data models
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/todo.class';
import { getAllData } from '../../models/fetch';

//* Styles
import '../../styles/task.scss';

//* Here starts Component
const TaskListComponent = () => {
  let defaultTask = [];
  //* Component state
  const [tasks, setTasks] = useState(defaultTask);

  //* Life cycle control using effectState
  useEffect(() => {
    ObtainTasks();
  }, []);

  //* Function to obtain allData from JSONplaceholder
  const ObtainTasks = () => {
    //* call fetch model
    getAllData().then(response => {
      console.log(Object.values(response));
      //* enter values in an temp array,
      const array = Object.values(response);
      //* mapping fuction, to obtain a Task element for each index
      const arrayFinal = array.map(element => {
        return new Task(
          element.id,
          element.title,
          element.completed,
          LEVELS.level0
        );
      });
      console.log(`es Array(): ${Array.isArray(array)}`);
      //* modify our tasks state
      setTasks(arrayFinal);
    });
  };

  //* This function toggles completed status of the task
  //* This function is related to the complete icon
  function completedTask(task) {
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];

    //* In this point the status prop is toggled
    tempTask[index].status = !tempTask[index].status;
    //* useState hook to change our prop value
    setTasks(tempTask);
  }

  //* this function remove the task
  //* this function is related to the delete button
  function removeTask(task) {
    console.log(Object.values(task));
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];

    //* In this point the task is removed
    tempTask.splice(index, 1);
    //* Update our task list with useState hook
    setTasks(tempTask);
  }

  //* this function creates a new task element
  //* this function is related to taskFrom component
  function createTask(task) {
    console.log(Object.values(task));
    const tempTask = [...tasks];

    //* Here the new task is added
    tempTask.push(task);
    //* Create a new task with useState hook
    setTasks(tempTask);
  }

  //* Table task structure
  const TaskTable = () => {
    return (
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
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                remove={removeTask}
              ></TaskComponent>
            );
          })}
        </Tbody>
      </Table>
    );
  };

  //* ternary element in case there are no tasks
  const taskList =
    tasks.length > 0 ? (
      <TaskTable />
    ) : (
      <Container>
        <Heading fontSize="3xl" letterSpacing="2px" p="1em 1em 1em 0em">
          'There are no tasks to show'
        </Heading>
        <Heading fontSize="2xl" letterSpacing="1px" p="1em 1em 1em 0em">
          'Please create a new one'
        </Heading>
      </Container>
    );

  //* Component body to get rendered
  return (
    <div>
      <div className="col-12">
        <TaskForm add={createTask}></TaskForm>
        <Box borderWidth="2px" borderRadius="lg" overflow="hidden">
          {/* Header (Title) */}
          <Box borderWidth="1px" p="1em">
            <Heading as="h1">To Do:</Heading>
          </Box>
          {/* Body (tastks table) */}
          {taskList}
          <div
            className="card-body p-2"
            data-mdb-perfect-scrollbar="true"
            style={{ position: 'relative', height: '400px' }}
          ></div>
        </Box>
      </div>
    </div>
  );
};

export default TaskListComponent;
