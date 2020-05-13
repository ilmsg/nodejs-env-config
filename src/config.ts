
interface Config {
    appId: string,
    env: string
}

const env = process.env.NODE_ENV || 'development';
const config: Config = require('../config.json')[env]

export default config;

