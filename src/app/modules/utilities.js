export const listWrapper = document.querySelector('.list');

function labelHanddle(icon, blur = false) {
  if (!blur) {
    icon.classList.remove('fa-ellipsis-v');
    icon.classList.remove('scroll');
    icon.classList.add('fa-trash-alt');
    icon.classList.add('remove');
    icon.removeEventListener('mousedown');
  } else {
    icon.classList.remove('fa-trash-alt');
    icon.classList.remove('remove');
    icon.classList.add('fa-ellipsis-v');
    icon.classList.add('scroll');
  }
}

export default function checkLabels() {
  Array.from(listWrapper.children).forEach((item) => {
    const label = item.children[1];
    const icon = item.children[2];
    label.addEventListener('click', () => labelHanddle(icon), false);
    label.onblur = () => labelHanddle(icon, true);
  });
}
