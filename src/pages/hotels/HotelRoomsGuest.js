import React, { useState } from "react";
import { Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import { MemberCount } from "./MemberCount";

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

  const totalRoomsInfo = [
    { name: "Rooms", value: "1" },
    { name: "Adults", value: "1" },
    { name: "Children", value: "1" },
  ];

  const [totalRooms, setTotalRooms] = useState("1");
  const [totalAdults, setTotalAdults] = useState("1");
  const [totalChildren, setTotalChildrens] = useState("1");

  console.log({ totalRooms, totalAdults, totalChildren });

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
          <Typography variant="body2" mt={1}>
            {`${totalRooms} Rooms ${totalAdults} Adults`}
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
            <MemberCount
              text="Rooms"
              valueCount={totalRoomsInfo[0]}
              setTotalVal={setTotalRooms}
            />
            <MemberCount
              text="Adults"
              valueCount={totalRoomsInfo[1]}
              setTotalVal={setTotalAdults}
            />
            <MemberCount
              text="Children"
              valueCount={totalRoomsInfo[2]}
              setTotalVal={setTotalChildrens}
            />

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
