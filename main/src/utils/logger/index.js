import winston from 'winston'

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      formatter: options =>
      // Return string will be passed to logger.
        `${options.level.toUpperCase()} ${Date.now()} ${options.message ? options.message : ''
        }${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`

    })
  ]
})

export default logger
