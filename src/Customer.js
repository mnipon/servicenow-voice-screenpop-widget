import React from "react";
import styles from "./Customer.module.css";

//ven03039.service-now.com  - ExperienceAvaya Service Now Account
// use title field since ServiceNow allows this field to be starting with number 1 (for US)
const serviceNowURL =
  "https://ven03039.service-now.com/now/nav/ui/classic/params/target/customer_contact.do%3Fsysparm_query=title=";

const Customer = ({ customerAddress }) => {
  const fullscreenHandler = () => {
    const iframe = document.getElementById("servicenowCustomer");
    console.log("iframe click! :", iframe);
    if (iframe) {
      // Open the iframe content in a new window
      window.open(iframe.src, "_blank");
    }
  };

  return (
    <>
      {!customerAddress && <div>Loading Customer Information</div>}
      {customerAddress && (
        <div className={styles.mainContainer}>
          {/* <div>User ID is {customerInfo.userId}</div> */}
          <iframe
            className={styles.iframe}
            id="servicenowCustomer"
            title="ServiceNow Customer Information"
            src={`${serviceNowURL}${customerAddress}&sysparm_view=CustomerIncident`}
            allowFullScreen
          ></iframe>
          <button className={styles.buttonAction} onClick={fullscreenHandler}>
            Full Screen
          </button>
        </div>
      )}
    </>
  );
};

export default Customer;
