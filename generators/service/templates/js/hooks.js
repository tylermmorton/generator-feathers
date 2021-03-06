<% if (requiresAuth) { %>import * as feathersAuthentication from '@feathersjs/authentication';<%
const { authenticate } = feathersAuthentication.hooks;} %>

export default {
  before: {
    all: [<% if (requiresAuth) { %> authenticate('jwt') <% } %>],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
