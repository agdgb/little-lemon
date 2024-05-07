import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [minDate, setMinDate] = useState('')
  const [occasions, setOccasions] = useState([])
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      guests: 1
    }
  })

  const initializeOccasion = async () => {
    const response = await fetch('http://localhost:3001/occasions')
    const data = await response.json()
    return data
  }

  const handleBooking = async formData => {
    console.log('here')
    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      const result = await response.json()
      alert('Form submitted successfully.')
      reset()
    } catch (error) {
      alert('Error submitting form.')
    }
  }

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setMinDate(formattedDate)
  }, [])

  useEffect(() => {
    initializeOccasion().then(setOccasions)
  }, [])

  const onSubmit = data => {
    handleBooking(data)
  }

  const handleDateChange = e => {
    const selectedDate = e.target.value
    console.log('selectedDate', selectedDate)
    updateTimes(selectedDate)
  }

  return (
    <div className='container' style={{ padding: '15px' }}>
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='resDate'>
            Reservation Date:
          </label>
          <input
            className='form-control'
            type='date'
            min={minDate}
            id='resDate'
            aria-required='true'
            aria-describedby='resDate-error'
            onChange={handleDateChange}
            {...register('resDate', {
              required: 'Date is required',
              onChange: e => {
                handleDateChange(e)
              }
            })}
          />
          {errors.resDate && (
            <span
              className='text-sm text-danger'
              id='resDate-error'
              role='alert'
            >
              {errors.resDate.message}
            </span>
          )}
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='resTime'>
            Reservation Time:
          </label>
          <select
            className='form-select'
            id='resTime'
            aria-required='true'
            aria-describedby='resTime-error'
            {...register('resTime', { required: 'Please select time.' })}
          >
            <option value=''>Select</option>
            {availableTimes.map(time => (
              <option key={time.id} value={time.time}>
                {time.time}
              </option>
            ))}
          </select>
          {errors.resTime && (
            <span
              className='text-sm text-danger'
              id='resTime-error'
              role='alert'
            >
              {errors.resTime.message}
            </span>
          )}
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='guests'>
            Number of Guests:
          </label>
          <input
            className='form-control'
            type='number'
            id='guests'
            min={1}
            max={10}
            aria-required='true'
            aria-describedby='guests-error'
            {...register('guests', {
              required: 'Number of guests is required',
              min: { value: 1, message: 'Minimum is 1' },
              max: { value: 10, message: 'Maximum is 10' }
            })}
          />
          {errors.guests && (
            <span
              className='text-sm text-danger'
              id='guests-error'
              role='alert'
            >
              {errors.guests.message}
            </span>
          )}
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='occasion'>
            Occasion:
          </label>
          <select
            className='form-select'
            id='occasion'
            aria-required='true'
            aria-describedby='occasion-error'
            {...register('occasion', {
              required: 'Occasion is required'
            })}
          >
            <option value=''>Select</option>
            {occasions.map(o => (
              <option key={o.id} value={o.occasion}>
                {o.occasion}
              </option>
            ))}
          </select>
          {errors.occasion && (
            <span
              className='text-sm text-danger'
              id='occasion-error'
              role='alert'
            >
              {errors.occasion.message}
            </span>
          )}
        </div>

        <div className='mt-2'>
          <button className='btn btn-primary' type='submit'>
            Reserve
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookingForm
