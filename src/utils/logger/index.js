import winston from 'winston'

let logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            timestamp: () => Date.now(),
            formatter: (options) => {
                // Return string will be passed to logger.
                // return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') +
                //     (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
                return JSON.stringify(Object.assign({level: options.level, timestamp: Date.now()}, options.meta));
            }
        }),
    ]
});


export default logger;