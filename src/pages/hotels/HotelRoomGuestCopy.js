import React, { useState } from "react";
import { Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import NumberCountDropDown from "./NumberCountDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const styled = {
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export const HotelRoomsGuest = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // alert(totalCount);
    // console.log(totalCount);
    setAnchorEl(null);
  };

  const [countanchorEl, setCountAnchorEl] = useState(null);
  const openCount = Boolean(countanchorEl);

  const handleCountClick = (event) => {
    setCountAnchorEl(event.currentTarget);
  };
  const handleCountClose = () => {
    // alert(totalCount);
    // console.log(totalCount);
    setCountAnchorEl(null);
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
          <Typography variant="body2">Rooms & Guests</Typography>
          <Typography variant="h6" mt={1}>
            11 Travellers
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
          <Stack
            sx={{
              width: "300px",
              height: "220px",
            }}
          >
            <Stack
              direction="row"
              sx={{
                width: "250px",
                justifyContent: "space-between",
              }}
            >
              <Typography>Room</Typography>
              <Stack>
                <Button
                  id="basic-button2"
                  aria-controls={openCount ? "basic-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openCount ? "true" : undefined}
                  onClick={handleCountClick}
                  variant="outlined"
                  sx={styled}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  1
                </Button>
                <Menu
                  id="basic-menu2"
                  anchorEl={countanchorEl}
                  open={openCount}
                  onClose={handleCountClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    <Stack
                      direction="row"
                      sx={{
                        width: "90px",
                        height: "120px",
                      }}
                    >
                      <NumberCountDropDown />
                    </Stack>
                  </MenuItem>
                </Menu>
              </Stack>
            </Stack>
            <Stack spacing={2} sx={{ width: "auto", display: "inline-block" }}>
              <Button variant="contained" onClick={() => {}}>
                Apply
              </Button>
            </Stack>
          </Stack>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
