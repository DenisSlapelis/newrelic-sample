require("newrelic"); // Comment me to see both info log messages
const winston = require("winston");
const { transports } = winston;

const console = new transports.Console();

const logger = winston
  .createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "test-service" },
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
    ],
  })
  .add(console);

const loggerWithBug = winston.createLogger(logger); // Comment me to use newrelic without problems

const main = () => {
  loggerWithBug.info("== BUG =="); // Comment me to use newrelic without problems
  logger.info("== NORMAL INFO LOGGER ==");
};

main();
