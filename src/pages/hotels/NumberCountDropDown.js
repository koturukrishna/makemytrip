import * as React from "react";
import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FixedSizeList } from "react-window";

function renderRow(props, handleCountClose, setTotalVal, setCountValue) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText
          primary={`${index + 1}`}
          onClick={() => {
            setTotalVal(index + 1);
            setCountValue(index + 1);
            // alert(index + 1);
            handleCountClose();
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default function NumberCountDropDown({
  handleCountClose,
  setTotalVal,
  setCountValue,
}) {
  return (
    <Box
      sx={{
        padding: "5px",
        height: 120,
        maxWidth: 100,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList height={110} width={60} itemSize={36} itemCount={20}>
        {({ index, style }) =>
          renderRow(
            { index, style },
            handleCountClose,
            setTotalVal,
            setCountValue
          )
        }
        {/* {renderRow} */}
      </FixedSizeList>
    </Box>
  );
}
