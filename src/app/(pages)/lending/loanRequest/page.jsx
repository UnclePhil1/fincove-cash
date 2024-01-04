"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const LoanRequest = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
            Request Loan
          </h1>
          <p className=" text-center">
            Access loans in fiat and Digital Currency
          </p>
        </div>

        <div className="my-4 flex flex-col gap-5">
          <div className="flex justify-center items-center">
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">
                Currency
              </InputLabel>
              <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel id="demo-customized-select-label">Sym</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>NG</em>
                </MenuItem>
                <MenuItem value={10}>BTC</MenuItem>
                <MenuItem value={20}>ETH</MenuItem>
                <MenuItem value={30}>PEPE</MenuItem>
                <MenuItem value={30}>GOA</MenuItem>
                <MenuItem value={30}>ALT</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-center items-center">
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">
                Duration
              </InputLabel>
              <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel id="demo-customized-select-label">Due</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>Days</em>
                </MenuItem>
                <MenuItem value={10}>Hours</MenuItem>
                <MenuItem value={20}>Days</MenuItem>
                <MenuItem value={30}>Weeks</MenuItem>
                <MenuItem value={30}>Months</MenuItem>
                <MenuItem value={30}>Year(s)</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">
                Duration
              </InputLabel>
              <BootstrapInput id="demo-customized-textbox" />
            </FormControl>

          <Link
            href={"/lendings/success"}
            title="Fill the form to proceed"
            className={`py-2 mt-5 px-4 w-[100%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
          >
            Submit Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanRequest;
