import React, { useState } from "react";
import { Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import TravelAndInsurance from "./TravelAndInsurance";
import TravelClass from "./TravelClass";

const styled = {
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export const Travel = ({ setTotalPassCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // alert(totalCount);
    // console.log(totalCount);
    setTotalPassCount(totalCount);
    setAnchorEl(null);
  };

  let totalCount = null;

  const getTheChangeNumber = (count) => {
    totalCount += parseInt(count);
    console.log(totalCount);
    console.log("total  count is ", totalCount);
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        sx={styled}
      >
        <Stack>
          <Typography variant="body2">Travellers & Class</Typography>
          <Typography
            variant="body2"
            mt={1}
            sx={{ textTransform: "none", color: "black", fontWeight: "bold" }}
          >
            11 Travellers
          </Typography>
          <Typography
            variant="body2"
            fontSize="12px"
            sx={{ transform: "none" }}
          >
            Economy/Premium Economy
          </Typography>
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Stack>
            <TravelAndInsurance
              txt="ADULTS (12y +) on the day of travel"
              number="9"
              getTheChangeNumber={getTheChangeNumber}
            />

            <Stack direction="row" spacing={2} gap={1}>
              <TravelAndInsurance
                txt="CHILDREN (2y - 12y ) on the day of travel"
                number="6"
                getTheChangeNumber={getTheChangeNumber}
              />

              <TravelAndInsurance
                txt="INFANTS (below 2y) on the day of travel"
                number="6"
                getTheChangeNumber={getTheChangeNumber}
              />
            </Stack>
            <Stack mt={1}>
              <TravelClass />
            </Stack>
            <Stack mt={2} sx={{ width: "auto", display: "inline-block" }}>
              <Button
                variant="contained"
                onClick={() => {
                  handleClose();
                }}
              >
                Apply
              </Button>
            </Stack>
          </Stack>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
