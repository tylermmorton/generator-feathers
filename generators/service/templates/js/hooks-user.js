<% if (requiresAuth) { %>import * as feathersAuthentication from '@feathersjs/authentication';<%
const { authenticate } = feathersAuthentication.hooks;} %>

<% if (authentication.strategies.indexOf('local') !== -1) { %>const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;<% } %>

export default {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ <% if (authentication.strategies.indexOf('local') !== -1) { %>hashPassword('password')<% } %> ],
    update: [ <% if (authentication.strategies.indexOf('local') !== -1) { %>hashPassword('password'), <% } %> authenticate('jwt') ],
    patch: [ <% if (authentication.strategies.indexOf('local') !== -1) { %>hashPassword('password'), <% } %> authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ <% if (authentication.strategies.indexOf('local') !== -1) { %>
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')<% } %>
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
