describe("this is an automated tests that creates task, assign tasks and set due dates", () => {
    before(() => {
        cy.visit("https://app.clickup.com/login")
        cy.get("#login-email-input").type("bamijokodamola+oasis@gmail.com")
        cy.get("#login-password-input").type("Oasis1234", {log: false})
        cy.get("button[type='submit']").click()
    })
    it("create tasks, assigns tasks and sets due date", () => {
        cy.get(".cu-task-list-header__add.ng-star-inserted").first().click()
        cy.get("input[placeholder='Task Name']").should('be.visible').type("New task")
        cy.get(".cu-task-row-new__save-text").click() // creates new task
        cy.get('[data-test="task-row__assignee-placeholder"]').eq(0).click()
        cy.get('[data-test="task-field-label-icon__container-Assignees"] > .cu-task-label-icon__label').click()
        cy.get('[data-test="user-list__bamijokodamola+oasis@gmail.com"]').click()  //assigns task
        cy.get('[data-test="recurring-date-dropdown__dropdown"] > .cu-dropdown__toggle > .cu-task-hero-section__row-data').click()
        cy.get('.cu-calendar-day_selected').should('be.visible').contains('2').click(); // sets due date 

    })

})