import * as React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Typography,
} from "@mui/material/";

const styles = {
  // backgroundColor: "lightblue", // Default background color
  "&.Mui-selected": {
    backgroundColor: "#4287f5", // Background color when selected
    color: "white", // Optional: Change text color
  },
  "&:hover": {
    backgroundColor: "skyblue", // Background color on hover
  },
  fontSize: "0.65rem", // Smaller font size
  padding: "4px 5px", // Reduced padding
  // minWidth: "64px", // Adjust width
  width: "120px",
  Height: "45px",
};

export default function TravelClass() {
  const [alignment, setAlignment] = React.useState("economy");

  const handleChange = (event, newAlignment) => {
    alert(newAlignment);
    setAlignment(newAlignment);
  };

  return (
    <Stack pl={2}>
      <Typography variant="body2">CHOOSE TRAVEL CLASS</Typography>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="economy" sx={styles}>
          Economy/Premium Economy
        </ToggleButton>
        <ToggleButton value="premium economy" sx={styles}>
          Premium Economy
        </ToggleButton>
        <ToggleButton value="business" sx={styles} width="90px">
          Business
        </ToggleButton>
        <ToggleButton value="first class" sx={styles} width="90px">
          First Class
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
