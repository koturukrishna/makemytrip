import React, { useState } from "react";
import {
  Box,
  Radio,
  Stack,
  Typography,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@mui/joy/";

const styled = {
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export default function SpecialFare({ specialFareValue }) {
  const [selectedValue, setSelectedValue] = useState("regular");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    specialFareValue(event.target.value);
  };

  return (
    <Stack direction="row" spacing={1} mt={2}>
      <Typography variant="body2">Select a special fare</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <FormControl>
          <Stack direction="row" display="flex" spacing={2}>
            <Box sx={styled}>
              <Radio
                checked={selectedValue === "regular"}
                overlay
                defaultChecked
                onChange={handleChange}
                value="regular"
                name="radio-buttons"
                label={
                  <div>
                    <FormLabel>Regular</FormLabel>
                    <FormHelperText>Regular fares</FormHelperText>
                  </div>
                }
                slotProps={{ input: { "aria-label": "Regular" } }}
              />
            </Box>
            <Box sx={styled}>
              <Radio
                checked={selectedValue === "student"}
                onChange={handleChange}
                value="student"
                name="radio-buttons"
                label={
                  <div>
                    <FormLabel>Student</FormLabel>
                    <FormHelperText>Extra discounts/baggage</FormHelperText>
                  </div>
                }
                slotProps={{ input: { "aria-label": "Student" } }}
              />
            </Box>
            <Box sx={styled}>
              <Radio
                checked={selectedValue === "senior citizen"}
                onChange={handleChange}
                value="senior citizen"
                name="radio-buttons"
                label={
                  <div>
                    <FormLabel>Senior Citizen</FormLabel>
                    <FormHelperText>Up to ₹ 600 off</FormHelperText>
                  </div>
                }
                slotProps={{ input: { "aria-label": "Senior Citizen" } }}
              />
            </Box>
            <Box sx={styled}>
              <Radio
                checked={selectedValue === "armed forces"}
                onChange={handleChange}
                value="armed forces"
                name="radio-buttons"
                label={
                  <div>
                    <FormLabel> Armed Forces</FormLabel>
                    <FormHelperText>Up to ₹ 600 off</FormHelperText>
                  </div>
                }
                slotProps={{ input: { "aria-label": " Armed Forces" } }}
              />
            </Box>
            <Box sx={styled}>
              <Radio
                checked={selectedValue === "doctor and nurses"}
                onChange={handleChange}
                value="doctor and nurses"
                name="radio-buttons"
                label={
                  <div>
                    <FormLabel>Doctor and Nurses</FormLabel>
                    <FormHelperText> Up to ₹ 600 off</FormHelperText>
                  </div>
                }
                slotProps={{ input: { "aria-label": "Doctor and Nurses" } }}
              />
            </Box>
          </Stack>
        </FormControl>
      </Box>
    </Stack>
  );
}
