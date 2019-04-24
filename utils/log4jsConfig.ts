export const log4js = require('log4js');
log4js.configure({
    appenders: {
        frame: {
            type: 'file',
            filename: './reports/Framework.log'
        },
        con: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['frame', 'con'],
            level: 'debug'
        }
    }
});