import React, { useState } from "react";
import { Button, Stack, Menu, MenuItem, Typography } from "@mui/material";
import NumberCountDropDown from "./NumberCountDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const styled = {
  padding: "6px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

export const MemberCount = ({ setTotalVal, text, valueCount }) => {
  debugger;
  console.log(valueCount);
  const [countValue, setCountValue] = useState("1");
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

  return (
    <Stack>
      <Stack
        mt={1}
        direction="row"
        sx={{
          width: "250px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">{text}</Typography>
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
            <Typography variant="body2">{countValue}</Typography>
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
                <NumberCountDropDown
                  handleCountClose={handleCountClose}
                  setTotalVal={setTotalVal}
                  setCountValue={setCountValue}
                />
              </Stack>
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </Stack>
  );
};
