import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('form renders correctly ', () => {
    render(<BookingForm availableTimes={{ availableTimes: ['17:00 PM', '18:00 PM'] }} dispatch={() => {}} />);
    expect(screen.getByLabelText(/Choose Date/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/ })).toBeInTheDocument();
});
