import * as React from "react";
import { Paper, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import {
  Flight,
  Hotel,
  Home,
  Train,
  DirectionsBus,
  LocalTaxi,
  MonetizationOn,
} from "@mui/icons-material";

const routingNames = [
  { label: "Flights", href: "/flights", icon: <Flight /> },
  { label: "Hotels", href: "/hotels", icon: <Hotel /> },
  {
    label: "Homestays & Villas",
    href: "/homestays",
    icon: <Home />,
  },
  { label: "Trains", href: "/trains", icon: <Train /> },
  { label: "Buses", href: "/buses", icon: <DirectionsBus /> },
  { label: "Cabs", href: "/cabs", icon: <LocalTaxi /> },
  {
    label: "Forex Card & Currency",
    href: "/currency",
    icon: <MonetizationOn />,
  },
  {
    label: "Trvel Insurance",
    href: "/Insurance",
    icon: <Train />,
  },
];

export default function NavButtons() {
  return (
    <Stack sx={{ marginTop: "15px", gap: "10px" }}>
      <Paper elevation={3} sx={{ height: "100px" }} padding={25}>
        <Stack
          spacing={2}
          direction="row"
          sx={{ padding: "25px", paddingLeft: "150px" }}
        >
          {routingNames.map((eachItem) => {
            return (
              <Stack spacing={2}>
                <CustomButton key={eachItem.label} eachItem={eachItem} />
              </Stack>
            );
          })}
        </Stack>
        <main>
          <Outlet />
        </main>
      </Paper>
    </Stack>
  );
}
