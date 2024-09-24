import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IoIosLogIn } from "react-icons/io";
import { FaClinicMedical, FaQuestion } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BottomNavigationBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();

  return (
    <div className="BottomNavigation">
      {isMobile && (
        <BottomNavigation
          showLabels
          sx={{ width: "100%", position: "fixed", bottom: "0", zIndex: "11" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => navigate("/login")}
            icon={<IoIosLogIn />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/blog")}
            icon={<FaClinicMedical />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/why-choose-wilmart")}
            icon={<FaQuestion />}
          />
        </BottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigationBar;
