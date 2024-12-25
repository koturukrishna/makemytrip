import * as React from "react";
import {
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
  Paper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/material";
import FlightSearch from "./flights/FlightSearch";
import { flightsData } from "./flights/flightsData";
import { ImageCard } from "./imageCards/ImageCard";

export const Flights = () => {
  const [value, setValue] = React.useState("oneway");

  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Paper elevation={2} spacing={2}>
      <Stack spacing={50} mt={5} padding={2}>
        <FormControl>
          <Stack direction="row" justifyContent="space-between">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="oneway"
                control={<Radio />}
                label="One Way"
              />
              <FormControlLabel
                value="round trip"
                control={<Radio />}
                label="Round Trip"
              />
              <FormControlLabel
                value="multi city"
                control={<Radio />}
                label="Multi City"
              />
            </RadioGroup>
            <Typography>Book International and Domestic Flights</Typography>
          </Stack>
          <FlightSearch />

          <Stack>
            <Stack
              mt={4}
              sx={{
                listStyleType: "none",
                direction: "flex",
                flexDirection: "row",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              {flightsData.map((each) => (
                <li key={each.url}>
                  <ImageCard {...each} />
                </li>
              ))}
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
      {/* <Button variant="contained">Search</Button> */}
    </Paper>
  );
};
