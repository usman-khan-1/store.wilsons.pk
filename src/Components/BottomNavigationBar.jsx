import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function BottomNavigationBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();
  return (
    <div>
      {isMobile && (
        <BottomNavigation
          showLabels
          sx={{ width: "100%", position: "fixed", bottom: "0", zIndex: "11" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Link 1" icon={<IoHome />} />
          <BottomNavigationAction label="Link 2" icon={<IoHome />} />
          <BottomNavigationAction label="Link 3" icon={<IoHome />} />
        </BottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigationBar;
