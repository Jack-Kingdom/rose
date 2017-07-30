import winston from 'winston'

let logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: () => Date.now(),
            formatter: (options) => options.level.toUpperCase() + ' ' + options.timestamp() + '' + JSON.stringify(options.message),
        }),
    ]
});


export default logger;