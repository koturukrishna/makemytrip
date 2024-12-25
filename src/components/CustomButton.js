import * as React from "react";
import { Button, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const CustomButton = ({ eachItem }) => {
  const { href, label, icon } = eachItem;

  const location = useLocation();
  const { pathname } = location;
  console.log(pathname, "pathname");
  const newHref = pathname === "/" ? "/flights" : href;

  return (
    <Link to={newHref} key={label}>
      <Button
        variant="outlined"
        style={{
          backgroundColor: pathname === eachItem.href ? "#1976d2" : "white",
          color: pathname === eachItem.href ? "white" : "black",
          gap: "1px",
          textTransform: "none",
        }}
        size="small"
      >
        <Stack gap={1} direction="row">
          {icon}
          {label}
        </Stack>
      </Button>
    </Link>
  );
};
