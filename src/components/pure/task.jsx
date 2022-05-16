//* Chakra UI & React modules
//* import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon, IconButton, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Badge } from '@chakra-ui/react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

//* Data Models
import { Task } from '../../models/todo.class';
import { LEVELS } from '../../models/levels.enum';

//* Styles
import '../../styles/task.scss';

//* Here start the Component
//* recieve task model, complete func, remove func
const TaskComponent = ({ task, complete, remove }) => {
  //*useEffect Hook if its needed
  /*
  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to be unmounted`);
    };
  });
  */

  //* Priority badge Function
  //* Indicates the priority level for the task
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.level0:
        return (
          <Badge colorScheme="green" fontSize="md" variant="solid">
            {' '}
            {task.level}{' '}
          </Badge>
        );
      case LEVELS.level1:
        return (
          <Badge colorScheme="yellow" fontSize="md" variant="solid">
            {' '}
            {task.level}{' '}
          </Badge>
        );
      case LEVELS.level2:
        return (
          <Badge colorScheme="orange" fontSize="md" variant="solid">
            {' '}
            {task.level}{' '}
          </Badge>
        );
      case LEVELS.level3:
        return (
          <Badge colorScheme="red" fontSize="md" variant="solid">
            {' '}
            {task.level}{' '}
          </Badge>
        );
      default:
        break;
    }
  }

  //* Task completed Icon function
  //* Here we established icon style depending on our task status
  //* false == incompleted icon, true == completed icon
  function taskCompletedIcon() {
    if (task.status === true) {
      return (
        <Icon
          className="task_cursor"
          onClick={() => complete(task)}
          as={MdCheckBox}
          color="green.400"
          boxSize="2em"
        />
      );
    } else {
      return (
        <Icon
          className="task_cursor"
          onClick={() => complete(task)}
          as={MdCheckBoxOutlineBlank}
          color="gray.500"
          boxSize="2em"
        />
      );
    }
  }

  //* Render block
  return (
    //* starts task table
    <Tr className={task.status ? 'task_completed' : 'task_pending'}>
      <Td fontWeight="bold">
        <span>{task.name}</span>
      </Td>
      <Td>
        <span>{task.description}</span>
      </Td>
      <Td className="align-middle">{taskLevelBadge()}</Td>
      <Td textAlign={['center', 'center', 'center', 'left']}>
        {taskCompletedIcon()}
        <IconButton
          className="task_cursor"
          onClick={() => remove(task)}
          colorScheme="red"
          size="sm"
          m="2.5"
          variant="outline"
          icon={<DeleteIcon />}
        />
      </Td>
    </Tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
