describe("this is an automated tests that creates task, assign tasks and set due dates", () => {
    before(() => {
        cy.visit("https://app.clickup.com/login")
        cy.get("#login-email-input").type("bamijokodamola+oasis@gmail.com")
        cy.get("#login-password-input").type("Oasis1234", {log: false})
        cy.get("button[type='submit']").click()
    })
    it("create tasks", () =>{
        
    })
})