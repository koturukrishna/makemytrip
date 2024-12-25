import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Container,
  Stack,
  Box,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Travel } from "./Travel";
import SpecialFare from "./SpecialFare";

const FlightSearch = () => {
  const [fromLocation, setFromLocation] = useState(locations[0]);
  const [toLocation, setToLocation] = useState(locations[3]);
  const [dateValue, setDatetValue] = React.useState([
    dayjs("2024-12-21"),
    dayjs("2025-01-2"),
  ]);

  const [totalPassengers, setTotalPassengers] = useState(null);
  const [specialFareVal, setSpecialFareVal] = useState("regular");

  const handleSubmit = () => {
    if (fromLocation && toLocation) {
      alert(totalPassengers);
      console.log(
        `Flight from ${fromLocation.label} to ${toLocation.label} selected!`
      );
      console.log("DateVal", dateValue);
      console.log("totalCount", totalPassengers);
      alert(specialFareVal);
    } else {
      console.log("Please select both locations.");
    }
  };

  return (
    <Container>
      <Box
        flexDirection="row"
        display="flex"
        alignItems="center"
        spacing={2}
        gap={1}
        paddingTop={1}
      >
        <Autocomplete
          value={fromLocation}
          onChange={(event, newValue) => {
            setFromLocation(newValue);
          }}
          id="controllable-states-demo1"
          disablePortal
          options={locations}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />
        <Autocomplete
          value={toLocation}
          onChange={(event, newValue) => {
            setToLocation(newValue);
          }}
          id="controllable-states-demo2"
          disablePortal
          options={locations}
          sx={{ width: 220 }}
          renderInput={(params) => <TextField {...params} label="To" />}
        />

        <Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <DateRangePicker
                localeText={{ start: "Departure", end: "Return" }}
                value={dateValue}
                format="DD/MM/YYYY"
                defaultValue={[dayjs("2024-12-21"), dayjs("2025-01-2")]}
                onChange={(newValue) => setDatetValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
        <Travel setTotalPassCount={setTotalPassengers} />
      </Box>
      <SpecialFare specialFareValue={setSpecialFareVal} />

      <Stack mt={6} spacing={2} sx={{ width: "auto", display: "inline-block" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </Stack>
    </Container>
  );
};

export default FlightSearch;

export const locations = [
  { code: "DEL", label: "New Delhi" },
  { code: "MUM", label: "Mumbai" },
  { code: "BLR", label: "Bengaluru" },
  { code: "HYD", label: "Hyderabad" },
  { code: "CHE", label: "Chennai" },
  { code: "KOL", label: "Kolkata" },
  { code: "PUN", label: "Pune" },
  { code: "GOI", label: "Goa" },
  { code: "AMD", label: "Ahmedabad" },
  { code: "JAI", label: "Jaipur" },

  { code: "NYC", label: "New York City, USA" },
  { code: "LON", label: "London, UK" },
  { code: "DXB", label: "Dubai, UAE" },
  { code: "PAR", label: "Paris, France" },
  { code: "SYD", label: "Sydney, Australia" },
  { code: "TOK", label: "Tokyo, Japan" },
  { code: "SIN", label: "Singapore, Singapore" },
  { code: "BKK", label: "Bangkok, Thailand" },
  { code: "KUL", label: "Kuala Lumpur, Malaysia" },
  { code: "HKG", label: "Hong Kong, China" },
];
