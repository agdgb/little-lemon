import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Container from './components/Container'
import { Route, Routes } from 'react-router-dom'
import BookingForm from './components/BookingForm'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/booking' element={<BookingForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
