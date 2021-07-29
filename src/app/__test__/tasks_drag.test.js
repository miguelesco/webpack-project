/**
 * @jest-environment jsdom
 */
import add from '../modules/add.js';
import checkCompleted from '../modules/completed.js';
import drag from '../modules/drag.js';
import updateItems from '../modules/__mocks__/updateItems.js';
import remove from '../modules/remove.js';

jest.mock('../modules/remove.js');
jest.mock('../modules/add.js');
jest.mock('../modules/completed.js');
jest.mock('../modules/drag.js');

describe('editing the task description', () => {
  document.body.innerHTML = `<div class="list-container">
    <ul class="container-list"></ul>
  </div>`;

  const ul = document.querySelector('.container-list');

  const listTask = [
    'Make Candy',
    'Buy Ticket',
    'Send Video'
  ];

  listTask.forEach(element => add(element, ul));

  
  test('the task should change his value in the storage', () => {
    // The first task is Make Candy now lets change that
    const newDescription = 'Change Task description';
    const descriptionUpdate = updateItems(0, newDescription, ul);

    expect(descriptionUpdate[0].description).toBe('Change Task description')
  });

  test('The task should change in the ul', () => {
    const firstElementofTheList = ul.children[0];

    expect(firstElementofTheList.textContent)
    .toContain('Change Task description');
  });
  
  
});

describe('Test for the update completed method', () => {
  const ul = document.querySelector('.container-list');

  
  test('completed property should change to TRUE', () => {
    const indexOfElementCompleted = 1;

    const updateCompleted = checkCompleted(ul, indexOfElementCompleted);

    expect(updateCompleted[indexOfElementCompleted].completed).toBe(true);
  });
  
});

describe('Test Drag/Drop functionality', () => {
  const ul = document.querySelector('.container-list');

  test('change the index of the elements on drag', () => {
    const dragElement = 0;
    const dropElement = 2;

    const newStorage = drag.swap(dragElement, dropElement, ul);

    expect(newStorage).toEqual(
      expect.arrayContaining([
        {
          description: 'Send Video',
          completed: false,
          index: 0
        },
        {
          description: 'Buy Ticket',
          completed: true,
          index: 1
        },
        {
          description: 'Change Task description',
          completed: true,
          index: 2
        },
      ])
    );
  });
  
  test('change the index of the elements on drag again', () => {
    const dragElement = 1;
    const dropElement = 2;

    const newStorage = drag.swap(dragElement, dropElement, ul);

    expect(newStorage).toEqual(
      expect.arrayContaining([
        {
          description: 'Send Video',
          completed: false,
          index: 0
        },
        {
          description: 'Change Task description',
          completed: true,
          index: 1
        },
        {
          description: 'Buy Ticket',
          completed: true,
          index: 2
        },
      ])
    );
  });
  

});





