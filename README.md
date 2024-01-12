# eole:keycloak-oauth

forked from hotello:keycloak-oauth
https://github.com/hotello/meteor-accounts-auth0.

An implementation of the Keycloak OAuth flow. See the [Meteor Guide](https://guide.meteor.com/accounts.html) for more details.

Automatically imported by eole:accounts-keycloak.

changes

- 2.3.0 : store idToken in service data so it can be used at logout (as id_token_hint)
