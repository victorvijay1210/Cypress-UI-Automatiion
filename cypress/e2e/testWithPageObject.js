import { navigateTo } from "../support/page_objects/navigationPage";
import { formLayout } from "../support/page_objects/formLayoutPage";
import { datePicker } from "../support/page_objects/datePickerPage";
describe('Test with Page Objects', () => {

    beforeEach(() => {
        cy.visit('/');
    })


    it('Navigation Across the application', () => {
        navigateTo.formLayoutPageNavigation();
        navigateTo.datePickerPageNavigation();
        navigateTo.calendarPageNavigation();
        navigateTo.calendarPageNavigation();
        navigateTo.dialogPageNavigation();
        navigateTo.windowPageNavigation();
      
    })

    it('Submit inline form and Basic form', () => {
        navigateTo.formLayoutPageNavigation();
        formLayout.submitInlineForm('victor vijay','victor@gmail.com');
        formLayout.submitBasicForm('victor@gmail.com','password123');
     })

     it.only('Select the date', () => {
        navigateTo.datePickerPageNavigation();
        datePicker.selectDate('20');   
     })

    })