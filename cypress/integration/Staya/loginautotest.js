describe('Проверка формы логина и пароля на сайте Staya', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('mr.miks9999@mail.ru');
         cy.get('.auth-form > form > [type="password"]').type('Qwerty120');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы');
         cy.get('button.profile__nav-link').click();
     })
     it('Верный логин, неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mr.miks9999@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('qwerty120');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
 })