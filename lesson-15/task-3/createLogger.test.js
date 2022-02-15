import { createLogger } from '.';

it('test correct length', () => {
  const logger = createLogger();

  logger.warn('first warn');
  logger.log('first log');
  logger.error('first error');

  expect(logger.getRecords().length).toEqual(3);
  expect(logger.getRecords('log').length).toEqual(1);

  logger.log('second log');
  logger.log('third log');

  expect(logger.getRecords().length).toEqual(5);
  expect(logger.getRecords('log').length).toEqual(3);
});

it('test correct record type', () => {
  const logger = createLogger();

  logger.warn('first warn');
  logger.log('first log');
  logger.error('first error');

  expect(logger.getRecords('warn')[0].type).toEqual('warn');
});
