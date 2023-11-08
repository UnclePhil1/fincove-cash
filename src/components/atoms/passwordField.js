import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';

const CustomTextField = styled(OutlinedInput)({
  "& .MuiOutlinedInput-root": {
    color: "#000", // Text color
    "& fieldset": {
      borderColor: "#A7368D", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#A7368D", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A7368D", // Border color when focused
    },
  },
});

export default function Password() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap" }}
      style={{ width: "100%", margin: "5px 0" }}
    >
      <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <CustomTextField
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          style={{  color: '#A7368D'}}
          className="w-[100%]"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Box>
  );
}