const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

/**
 * Configuration values
 */
export default {
    /**
     * The base url on the api.
     */
    apiBaseUrl: "http://localhost:"+ process.env.REACT_APP_SERVER_PORT +"/v1"
}

