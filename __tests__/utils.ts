import { currencyFormatter,  timeFormatter, capitalize } from '../src/utils'

test('currency should be with $ sign', () => {
  expect(currencyFormatter(100)).toBe('$100.00')
})

test('timeFormatter should return appropriate date-time format', () => {
  expect(timeFormatter(1594379105000)).toBe('07/10/2020 at 4:05 AM PDT')
})

test('result should be with capitalize first letter', () => {
  expect(capitalize('approved')).toBe('Approved')
  expect(capitalize('approved result')).toBe('Approved result')
})