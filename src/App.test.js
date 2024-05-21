import { initializeTimes, updateTimes } from './actions'
import '@testing-library/jest-dom/extend-expect'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { time: '8:00', id: 'a1b2' },
        { time: '9:30', id: 'c3d4' },
        { time: '10:00', id: 'e5f6' },
        { time: '11:00', id: 'g7h8' },
        { time: '07:00', id: 'i9j0' },
        { time: '02:30', id: 'k1l2' },
        { time: '04:00', id: 'm3n4' },
        { time: '06:00', id: 'o5p6' }
      ])
  })
)

test('updateTimes dispatches correct action', async () => {
  const mockBookings = [{ id: 1, resDate: '2023-05-15', resTime: '10:00' }]

  fetch
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { time: '8:00', id: 'a1b2' },
            { time: '9:30', id: 'c3d4' },
            { time: '10:00', id: 'e5f6' },
            { time: '11:00', id: 'g7h8' },
            { time: '07:00', id: 'i9j0' },
            { time: '02:30', id: 'k1l2' },
            { time: '04:00', id: 'm3n4' },
            { time: '06:00', id: 'o5p6' }
          ])
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockBookings)
      })
    )

  const dispatch = jest.fn()
  const selectedDate = '2023-05-15'
  await updateTimes(selectedDate, mockBookings, dispatch)

  const expectedTimes = [
    { time: '8:00', id: 'a1b2' },
    { time: '9:30', id: 'c3d4' },
    { time: '11:00', id: 'g7h8' },
    { time: '07:00', id: 'i9j0' },
    { time: '02:30', id: 'k1l2' },
    { time: '04:00', id: 'm3n4' },
    { time: '06:00', id: 'o5p6' }
  ]

  expect(dispatch).toHaveBeenCalledWith({
    type: 'update',
    payload: expectedTimes
  })
})
