import * as React from "react";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const BasicDateRangePicker = ({ hotelCheckingSetValues }) => {
  const [value, setValue] = React.useState([
    dayjs("2024-12-21"),
    dayjs("2025-01-2"),
  ]);

  const handleSubmit = () => {
    console.log({ date: value });
  };

  const handleChangeDatePicker = (dateValue) => {
    setValue(dateValue);
    hotelCheckingSetValues(dateValue);
    // console.log("hotel dt", dateValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker
          localeText={{ start: "Check-In", end: "Check-Out" }}
          value={value}
          defaultValue={[dayjs("2024-12-21"), dayjs("2025-01-2")]}
          onChange={(newValue) => handleChangeDatePicker(newValue)}
        />
      </DemoContainer>
      {/* <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button> */}
    </LocalizationProvider>
  );
};

export default BasicDateRangePicker;
