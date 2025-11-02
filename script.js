const searchBar = document.getElementById('searchBar');
const subjects = document.querySelectorAll('.subject-card');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  subjects.forEach(subject => {
    const title = subject.querySelector('h3').textContent.toLowerCase();
    subject.style.display = title.includes(query) ? 'block' : 'none';
  });
});
