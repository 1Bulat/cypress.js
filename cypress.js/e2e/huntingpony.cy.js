describe('Автотест для [HuntingPony]', function () {
   it('Покупка товара', function () {
        cy.visit('https://huntingpony.com/'); //Переходим на сайт
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click(); //кликаем раздел
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click(); //кликаем товар
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click(); //добавляем в корзину
        cy.get('[data-add-cart-counter-plus=""]').click(); //2шт
        cy.get('.header__cart > .icon').click(); //Переходим в корзину
        cy.get('.cart-controls > .button').click(); //Оформляем заказ
        cy.contains('Оформление заказа').should('be.visible'); //Проверяем форму      
    })
  })