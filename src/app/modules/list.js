const listWrapper = document.querySelector('.list');

const list = [
  {
    description: 'sasas',
    completed: true
  },
  {
    description: 'sasas',
    completed: true
  },
  {
    description: 'sasas',
    completed: true
  }
];

const listRender = () => {
  list.forEach(element => {
    const list = `
      <li>${element.description}</li>
    `;
    listWrapper.innerHTML += list;
  });
}

export default listRender;