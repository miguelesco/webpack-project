/**
 * @jest-environment jsdom
 */
import add from '../modules/add.js';
import remove from '../modules/remove.js';

jest.mock('../modules/add.js');
jest.mock('../modules/remove.js');
describe('test for the add function', () => {
  document.body.innerHTML = '<div>'
     + '<input type="text" name="task" id="task" class="input-task">'
     + '<ul class="container-list"></ul>'
   + '</div>';
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
        }),
      ]),
    );
  });
  test('Add the new task to the <ul></ul> ', () => {
    const newTask = 'Wash my Teeth';
    add(newTask, TaskList);
    expect(TaskList.children.length).toBeGreaterThan(1);
  });
});
describe('Test for the remove functions', () => {
  document.body.innerHTML = `<div class="list-container">
     <ul class="container-list"></ul>
   </div>`;
  const TaskList = document.querySelector('.container-list');
  test('remove a element', () => {
    const newElement = 'Make Candy';
    add(newElement, TaskList);
    // right now there is 3 elements in the storage
    const indexToRemove = 0;
    const removeElement = remove.element(indexToRemove, TaskList);
    expect(removeElement).toEqual(
      expect.arrayContaining([
        {
          description: 'Wash my Teeth',
          completed: false,
          index: 0,
        },
        {
          description: newElement,
          completed: true,
          index: 1,
        },
      ]),
    );
  });
  test('The element with the index 0 should remove', () => {
    expect(TaskList.children.length).toBe(2);
  });
  
  test('remove all elements in the storage', () => {
    const removeAll = remove.all(TaskList);
    expect(removeAll.length).toBe(0);
  });
  test('The ul should be empty', () => {
    expect(TaskList.children.length).toBe(0);
  });
});
