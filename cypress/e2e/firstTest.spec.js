/// <reference types="cypress" />


describe('My First Test', () => {
    it('Visits the local web page', () => {
      cy.visit('/')
      cy.contains('Forms').click();
      cy.contains('Form Layouts').click();
      cy.get('#inputEmail1').type('vijay@gmail.com');
})

  })

  it('Save Subject of the command', () => {
    cy.visit('/')
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');

    //Cypress Aliases approch (we can access this alias globally)
    cy.contains('nb-card', 'Using the Grid').as('usingTheGridForm');
    cy.get('@usingTheGridForm').find('[for="inputEmail1"]').should('contain', 'Email');
    cy.get('@usingTheGridForm').find('[for="inputPassword2"]').should('contain', 'Password');

    //Cypress then method approach (we can access this method locally in side the function)
    cy.contains('nb-card', 'Using the Grid').then(UsingtheGridForm=> {
     cy.wrap(UsingtheGridForm).find('[for="inputEmail1"]').should('contain', 'Email');
     cy.wrap(UsingtheGridForm).find('[for="inputPassword2"]').should('contain', 'Password');
    })


    it('Extracting text values and asserting', () => {

      //approch 1
      cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');
    })

    //approach 2
    cy.get('[for="exampleInputEmail1"]').then(label => {
        const text = label.text();
        expect(text).to.equal('Email address');
        cy.wrap(text).should('contain', 'Email address');
  
    })

    //approach 3
    cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address');

    //approch 4 test property
    cy.get('#exampleInputEmail1').type('vijay@gmail.com')
    cy.get('#exampleInputEmail1').invoke('val').should('equal', 'vijay@gmail.com');
  
})

  
it('Radio buttons', () => {
  cy.visit('/')
  cy.contains('Forms').click();
  cy.contains('Form Layouts').click();
  cy.contains('nb-card', 'Using the Grid').find('input[type="radio"]').then(radio => {
  cy.wrap(radio).eq(0).check({force: true}).should('be.checked');
  cy.wrap(radio).eq(1).check({force: true}).should('be.checked');
  cy.wrap(radio).eq(0).should('not.be.checked');
   
  });
});

it('CheckBoxes', () => {
  cy.visit('/')
  cy.contains('Modal & Overlays').click();
  cy.contains('Toastr').click();
  cy.get('[type="checkbox"]').check({force: true}).should('be.checked');
  cy.get('[type="checkbox"]').uncheck({force: true}).should('not.be.checked'); 
});

it('Date Pickers', () => {
  cy.visit('/')
  cy.contains('Forms').click();
  cy.contains('Datepicker').click();
  cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
  cy.wrap(input).click();
  cy.get('nb-calendar-day-cell').not('.bounding-month').contains('21').click();
  cy.wrap(input).invoke('val').should('equal', 'Nov 21, 2024');
  });
});
it('Drop Downs', () => {
  cy.visit('/')
  cy.get('nav nb-select').then(dropdown => {
    cy.wrap(dropdown).click();
    cy.get('nb-option').each((listItem, index) => {
      const itemText = listItem.text().trim();
      cy.wrap(listItem).click();
      cy.wrap(dropdown).should('contain', itemText);
      if(index < 3){
        cy.wrap(dropdown).click();
      }
    });
  });
});


it('WebTables', () => {
  cy.visit('/')
  cy.contains('Tables & Data').click();
  cy.contains('Smart Table').click();

  //1 get the row by text approch
  cy.get('table').contains('tr','Larry').then(tableRow=>{
  cy.wrap(tableRow).find('.nb-edit').click();
  cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35');
  cy.wrap(tableRow).find('.nb-checkmark').click();
  cy.wrap(tableRow).find('td').eq(6).should('contain', '35');
  })
});


it('Tooltip', () => {
  cy.visit('/')
  cy.contains('Forms').click();
  cy.contains('Modal & Overlays').click();
  cy.contains('Tooltip').click();
  cy.get('nb-card nb-card-body').contains('Default').click();
  cy.get('nb-tooltip').should('contain', 'This is a tooltip');

});


it('Alert handling', () => {
  cy.visit('/')
  cy.contains('Tables & Data').click();
  cy.contains('Smart Table').click();
  // cy.get('.nb-trash').eq(6).click();
  //approch 1 to accept(not a go to approch)
  // cy.on('window:alert', (str) => {
  //   expect(str).to.equal('Are you sure you want to delete?');
  // });

  //to cancel
  cy.get('.nb-trash').eq(6).click();
  cy.on('window:confirm', (str) => {
    return false;
  });

 
  
  });


