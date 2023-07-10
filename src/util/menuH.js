export function toggleMenu() {
  const menuButton = document.getElementById('menu-button');
  const menuList = document.querySelector('.menu-list');

  menuButton.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
  });

  const menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.add('hidden');
      setTimeout(() => window.location.href = link.getAttribute("data-url"), 5
      );
    });
  });
}

