let tabsBtn = document.querySelectorAll('.product-tabs__nav-btn');
let tabsContent = document.querySelectorAll('.product-tabs__item');

if (tabsBtn) {
  tabsBtn.forEach((el) => {
    el.addEventListener('click', () => {
      let currentEl = el;
      let tabId = currentEl.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentEl.classList.contains('active')) {
        tabsBtn.forEach((el) => {
          el.classList.remove('active');
        });
        tabsContent.forEach((el) => {
          el.classList.remove('active');
        });
      }

      currentEl.classList.add('active');
      currentTab.classList.add('active');
    });
  });
}
