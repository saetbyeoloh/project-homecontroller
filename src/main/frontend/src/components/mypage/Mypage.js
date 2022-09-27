import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";
import "../../css/mypage.css";
import Link from "@mui/material/Link";
import UserUpdate from "./UserUpdate";

function Mypage() {
  return (
    <div className="mypageTitle">
      <h1 className="My">마이페이지</h1>
      <div className="icons">
        <Link href="/userupdate">
          <img
            className="a01"
            src="../images/mypage_icons/user_update.png"
            View
            style={{
              padding: 40,
              flex: 1,
              flexDirection: "row",
            }}
          />
          <h3
            style={{
              margin: "0 auto",
            }}
          >
            나의 정보
          </h3>
        </Link>

        <Link href="/wishlist">
          <img
            className="a02"
            src="../images/mypage_icons/wishlist.png"
            View
            style={{
              padding: 40,
              flex: 1,
              flexDirection: "row",
            }}
          />
        </Link>

        <Link href="/cart">
          <img
            className="a03"
            src="../images/mypage_icons/cart.png"
            View
            style={{
              padding: 40,
              flex: 1,
              flexDirection: "row",
            }}
          />
        </Link>
        <Link href="/orderlist">
          <img
            className="a04"
            src="../images/mypage_icons/orderdetails.png"
            View
            style={{
              padding: 40,
              flex: 1,
              flexDirection: "row",
            }}
          />
        </Link>
        <Link href="/myinquiry">
          <img
            className="a05"
            src="../images/mypage_icons/board.png"
            View
            style={{
              padding: 40,
              flex: 1,
              flexDirection: "row",
            }}
          />
        </Link>
        <Link href="/mypoint"></Link>
        <img
          className="a06"
          src="../images/mypage_icons/cupon.png"
          View
          style={{
            padding: 40,
            // flex: 1,
            flexDirection: "row",
          }}
        />
      </div>
    </div>
  );
}

export default Mypage;
