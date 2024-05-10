import React, { createElement } from "react";
import ReactDOM from "react-dom";
import ReactHTMLElement from "react-html-element";
import { render, unmountComponentAtNode } from "react-dom";
import CustomerInfo from "./CustomerInfo";

class ServiceNowVoiceScreenpop extends ReactHTMLElement {
  connectedCallback() {
    // const interactionId = this.getAttribute("interaction-id");
    // const workRequestId = this.getAttribute("work-request-id");
    // const externalInteractionId = this.getAttribute("external-interaction-id");
    // const api = window.NewAvayaWidgetAPI({
    //   interactionId,
    //   workRequestId,
    //   externalInteractionId,
    // });

    const interactionId = this.getAttribute("interactionid");
    this.api = window.WS?.widgetAPI(interactionId);
    // console.log("original API#1 - ", api);

    // ReactDOM.render(<CustomerInfo api={this.api} />, this);
    ReactDOM.render(<CustomerInfo api={this.api} />, this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(CustomerInfo);
  }
}

customElements.define("servicenow-voice-screenpop", ServiceNowVoiceScreenpop);
