function todoReducer(state = [], action) {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state, // spreading array using es6 spread operator 
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ]
    case 'EDIT_TODO':
      return [];
    case 'DELETE_TODO':
      return [];
    default:
      return [];
  }
}

export default todoReducer;