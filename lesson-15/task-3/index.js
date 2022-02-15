export function createLogger() {
  const loggers = [];

  const warn = message => {
    loggers.push({
      message: message,
      dateTime: new Date(),
      type: 'warn',
    });
  };

  const error = message => {
    loggers.push({
      message: message,
      dateTime: new Date(),
      type: 'error',
    });
  };

  const log = message => {
    loggers.push({
      message: message,
      dateTime: new Date(),
      type: 'log',
    });
  };

  const getRecords = type => {
    if (!loggers.length) {
      return [];
    }

    if (!type) {
      return loggers.sort(
        (a, b) => b.dateTime.getTime() - a.dateTime.getTime()
      );
    }

    const filteredArr = loggers.filter(record => record.type === type);

    if (filteredArr.length) {
      return filteredArr.sort(
        (a, b) => b.dateTime.getTime() - a.dateTime.getTime()
      );
    } else {
      return [];
    }
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
