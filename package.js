Package.describe({
  name: 'eoleteam:keycloak-oauth',
  summary: 'Keycloak OAuth flow',
  version: '2.2.0',
  git: 'https://github.com/eole/meteor-accounts-auth0.git',
});

Npm.depends({
  'keycloak-connect': '4.5.0',
});

Package.onUse(function (api) {
  api.versionsFrom(['1.5', '2.3']);

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('keycloak_client.js', 'client');
  api.addFiles('keycloak_server.js', 'server');

  api.export('Keycloak');
});
