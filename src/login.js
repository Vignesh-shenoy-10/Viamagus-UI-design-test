import React from "react";
import Rectangle from "./assets/Rectangle.png";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Tree from "./assets/Tree.png";
import Amazon from "./assets/Amazon.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Icon from "@material-ui/core/Icon";
import Facebook from "./assets/Facebook.png"
import Google from "./assets/Google.png"



export default function Login() {

  const submitData = () => {};

  return (
    <div>
      <div
        style={{
          top: 0,
          left: 0,
          height: 50,
          border: "1px solid #707070",
          opacity: 1,
        }}
      >
        <img
          src={Rectangle}
          alt="forest_image"
          style={{
            width: "100%",
            top: 0,
            left: 0,
            height: 263,
            border: "1px solid #707070",
          }}
        />
      </div>

      <Card
        variant="outlined"
        sx={{
          top: 81,
          left: 395,
          width: 577,
          height: 687,
          borderRadius: 6,
          opacity: 1,
        }}
      >
        <Card sx={{ width: 547, opacity: 1 }}>
          <center>
            <img
              src={Amazon}
              alt="amazon"
              style={{ width: 99, height: 32, top: 95, left: 632 }}
            />
          </center>
        </Card>

        <div>
          <Typography
            sx={{
              fontFamily: "Josefin Sans,Regular Roman",
              fontSize: 29,
              letterSpacing: 0,
              color: "#20B716",
              font: "normal normal normal 29px/35px Josefin Sans",
            }}
          >
            Login
          </Typography>
        </div>
        <center>
          <img
            src={Tree}
            alt="forest_image"
            style={{ width: 385, top: 0, left: 0, height: 128 }}
          />
        </center>
        <center>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            sx={{
              width: 385,
              height: 25,
              marginTop: 1,
              fontFamily: "Josefin Sans,Regular Roman",
            }}
          />
        </center>
        <center>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            sx={{ width: 385, height: 25, marginTop: 4 }}
          />
        </center>
        <center>
          <Button
            variant="contained"
            onClick={submitData}
            sx={{
              width: 386,
              height: 50,
              opacity: 1,
              marginTop: 5,
              fontFamily: "Josefin Sans,Regular Roman",
              background: "#20B716",
              color: "white",
              borderRadius: 40,
            }}
          >
            Sign In
          </Button>
        </center>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Josefin Sans,Regular Roman",
              fontSize: 29,
              letterSpacing: 0,

              color: "black",
              marginLeft: 10,
              marginTop: 2,
              width: 110,
              font: "normal normal normal 14px/18px Josefin Sans",
            }}
          >
            Forgot Password?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Josefin Sans,Regular Roman",
              fontSize: 29,
              letterSpacing: 0,
              marginRight: 10,
              color: "#D9185F",
              fontWeight: "bold",

              marginTop: 2,
              width: 123,
              font: "normal normal normal 14px/18px Josefin Sans",
            }}
          >
            New User? Sign Up
          </Typography>
        </div>
        <center>
          <Typography
            sx={{
              fontFamily: "Josefin Sans,Regular Roman",
              fontSize: 29,
              letterSpacing: 0,
              color: "black",
              fontWeight: "bold",
              height: 16,
              marginTop: 2,
              width: 15,
              font: "normal normal normal 16px/19px Josefin Sans",
            }}
          >
            or
          </Typography>
        </center>
     
        <center>
        
           <Button variant="contained" style={{width:386,height:46}}><img alt="edit" src={Google} style={{width:36, height:36,marginRight:24}}/>CONTINUE WITH GOOGLE</Button>
        </center>

        
        <center>
        
           <Button variant="contained" style={{width:386,height:46}}><img alt="edit" src={Facebook} style={{width:36, height:36,marginRight:10}}/>CONTINUE WITH FACEBOOK</Button>
        </center>
      </Card>
    </div>
  );
}
