import ErrorRepository from '../ErrorRepository';

test('Выводим текст ошибки по коду из централизованного хранилища', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.addNewError(500, 'ошибка сервера');
  expect(errorRepository.translate(500)).toBe('ошибка сервера');
});

test('Отсутствует код ошибки, возвращаем строку - Unknown error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(400)).toBe('Unknown error');
});
