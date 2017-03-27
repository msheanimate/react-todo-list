export default action = {
    addTodo(text){
        return {
            type: 'ADD_TODO',
            text: text
        }
    }
}

//store.dispatch(addTodo('some text'));
