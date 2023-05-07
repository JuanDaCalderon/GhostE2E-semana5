import configJson from '../../config/config.json';
describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {
      cy.visit(configJson.host)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.get('label[class="switch"]').click()
      cy.wait(2000)
    })
})