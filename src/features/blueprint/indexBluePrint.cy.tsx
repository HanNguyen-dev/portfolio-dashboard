import React from 'react'
import BluePrint from './index'

describe('<BluePrint />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BluePrint />);

    cy.contains('The UI');
    cy.contains('The API');
    cy.contains('Cloud');
  });

  it('links', () => {
    const links = [
      {
        testId: 'mui-link',
        link: 'https://m3.material.io/',
      },
      {
        testId: 'github-dashboard-link',
        link: 'https://github.com/hannguyen-dev/portfolio-dashboard',
      },
      {
        testId: 'google-map-api-link',
        link: 'https://developers.google.com/maps',
      },
      {
        testId: 'ip-info-link',
        link: 'https://ipinfo.io/',
      },
      {
        testId: 'open-weather-link',
        link: 'https://openweathermap.org',
      },
      {
        testId: 'github-weather-api',
        link: 'https://github.com/HanNguyen-dev/portfolio-weather',
      },
      {
        testId: 'azure-website',
        link: 'https://weatherportfolio.azurewebsites.net/',
      }
    ];

    cy.mount(<BluePrint />);
    links.forEach(link => {
      cy.get(`[data-cy='${link.testId}']`)
        .should('have.attr', 'href')
        .then((href: string) => {
          expect(href).equal(link.link);
        });
    });
  });
})