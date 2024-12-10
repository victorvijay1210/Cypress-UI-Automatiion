function clickIfAttributeIs(selector, attribute, value) {
  cy.contains(selector).then(($element) => {
    if ($element.attr(attribute) === value) {
      cy.wrap($element).click();
    }
  });
}

export class navigationPage {
  formLayoutPageNavigation() {
    clickIfAttributeIs("Forms", "aria-expanded", "false");
    cy.contains("Form Layout").click();
  }

  datePickerPageNavigation() {
    clickIfAttributeIs("Forms", "aria-expanded", "false");
    cy.contains("Datepicker").click();
  }

  calendarPageNavigation() {
    clickIfAttributeIs("Extra Components", "aria-expanded", "false");
    cy.contains("Calendar").click();
  }

  dialogPageNavigation() {
    clickIfAttributeIs("Modal & Overlays", "aria-expanded", "false");
    cy.contains("Dialog").click();
  }

  windowPageNavigation() {
    clickIfAttributeIs("Modal & Overlays", "aria-expanded", "false");
    cy.contains("Window").click();
  }

  tooltipPageNavigation() {
    clickIfAttributeIs("Modal & Overlays", "aria-expanded", "false");
    cy.contains("Tooltip").click();
  }
}

export const navigateTo = new navigationPage();
