import { v4 as uuidv4 } from 'uuid';
const initialData = {
  tasks: {
    "task-1": { id: uuidv4(), text: "setup a react environment" },
    "task-2": { id: uuidv4(), text: "create react app" },
    "task-3": {
      id: uuidv4(),
      text: "create and style a list of data with react",
    },
    "task-4": { id: uuidv4(), text: "reorder list with react beautiful-dnd" },
    "task-5": {
      id: uuidv4(),
      text: "persist list reordering with react beautiful-dnd",
    },
    "task-6": {
      id: uuidv4(),
      text: "customise the appearance of an app during a drag",
    },
    "task-7": {
      id: uuidv4(),
      text: "customise the appearance of an app using react beautiful-dnd",
    },
    "task-8": {
      id: uuidv4(),
      text: "designate control of dragging for a react beautiful-dnd",
    },
    "task-9": {
      id: uuidv4(),
      text: "move items between columns with react beautiful-dnd",
    },
    "task-10": {
      id: uuidv4(),
      text: "conditionally allow movement using react beautiful-dnd",
    },
    "task-11": { id: uuidv4(), text: "create reorderable horizontal lists" },
    "task-12": {
      id: uuidv4(),
      text: "reorder columns with react beautiful-dnd",
    },
    "task-13": {
      id: uuidv4(),
      text: "optimize performance in react beautiful-dnd",
    },
    "task-14": {
      id: uuidv4(),
      text: "customize screen reader messages for drag-and-drop",
    },
    "task-15": {
      id: uuidv4(),
      text: "move items between columns with react beautiful-dnd",
    },
    "task-16": {
      id: uuidv4(),
      text: "conditionally allow movement using react beautiful-dnd",
    },
    "task-17": { id: uuidv4(), text: "create reorderable horizontal lists" },
    "task-18": {
      id: uuidv4(),
      text: "reorder columns with react beautiful-dnd",
    },
    "task-19": {
      id: uuidv4(),
      text: "optimize performance in react beautiful-dnd",
    },
    "task-20": {
      id: uuidv4(),
      text: "customize screen reader messages for drag-and-drop",
    },
  },
  columns: {
    "column-1": {
      id: uuidv4(),
      title: "TODO",
      subtitle: "Move anything 'ready' here",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"]
    },
    "column-2": {
      id: uuidv4(),
      title: "BRAINSTORM",
      subtitle: "Add what you'd like to work on below",
      taskIds: ["task-6", "task-7", "task-8", "task-9", "task-10"]
    },
    "column-3": {
      id: uuidv4(),
      title: "DOING",
      subtitle: "Move anything that is actually started here",
      taskIds: ["task-11", "task-12", "task-13", "task-14", "task-15"]
    },
    "column-4": {
      id: uuidv4(),
      title: "DONE",
      subtitle: "Move anything from doing to done here",
      taskIds: ["task-16", "task-17", "task-18", "task-19", "task-20"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
  boards: [
    {
      id: uuidv4(),
      title: "Demo Board"
    },
    {
      id: uuidv4(),
      title: "New Board"
    },
    {
      id: uuidv4(),
      title: "New Board"
    },
    {
      id: uuidv4(),
      title: "New Board"
    }
  ]
};

export default initialData;