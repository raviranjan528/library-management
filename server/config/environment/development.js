'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/librarymanagement-dev'mongodb://<dbuser>:<dbpassword>@ds119608.mlab.com:19608/library_management
    //uri: 'mongodb://root:ravi5@ds119588.mlab.com:19588/librarymanagement'
    uri: 'mongodb://root:admin@ds119608.mlab.com:19608/library_management'
  },

  // Seed database on startup
  seedDB: true

};
