//* React & Chakra UI modules
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

//* Data models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/todo.class';

//* Styles
import '../../../styles/task.scss';

//* Here starts the Component
//* Recieve addTask func as add prop
const TaskForm = ({ add }) => {

  //* refs to recieve values to declare the to do task
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const statusRef = useRef(false);
  const levelRef = useRef(LEVELS.level0);


  //* add task function
  function addTask() {
    //* new task is declared
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    //* fetch method for adding values
    fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: nameRef.current.value,
        desc: descriptionRef.current.value,
        status: statusRef,
        levelRef: levelRef.current.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));

    add(newTask);
  }

  //* render block 
  return (
    <Box
      borderWidth="2px"
      margin="1em auto"
      borderRadius="lg"
      p="1em"
      width="100%"
    >
      {/* Form element*/}
      <FormControl as="fieldset" onSubmit={addTask}>
        <FormLabel as="legend" fontWeight="bold">
          {' '}
          Add a new Task
        </FormLabel>
        <Stack direction={['column', 'column', 'column', 'row']} spacing="24px">
          {/* name input */}
          <VStack width={('20%', '20%', '20%', '100%')}>
            <FormLabel htmlFor="inputName" alignSelf="self-start">
              Name:
            </FormLabel>
            <Input
              ref={nameRef}
              id="inputName"
              variant="flushed"
              size="md"
              autoFocus
            />
          </VStack>
          {/* description input */}
          <VStack width={('55%', '55%', '55%', '100%')}>
            <FormLabel htmlFor="inputDesc" alignSelf="self-start">
              Description:
            </FormLabel>
            <Input
              ref={descriptionRef}
              id="inputDesc"
              variant="flushed"
              size="md"
            />
          </VStack>
          {/* Level select */}
          <VStack width={('15%', '15%', '15%', '100%')}>
            <FormLabel alignSelf="self-start">Priority level:</FormLabel>
            <Select ref={levelRef} variant="flushed" id="selectPriority">
              <option value={LEVELS.level0}>Non-Priority</option>
              <option value={LEVELS.level1}>Priority</option>
              <option value={LEVELS.level2}>Important</option>
              <option value={LEVELS.level3}>Urgent</option>
            </Select>
          </VStack>
          {/*Adding button*/}
          <IconButton
            className="task_cursor"
            icon={<AddIcon />}
            colorScheme="green"
            onClick={addTask}
            type="submit"
          ></IconButton>
        </Stack>
      </FormControl>
    </Box>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
