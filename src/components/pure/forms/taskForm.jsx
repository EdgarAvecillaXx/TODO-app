import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/todo.class';
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

const TaskForm = ({ add }) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.level0);

  function addTask(e) {
    e.epreventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );

    add(newTask);
  }
  return (
    <Box
      borderWidth="2px"
      margin="1em auto"
      borderRadius="lg"
      p="1em"
      width="100%"
    >
      <FormControl as="fieldset" onSubmit={addTask}>
        <FormLabel as="legend" fontWeight="bold">
          {' '}
          Add a new Task
        </FormLabel>
        <Stack direction={['column', 'column', 'column', 'row']} spacing="24px">
          <VStack width={('20%', '20%', '20%', '100%')}>
            <FormLabel htmlFor="inputName" alignSelf="self-start">
              Name:
            </FormLabel>
            <Input
              ref={nameRef}
              id="inputName"
              variant="flushed"
              size="md"
              required={true}
              autoFocus
            />
          </VStack>
          <VStack width={('55%', '55%', '55%', '100%')}>
            <FormLabel htmlFor="inputDesc" alignSelf="self-start">
              Description:
            </FormLabel>
            <Input
              ref={descriptionRef}
              id="inputDesc"
              variant="flushed"
              size="md"
              required={true}
            />
          </VStack>
          <VStack width={('15%', '15%', '15%', '100%')}>
            <FormLabel alignSelf="self-start">Priority level:</FormLabel>
            <Select ref={levelRef} variant="flushed" id="selectPriority">
              <option value={LEVELS.level0}>Non-Priority</option>
              <option value={LEVELS.level1}>Priority</option>
              <option value={LEVELS.level2}>Important</option>
              <option value={LEVELS.level3}>Urgent</option>
            </Select>
          </VStack>
          <IconButton
            icon={<AddIcon />}
            colorScheme="green"
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
