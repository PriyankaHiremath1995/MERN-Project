import React, { useState, useEffect } from "react";
import {Row} from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

var _ = require('lodash');

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
        navigate("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [navigate, userInfo]);

  const userType = userInfo.isAdmin? "ADMIN" : "CUSTOMER";

  return (
    <MainScreen title="PROFILE DETAILS">
        <div>
            <Row>
                <h1>Name : </h1>&nbsp;
                <h1>{_.startCase(name)}</h1>
            </Row>
            <Row>
                <h1>Email : </h1>&nbsp;
                <h1>{email}</h1>
            </Row>
            <Row>
                <h1>User Type : </h1>&nbsp;
                <h1>{userType}</h1>
            </Row>
        </div>
    </MainScreen>
  );
};

export default ProfilePage;