/**
 * @jest-environment jsdom
 */
import add from '../modules/add.js';

jest.mock('../modules/add.js');


describe('test for the add function', () => {

  document.body.innerHTML = 
  '<div>' + 
    '<input type="text" name="task" id="task" class="input-task">' + 
    '<ul class="container-list"></ul>'+ 
  '</div>';

  const TaskList = document.querySelector('.container-list');
  
  test('should add a item to the Localstorage list', () => {
    const newTask = 'Make Breakfast';

    const storage = add(newTask, TaskList);

    expect(storage).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          description: newTask,
          completed: false,
          index: 0,
        })
      ])
    );
  });

  test('Add the new task to the <ul></ul> ', () => {
    const newTask = 'Wash my Teeth';

    add(newTask, TaskList);

    expect(TaskList.children.length).toBe(2);
  });
  
  
});

describe('', () => {
  
})
