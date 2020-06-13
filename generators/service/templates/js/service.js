// Initializes the `<%= name %>` service on path `/<%= path %>`
import { <%= className %> } from './<%= kebabName %>.class';<% if(modelName) { %>
import createModel from '<%= relativeRoot %>models/<%= modelName %>';<% } %>
import hooks from './<%= kebabName %>.hooks';

module.exports = function (app) {
  const options = {<% if (modelName) { %>
    Model: createModel(app),<% } %>
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/<%= path %>', new <%= className %>(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('<%= path %>');

  service.hooks(hooks);
};
