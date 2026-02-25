const monthYear = document.getElementById('month-year');
const grid = document.getElementById('grid');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

  grid.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.classList.add('empty');
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = d;

    if (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add('today');
    }

    grid.appendChild(day);
  }
}

prev.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();