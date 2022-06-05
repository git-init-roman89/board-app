const boards = [
  {
    id: "board-1",
    title: "Demo Board"
  },
  {
    id: "board-2",
    title: "New Board"
  }
]
const initialBoardData = {
  tasks: {
    "task-1": { id: "task-1", text: "setup a react environment" },
    "task-2": { id: "task-2", text: "create react app" },
    "task-3": {
      id: "task-3",
      text: "create and style a list of data with react",
    },
    "task-4": { id: "task-4", text: "reorder list with react beautiful-dnd" },
    "task-5": {
      id: "task-5",
      text: "persist list reordering with react beautiful-dnd",
    },
    "task-6": {
      id: "task-6",
      text: "customise the appearance of an app during a drag",
    },
    "task-7": {
      id: "task-7",
      text: "customise the appearance of an app using react beautiful-dnd",
    },
    "task-8": {
      id: "task-8",
      text: "designate control of dragging for a react beautiful-dnd",
    },
    "task-9": {
      id: "task-9",
      text: "move items between columns with react beautiful-dnd",
    },
    "task-10": {
      id: "task-10",
      text: "conditionally allow movement using react beautiful-dnd",
    },
    "task-11": { id:"task-11", text: "create reorderable horizontal lists" },
    "task-12": {
      id: "task-12",
      text: "reorder columns with react beautiful-dnd",
    },
    "task-13": {
      id: "task-13",
      text: "optimize performance in react beautiful-dnd",
    },
    "task-14": {
      id: "task-14",
      text: "customize screen reader messages for drag-and-drop",
    },
    "task-15": {
      id: "task-15",
      text: "move items between columns with react beautiful-dnd",
    },
    "task-16": {
      id: "task-16",
      text: "conditionally allow movement using react beautiful-dnd",
    },
    "task-17": { id: "task-17", text: "create reorderable horizontal lists" },
    "task-18": {
      id: "task-18",
      text: "reorder columns with react beautiful-dnd",
    },
    "task-19": {
      id: "task-19",
      text: "optimize performance in react beautiful-dnd",
    },
    "task-20": {
      id: "task-20",
      text: "customize screen reader messages for drag-and-drop",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      subtitle: "Move anything 'ready' here",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"]
    },
    "column-2": {
      id: "column-2",
      title: "BRAINSTORM",
      subtitle: "Add what you'd like to work on below",
      taskIds: ["task-6", "task-7", "task-8", "task-9", "task-10"]
    },
    "column-3": {
      id: "column-3",
      title: "DOING",
      subtitle: "Move anything that is actually started here",
      taskIds: ["task-11", "task-12", "task-13", "task-14", "task-15"]
    },
    "column-4": {
      id: "column-4",
      title: "DONE",
      subtitle: "Move anything from doing to done here",
      taskIds: ["task-16", "task-17", "task-18", "task-19", "task-20"]
    }
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};

export default boards.map(board => {
  return {
    ...board,
    ...initialBoardData
  }
});