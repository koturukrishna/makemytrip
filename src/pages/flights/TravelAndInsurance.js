import * as React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Typography,
} from "@mui/material";

export default function TravelAndInsurance({
  txt,
  number,
  getTheChangeNumber,
}) {
  const [alignment2, setAlignment2] = React.useState("1");

  const handleChange2 = (event, newAlignment2) => {
    // console.log(newAlignment2, "New Alighnment");
    getTheChangeNumber(newAlignment2);
    //  alert(newAlignment2);
    setAlignment2(newAlignment2);
  };

  function generateArray(num) {
    return Array.from({ length: num }, (_, index) => ({
      value: (index + 1).toString(), // Convert index + 1 to string
      number: index + 1, // Use index + 1 for the number
    }));
  }

  const result = generateArray(parseInt(number));
  //  console.log(result);

  return (
    <Stack spacing={1}>
      <Typography variant="body2">{txt}</Typography>

      <ToggleButtonGroup
        color="primary"
        value={alignment2}
        exclusive
        onChange={handleChange2}
        aria-label="Platform"
      >
        {result.map((eachItem) => {
          return (
            <ToggleButton value={eachItem.value}>
              {eachItem.number}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Stack>
  );
}
