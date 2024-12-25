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
import { HotelsSearch } from "./hotels/HotelsSearch";

export const Hotels = () => {
  const [value, setValue] = React.useState("upto4rooms");

  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Paper elevation={2} spacing={2}>
      <Stack spacing={50} mt={5} padding={2}>
        <FormControl>
          <Stack direction="row" alignItems="center">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="upto4rooms"
                control={<Radio />}
                label="Upto 4 Rooms"
              />
              <FormControlLabel
                value="groupt deals"
                control={<Radio />}
                label="Group Deals"
              />
            </RadioGroup>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                fontFamily: "bold",
                textTransform: "none",
              }}
            >
              Book Domestic and International Property Online. To list your
              property
            </Typography>
          </Stack>
          <HotelsSearch />
        </FormControl>
      </Stack>
      {/* <Button variant="contained">Search</Button> */}
    </Paper>
  );
};
