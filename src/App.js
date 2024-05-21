// import './App.css'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Container from './components/Container'
// import { Route, Routes } from 'react-router-dom'
// import BookingForm from './components/BookingForm'
// import { useReducer, useEffect, useState } from 'react'
// import { type } from '@testing-library/user-event/dist/type'
// import { updateTimes, initializeTimes } from './actions'

// function App () {
//   const [bookedTimes, setBookedTimes] = useState([])
//   const timesReducer = (state, action) => {
//     switch (action.type) {
//       case 'initialize':
//         return action.payload
//       case 'update':
//         return action.payload
//       default:
//         throw new Error('Unknown action type')
//     }
//   }

//   const [availableTimes, dispatch] = useReducer(timesReducer, [])

//   const initializeTimes = async () => {
//     const response = await fetch('http://localhost:3001/times')
//     const data = await response.json()
//     console.log('AVAILABLE TIMES', data)
//     return data
//   }

//   const bookings = async () => {
//     const response = await fetch('http://localhost:3001/bookings')
//     const data = await response.json()
//     setBookedTimes(data)
//     console.log('all booking:', data)
//   }

//   const updateTimes = selectedDate => {
//     const filtered = bookedTimes
//       .filter(b => b.resDate === selectedDate)
//       .map(b => b.resTime)

//     initializeTimes().then(t => {
//       dispatch({
//         type: 'initialize',
//         payload:
//           filtered.length === 0
//             ? t
//             : t.filter(ts => !filtered.includes(ts.time))
//       })
//     })
//   }

//   useEffect(() => {
//     initializeTimes().then(times => {
//       dispatch({ type: 'initialize', payload: times })
//     })
//   }, [])

//   useEffect(() => {
//     bookings()
//   }, [])

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Container />} />
//         <Route
//           path='/booking'
//           element={
//             <BookingForm
//               availableTimes={availableTimes}
//               updateTimes={updateTimes}
//             />
//           }
//         />
//       </Routes>
//       <Footer />
//     </>
//   )
// }

// export default App

// App.js
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
import BookingForm from './components/BookingForm'
import { useReducer, useEffect, useState } from 'react'
import { initializeTimes, updateTimes } from './actions'

function App () {
  const [bookedTimes, setBookedTimes] = useState([])

  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'initialize':
        return action.payload
      case 'update':
        return action.payload
      default:
        throw new Error('Unknown action type')
    }
  }

  const [availableTimes, dispatch] = useReducer(timesReducer, [])

  const fetchBookings = async () => {
    const response = await fetch('http://localhost:3001/bookings')
    const data = await response.json()
    setBookedTimes(data)
    console.log('all booking:', data)
  }

  useEffect(() => {
    initializeTimes(dispatch)
  }, [])

  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route
          path='/booking'
          element={
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={selectedDate =>
                updateTimes(selectedDate, bookedTimes, dispatch)
              }
            />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
