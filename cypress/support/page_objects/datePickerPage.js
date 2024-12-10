export class datePickerPage{


    selectDate(date) {
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click();
            cy.get('nb-calendar-day-cell').not('.bounding-month').contains(date).click();
            cy.wrap(input).invoke('val').should('contains', `${date}` ,'2024');
        });  
    }
 
}


export const datePicker = new datePickerPage();