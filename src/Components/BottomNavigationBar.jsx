import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IoIosLogIn } from "react-icons/io";
import { FaClinicMedical, FaQuestion } from "react-icons/fa";

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
          <BottomNavigationAction icon={<IoIosLogIn />} />
          <BottomNavigationAction icon={<FaClinicMedical />} />
          <BottomNavigationAction icon={<FaQuestion />} />
        </BottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigationBar;
