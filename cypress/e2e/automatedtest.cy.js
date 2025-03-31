describe("this is an automated tests that creates task, assign tasks and set due dates", () => {
    before(() => {
        cy.visit("https://app.clickup.com/login")
        cy.get("#login-email-input").type("bamijokodamola+oasis@gmail.com")
        cy.get("#login-password-input").type("Oasis1234", {log: false})
        cy.get("button[type='submit']").click()
    })
    it("create tasks", () =>{
        cy.get(".cu-task-list-header__add.ng-star-inserted").click()
        cy.get("input[placeholder='Task Name']").type("New task")
        cy.get(".cu-task-row-new__save-text").click()
    })
})