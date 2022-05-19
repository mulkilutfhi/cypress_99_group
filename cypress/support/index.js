// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// 99id
import './commands-99id/homepage/commands-login';
import './commands-99id/homepage/commands-search';
import './commands-99id/homepage/section-primary-projects';
import './commands-99id/homepage/section-verified-listing';
import './commands-99id/homepage/section-blog';
import './commands-99id/search-result-page/commands-callback';
import './commands-99id/listing-detail-page/commands-callback';
import './commands-99id/directory-agent/commands-contact-agent-directory';
import './commands-99id/login/commands-login';
// rumah123 desktop
import './commands-rumah123/desktop/homepage/search';
import './commands-rumah123/desktop/homepage/navbar';
import './commands-rumah123/desktop/homepage/register';
import './commands-rumah123/desktop/homepage/suggestion-autocomplete';
import './commands-rumah123/desktop/homepage/login-agent';
import './commands-rumah123/desktop/homepage/customer-dashboard';
import './commands-rumah123/desktop/inquiry/commands-inquiry-bottom-page';
import './commands-rumah123/desktop/inquiry/commands-inquiry-dialog';
import './commands-rumah123/desktop/inquiry/commands-inquiry-ldp';
import './commands-rumah123/desktop/inquiry/commands-inquiry-pdp';
import './commands-rumah123/desktop/inquiry/commands-inquiry-srp';
import './commands-rumah123/desktop/inquiry/commands-inquiry-success';
import './commands-rumah123/desktop/inquiry/commands-new-inquiry';
import './commands-rumah123/desktop/listing-detail-page/commands-gallery-section-ldp';
import './commands-rumah123/desktop/listing-detail-page/commands-save-view-shared-ldp';
import './commands-rumah123/desktop/local-storage/commands-local-storage';
import './commands-rumah123/desktop/login/commands-login';
import './commands-rumah123/desktop/project-detail-page/commands-save-view-shared-pdp';
import './commands-rumah123/desktop/search-result-page/commands-autocomplete-srp';
import './commands-rumah123/desktop/search-result-page/commands-search-filter-srp';
import './commands-rumah123/desktop/search-result-page/commands-filter-popup-srp';
import './commands-rumah123/desktop/search-result-page/commands-sort-srp';
import './commands-rumah123/desktop/project-detail-page/commands-sub-unit';
import './commands-rumah123/desktop/homepage/blog';
import './commands-rumah123/desktop/homepage/kenapa-r123';
import './commands-rumah123/desktop/project-detail-page/commands-gallery-section';
import './commands-rumah123/desktop/search-result-page/commands-listing-card';
import './commands-rumah123/desktop/home-page-new-launch/command-galeri-properti';
import './commands-rumah123/desktop/search-result-page/commands-area-specialist';
// rumah123 mobile-site
import './commands-rumah123/mobile-site/homepage/searchbar';
import './commands-rumah123/mobile-site/homepage/navbar';
import './commands-rumah123/mobile-site/homepage/registration-consumer';
import './commands-rumah123/mobile-site/homepage/registration-customer';
import './commands-rumah123/mobile-site/homepage/login';
import './commands-rumah123/mobile-site/homepage/filter';
import './commands-rumah123/mobile-site/searchbar/disewa';
import './commands-rumah123/mobile-site/homepage/suggestion-autocomplete';
import './commands-rumah123/mobile-site/search-result-page/suggestion-autocomplete';
import './commands-rumah123/mobile-site/search-result-page/save-listing';
// rumah123 data-tracker
import './commands-rumah123/data-tracker/data-tracker';
// rumah123-legacy
import './commands-rumah123-legacy/customer-dashboard/login';
// erp
import './commands-erp/login';
import './commands-erp/add-lead';
import './commands-erp/agent-group';
import './commands-erp/project';
// crm
import './commands-crm/login-crm';
import './commands-crm/menu-crm';
import './commands-crm/lead-crm';

import 'cypress-real-events/support';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-grep')();
