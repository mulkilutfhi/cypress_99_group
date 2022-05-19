/// <reference types="cypress" />
const deepmerge = require('deepmerge');
const path = require('path');
const selectTestsWithGrep = require('cypress-select-tests/grep');

function loadConfig(file, folder) {
  const configJson = require(getConfigFilename(file));

  if (folder !== '') {
    configJson['integrationFolder'] = configJson['integrationFolder'] + folder;
  }

  if (configJson.extends) {
    const baseConfigFilename = path.join(path.dirname(filename), configJson.extends);
    const baseConfig = loadConfig(baseConfigFilename);
    console.log('merging %s with %s', baseConfigFilename, filename);
    return deepmerge(baseConfig, configJson);
  } else {
    return configJson;
  }
}

function getConfigFilename(file) {
  switch (file) {
    case 'r123-dev':
      return path.resolve('cypress/config/rumah123/dev.json');
    case 'r123-rls':
      return path.resolve('cypress/config/rumah123/rls.json');
    case 'r123-prod':
      return path.resolve('cypress/config/rumah123/prod.json');
    case 'lr123-dev':
      return path.resolve('cypress/config/rumah123-legacy/dev.json');
    case 'lr123-stg':
      return path.resolve('cypress/config/rumah123-legacy/stg.json');
    case 'lr123-rls':
      return path.resolve('cypress/config/rumah123-legacy/rls.json');
    case 'lr123-prod':
      return path.resolve('cypress/config/rumah123-legacy/prod.json');
    case 'admr123-stg':
      return path.resolve('cypress/config/rumah123-admin/stg.json');
    case 'admr123-prod':
      return path.resolve('cypress/config/rumah123-admin/prod.json');
    case '99id-dw':
      return path.resolve('cypress/config/99id/dw.json');
    case '99id-prod':
      return path.resolve('cypress/config/99id/prod.json');
    case 'microsite-prod':
      return path.resolve('cypress/config/microsite/prod.json');
    case 'r123-api-stg':
      return path.resolve('cypress/config/rumah123-api/stg.json');
    case 'r123-graphql-stg':
      return path.resolve('cypress/config/rumah123-graphql/stg.json');
    case 'crm-dev':
      return path.resolve('cypress/config/crm/dev.json');
    case 'crm-rls':
      return path.resolve('cypress/config/crm/rls.json');
    case 'crm-prod':
      return path.resolve('cypress/config/crm/prod.json');
    case 'erp-dev':
      return path.resolve('cypress/config/erp/dev.json');
    case 'erp-prod':
      return path.resolve('cypress/config/erp/prod.json');
    default:
      return path.resolve('cypress.json');
  }
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // console.log(config)
  require('cypress-grep/src/plugin')(config);
  on('file:preprocessor', selectTestsWithGrep(config));

  // accept a configFile env value or use cypress.json as default
  const file = config.env.configFile || 'default';
  const folder = config.env.folder || '';
  return loadConfig(file, folder);
};
