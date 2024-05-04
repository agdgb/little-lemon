import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const BookingForm = () => {
  const [minDate, setMinDate] = useState('')

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setMinDate(formattedDate)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      resDate: minDate,
      resTime: '18:00',
      guests: 1,
      occasion: 'none'
    }
  })

  const onSubmit = data => {
    if (data.occasion === 'none') {
      alert('Please select occasion!')
      return
    }
    console.log(data)
    alert('Booking Successful.')
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
            value={minDate}
            min={minDate}
            id='resDate'
            {...register('resDate', { required: 'Date is required' })}
          />
          {errors.resDate && (
            <span className='text-sm text-danger'>
              {errors.resDate.message}
            </span>
          )}
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='resTime'>
            Reservation Time:
          </label>
          <select className='form-select' id='resTime' {...register('resTime')}>
            <option value='18:00'>18:00</option>
            <option value='19:00'>19:00</option>
            <option value='20:00'>20:00</option>
            <option value='21:00'>21:00</option>
          </select>
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
            {...register('guests', {
              required: 'Number of guests is required',
              min: { value: 1, message: 'Minimum is 1' },
              max: { value: 10, message: 'Maximum is 10' }
            })}
          />
          {errors.guests && (
            <span className='text-sm text-danger'>{errors.guests.message}</span>
          )}
        </div>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <label className='form-label' htmlFor='occasion'>
            Occasion:
          </label>
          <select
            className='form-select'
            id='occasion'
            {...register('occasion')}
          >
            <option value='none'>None</option>
            <option value='birthday'>Birthday</option>
            <option value='anniversary'>Anniversary</option>
          </select>
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
