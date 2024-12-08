export default function burgerMenu(): void {
  const bodyElement: HTMLBodyElement | null = document.querySelector('body');
  const burgerMenuIcon: HTMLElement | null =
    document.querySelector('.burger-menu');
  const asideElement: HTMLElement | null = document.querySelector('aside');

  if (bodyElement) {
    bodyElement.addEventListener('pointerdown', burgerMenuHandler);
  }

  /**
   *  Burger - menu and aside panel logic for opening / closing at tablet device widths (<=768px).
   *  Also defines @type {HTMLAnchorElement} nav__link behavior and logic
   *
   * @param {PointerEvent} event - pointer event (click, tap)
   * @returns {void}
   */
  function burgerMenuHandler(event: PointerEvent): void {
    if (!(event.target instanceof HTMLElement)) {
      throw new Error(`the 'event.target' is not an HTMLElement!`);
    }

    if (!bodyElement) {
      throw new Error(`Body has not been loaded!`);
    }

    if (!burgerMenuIcon) {
      throw new Error(`Burger Menu has not been loaded!`);
    }

    if (!asideElement) {
      throw new Error(`Aside has not been loaded!`);
    }

    // tablet only (<=768px)
    // open burger menu if clicked at the burger menu;
    if (
      event.target.closest('.burger-menu') ||
      event.target.closest('.nav__link')
    ) {
      // deal with nav__link that not closing burger - menu
      // the nav__link behavior
      if (event.target.dataset.burgerMark === 'non-closing') {
        event.target.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // burger menu and aside close / open logic
      if (burgerMenuIcon.classList.contains('burger-menu_active')) {
        bodyElement.classList.remove('body_scroll-lock');
        burgerMenuIcon.classList.remove('burger-menu_active');
        asideElement?.classList.remove('_aside_active');
      } else {
        bodyElement.classList.add('body_scroll-lock');
        burgerMenuIcon.classList.add('burger-menu_active');
        asideElement?.classList.add('_aside_active');
      }
    }

    // close burger menu if click was out of the burger menu or aside
    if (
      !(event.target.closest('.burger-menu') || event.target.closest('aside'))
    ) {
      if (burgerMenuIcon.classList.contains('burger-menu_active')) {
        bodyElement.classList.remove('body_scroll-lock');
        burgerMenuIcon.classList.remove('burger-menu_active');
        asideElement?.classList.remove('_aside_active');
      }
    }
  }
}
