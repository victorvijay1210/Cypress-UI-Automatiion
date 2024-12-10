
export class formLayoutPage{

    submitInlineForm(name,email){
        cy.contains('nb-card', 'Inline form').find('[placeholder="Jane Doe"]').type(name);
        cy.contains('nb-card', 'Inline form').find('[placeholder="Email"]').type(email);
        cy.contains('nb-card', 'Inline form').find('[type="checkbox"]').check({force: true}).should('be.checked');
        cy.contains('nb-card', 'Inline form').find('[type="submit"]').click();
    }

    submitBasicForm(email, password){
        cy.contains('nb-card', 'Basic form').find('#exampleInputEmail1').type(email);
        cy.contains('nb-card', 'Basic form').find('#exampleInputPassword1').type(password);
        cy.contains('nb-card', 'Basic form').find('[type="checkbox"]').check({force: true}).should('be.checked');
        cy.contains('nb-card', 'Basic form').find('[type="submit"]').click();
    }

}

export const formLayout = new formLayoutPage();