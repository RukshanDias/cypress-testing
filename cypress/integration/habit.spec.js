/// <reference types="cypress"/>

describe("Habit dashboard", () => {
    beforeEach(() => {
        cy.visit("/habits");
    });

    it("should display model on add btn clicked", () => {
        // 1. click on btn
        cy.contains("button", "Add").click();

        // 2. check the text available
        cy.contains("Add a new habit").should("be.visible");
    });

    it("should display habit card when created", () => {
        cy.get("#habit-add-btn").click();
        cy.get("input[placeholder='Habit']").type("Drink a cup of water");
        cy.contains("Save Changes").click()
        cy.contains("Drink a cup of water").should("be.visible").and("have.class","HabitCard__habit-container")
    });

    it("should toggle icon when habit card is clicked", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type("Drink a cup of water")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']").should("be.visible")
        cy.contains("Drink a cup of water").click()
        cy.get("[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']").should("be.visible")
    })
});
