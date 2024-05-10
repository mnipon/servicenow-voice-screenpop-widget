import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./neo.css";
import Customer from "./Customer";

function CustomerInfo({ api }) {
  console.log("api data - ", api);
  const [customerAddress, setCustomerAddress] = useState("");

  useEffect(() => {
    api.onDataEvent("onInteractionEvent", (data) => {
      console.log("onInteractionEvent is :", data);
      for (let i of Object.keys(data)) {
        var newData1 = data[i];
        console.log(i, newData1);
        if (i === "originatingAddress") {
          console.log(i, data[i]);
          setCustomerAddress(data[i].replace(/\+/g, ""));
        }
      }
    });
  }, []);

  console.log("Customer Number is :", customerAddress);

  if (customerAddress) {
    return (
      <Fragment>
        <Customer customerAddress={customerAddress} />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div>Loading Customer Information</div>
      </Fragment>
    );
  }
}

export default CustomerInfo;
