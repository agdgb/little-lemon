// actions.js
export const initializeTimes = async (dispatch) => {
  const response = await fetch('http://localhost:3001/times')
  const data = await response.json()
  console.log('AVAILABLE TIMES', data)
  dispatch({ type: 'initialize', payload: data })
}

export const updateTimes = async (selectedDate, bookedTimes, dispatch) => {
  const filtered = bookedTimes
    .filter(b => b.resDate === selectedDate)
    .map(b => b.resTime)

  const response = await fetch('http://localhost:3001/times')
  const times = await response.json()
  console.log('UPDATED TIMES', times)

  const availableTimes = filtered.length === 0
    ? times
    : times.filter(ts => !filtered.includes(ts.time))
  
  dispatch({ type: 'update', payload: availableTimes })
}


// const bookedTimes = []
// export const initializeTimes = async () => {
//   const response = await fetch('http://localhost:3001/times')
//   const data = await response.json()
//   console.log('AVAILABLE TIMES', data)
//   return data
// }

// export const bookings = async () => {
//   const response = await fetch('http://localhost:3001/bookings')
//   const data = await response.json()
//   bookedTimes = data
//   console.log('all booking:', data)
// }

// export const updateTimes = selectedDate => {
//   const filtered = bookedTimes
//     .filter(b => b.resDate === selectedDate)
//     .map(b => b.resTime)

//   initializeTimes().then(t => {
//     dispatch({
//       type: 'initialize',
//       payload:
//         filtered.length === 0 ? t : t.filter(ts => !filtered.includes(ts.time))
//     })
//   })
// }
