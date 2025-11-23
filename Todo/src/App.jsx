import { VStack, Heading, Box, Flex, Input, } from "@chakra-ui/react"
import { useState } from "react"
import AddTask from "./components/addTask"
import TaskItem from './components/taskItem'
import EditTask from "./components/editTask"
import { useToast } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion";


export default function App() {


  // Tasks Array
  const [tasks, setTask] = useState([]);
  const [isEditIndex, setIsEditIndex] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [filter, setFilters] = useState('all');

  const toast = useToast()
  console.log(isEditIndex)

  const handelTasks = (input) => {
    if (input.trim() !== "") {
      setTask([...tasks, { id: Date.now(), title: input, completed: false }]);
      toast({
        title: "Task Added",
        description: `"${input}" added Successfully.`,
        status: 'success',
        duration: 1000,
        position: 'top',
        isClosable: true
      })
    }

    else {
      toast({
        title: "Empty Task",
        description: "Please enter task title.",
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  }

  // Toggle complete by id
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    const currentTask = tasks.find(t => t.id === id);

    toast({
      title: currentTask.completed ? "Move to pending" : "Task Completed!",
      description: currentTask.completed ? "Task marked as pending again." : "Great job! You completed this task.",
      status: currentTask.completed ? "warning" : "success",
      duration: 600,
      isClosable: true,
      position: 'top',
    })

    setTask(updatedTasks);
  };

  // Delete by id
  const handelDelete = (id) => {
    const deltedTask = tasks.find(deleted => deleted.id === id)
    toast({
      title: "Task Deleted",
      description: `"${deltedTask.title}" Remove Successfully.`,
      status: 'error',
      duration: 1000,
      position: 'top',
      isClosable: true
    })
    setTask(tasks.filter(task => task.id !== id));
  };


  // Edit Task
  const handelEdit = (index) => {
    setIsEditOpen(true);
    setIsEditIndex(index);
  }

  // Save Edit Task
  const saveEditTask = (updatedvalue) => {
    const updatedTask = [...tasks]
    updatedTask[isEditIndex] = { ...updatedTask[isEditIndex], title: updatedvalue };
    toast({
      title: "Task uptated",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });

    setTask(updatedTask);
    setIsEditIndex(null);
    setIsEditOpen(false);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;   // agar checkbox complete 
    return true;
  });


  return (

    <>

      <Box bg={'#f0f2f32c'} h={"100vh"} w='100%'>
        <VStack py={'40px'} color={'blue.700'}>

          <Heading>Todo List App</Heading>

          {/* Components */}
          <AddTask handelTasks={handelTasks} filter={filter} setFilters={setFilters} />

          {tasks.length > 0 && (
            <Flex
              borderRadius={'4px'}
              direction={"column"}
              py={'10px'}
              w={["100px", "200px", "800px"]}
              bg={'#a1a3a32d'} >

              <AnimatePresence>
                {filteredTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={() => toggleComplete(task.id)}
                    handelDelete={() => handelDelete(task.id)}
                    handelEdit={() => handelEdit(tasks.findIndex(t => t.id === task.id))}
                  />
                ))}
              </AnimatePresence>



            </Flex>

          )}

          {isEditIndex !== null && (
            <EditTask
              isOpen={isEditOpen}
              onClose={() => setIsEditOpen(false)}
              task={tasks[isEditIndex]}
              onSave={saveEditTask}
            />
          )}

        </VStack >

      </Box >
    </>
  )
}