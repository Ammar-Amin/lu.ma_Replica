import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { deepOrange } from '@mui/material/colors';

export default function Calender() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ bgcolor: deepOrange[500], borderRadius: '1rem' }} />
        </LocalizationProvider>
    );
}
