'use strict';

const Deployer = require('./server/Deployer');

/**
 * The HashBrown GIT plugin
 */
class Git {
    /**
     * Init this plugin
     */
    static init(app) {
        HashBrown.Helpers.ConnectionHelper.registerDeployer(Deployer);
    }
}

module.exports = Git;
