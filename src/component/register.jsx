import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Link, useLocation } from "react-router-dom";


const register = () =>{
    return(

        <div style={{"fontFamily":"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",}}>
            
        <form>
          <div style={{"padding":"16px"}} className="formContainer">
            <h1>Sign Up Form</h1>
            <hr style={{"border":"1px solid #f1f1f1","marginBottom":"25px"}} />
            <label style={{"fontSize":"15px"}} htmlFor="email">
              <b>Email</b>
            </label>
            <input style={{"width":"100%","fontSize":"28px","padding":"15px","margin":"5px 0 22px 0","display":"inline-block","border":"none","background":"#f1f1f1"}} type="text" placeholder="Enter Email" name="email" required="" />
            <label style={{"fontSize":"15px"}} htmlFor="password">
              <b>Password</b>
            </label>
            <input style={{"width":"100%","fontSize":"28px","padding":"15px","margin":"5px 0 22px 0","display":"inline-block","border":"none","background":"#f1f1f1"}}
              type="password"
              placeholder="Enter Password"
              name="password"
              required=""
            />
            <label style={{"fontSize":"15px"}} htmlFor="repeatPassword">
              <b>Repeat Password</b>
            </label>
            <input style={{"width":"100%","fontSize":"28px","padding":"15px","margin":"5px 0 22px 0","display":"inline-block","border":"none","background":"#f1f1f1"}}
              type="password"
              placeholder="Repeat Password"
              name="repeatPassword"
              required=""
            />
            <label style={{"fontSize":"15px"}}>
              <input
                type="checkbox"
                defaultChecked="checked"
                name="remember"
                style={{ marginbottom: 15 }}
              />{" "}
              Remember me
            </label>
            <p style={{"fontSize":"28px"}}>
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms &amp; Privacy
              </a>
              .
            </p>
            <div>
              <button style={{"fontSize":"18px","fontWeight":"bold","backgroundColor":"rgb(10, 119, 13)","color":"white","padding":"14px 20px","margin":"8px 0","border":"none","cursor":"pointer","width":"100%","opacity":"0.9","padding":"14px 20px","backgroundColor":"#ff3d2f"}} type="button" className="cancel">
                Cancel
              </button>
              <button style={{"fontSize":"18px","fontWeight":"bold","backgroundColor":"rgb(10, 119, 13)","color":"white","padding":"14px 20px","margin":"8px 0","border":"none","cursor":"pointer","width":"100%","opacity":"0.9"}} type="submit" className="signup">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      














    )
}

export default register;