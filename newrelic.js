/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

const { APPLICATION, SCOPE, NODE_ENV } = process.env;

exports.config = {
  /**
   * Array of application names.
   */
  app_name: [`${APPLICATION}-${SCOPE}`],
  /**
   * Prevents the agent from starting up and connecting to New Relic's servers in
   * environments different to `production`
   */
  agent_enabled: NODE_ENV === 'production',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
  error_collector: {
    enabled: true,
  },
  rules: {
    ignore: [
      '^/ping',
    ],
  },
  browser_monitoring: {
    attributes: {
      enabled: true,
    },
  },
};
