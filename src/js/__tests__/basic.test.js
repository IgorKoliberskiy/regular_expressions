import Validator from '../basic';

test('Проверка имени пользователя на соответствие условиям №1 и №2 задачи', () => {
  const name = 'Ivan-222_Ivanov';
  expect(Validator.validateUsername(name)).toBeTruthy();
});

test('Имя не должно содержать подряд более трёх цифр', () => {
  const name = 'Ivan-2222_Ivanov';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно начинаться цифрами', () => {
  const name = '1Ivan-222_Ivanov';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно заканчиваться цифрами', () => {
  const name = 'Ivan-222_Ivanov1';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно начинаться с символа подчёркивания', () => {
  const name = '_Ivan-222_Ivanov';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно начинаться с символа тире', () => {
  const name = '-Ivan-222_Ivanov';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно заканчиваться символом подчёркивания', () => {
  const name = 'Ivan-222_Ivanov_';
  expect(Validator.validateUsername(name)).toBeFalsy();
});

test('Имя не должно заканчиваться символом тире', () => {
  const name = 'Ivan-222_Ivanov-';
  expect(Validator.validateUsername(name)).toBeFalsy();
});