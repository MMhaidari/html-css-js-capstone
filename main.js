const lecturers = [
  {
    fullName: 'Yochai',
    degree: 'Berkman Professor of Entrepreneurial Legal Studies',
    details: 'Benkler studies of commons-based peer producation.',
    image: 'img/lecturers/dave.jpg',
  },
  {
    fullName: 'SohYeong Noh',
    degree: 'Director of Art centre Nabi and a board member of CC korea',
    details: 'As the main venue for new media art production in korea.',
    image: 'img/lecturers/customer-6.jpg',
  },
  {
    fullName: 'Lila Tretikov',
    degree: 'Executive Director of the Wikimedia foundation',
    details: 'Lila is the Executive Director of the Wikimedia Foundation.',
    image: 'img/lecturers/customer-5.jpg',
  },
  {
    fullName: 'Kilnam Chon',
    degree: 'Berkman Professor of Entrepreneurial Legal Studies',
    details: 'Kilnam Chon helped bring the Internet to Asia.',
    image: 'img/lecturers/customer-4.jpg',
  },
  {
    fullName: 'Mikel Ross',
    degree: 'President of the Yound Pirates of Europe',
    details:
      'European ingetration, political democracy and participation of the outh through online as his major. ',
    image: 'img/lecturers/customer-2.jpg',
  },
  {
    fullName: 'Ryan Marklry',
    degree: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    details:
      'Ryan has been leading open-source projects as the Mozilla Foundation.',
    image: 'img/lecturers/customer-1.jpg',
  },
];

const featuredCards = document.querySelector('.featured__teacher--container');

let card = '';

lecturers.forEach((item) => {
  const cards = `<div class="featured__teacher-card">
  <div class="teacher--image">
    <img src="${item.image}" alt="teacher picture" height="130px" width="130px">
  </div>
  <div class="teacher--info">
    <h3 class="teacher--name">${item.fullName}</h3>
    <p class="teacher--degree">${item.degree}</p>
    <p class="teacher--about">${item.details}</p>
  </div>
</div>`;
  card += cards;
});

featuredCards.innerHTML += card;
