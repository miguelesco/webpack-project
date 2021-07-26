import checkLabels from './utilities.js';
import render from './list.js';
import checkCompleted from './completed.js';
import drag from './drag.js';


export default function Reload () {
  render();
  checkLabels();
  drag.handdler();
  checkCompleted();
}