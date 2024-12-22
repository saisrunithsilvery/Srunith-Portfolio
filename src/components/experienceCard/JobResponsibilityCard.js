import { Accordion, Panel } from "baseui/accordion";
import React, { Component } from "react";
import "./CustomPanelCard.css";
import "./JobResponsibilityCard.css";
import responsibilityImg from "../../assests/images/responsibility.png";

class JobResponsibilityCard extends Component {
  render() {
    const jobResponsibility = this.props.jobResponsibility;
    const theme = this.props.theme;

    const accordionOverrides = {
      Root: {
        style: {
          backgroundColor: theme.body,
        },
      },
    };

    const panelOverrides = {
      Header: {
        style: {
          backgroundColor: theme.body,
          border: `1px solid`,
          borderRadius: `5px`,
          borderColor: `${theme.headerColor}`,
          fontFamily: "Google Sans Regular",
          color: `${theme.text}`,
          fontWeight: "bold",
          ":hover": {
            backgroundColor: `${theme.headerColor}`,
            fontStyle: "italic",
          },
        },
        props: {
          className: "panel-header",
        },
      },
      Content: {
        style: {
          padding: "0 0 10px 0",
          backgroundColor: theme.body,
        },
      },
    };

    return (
      <div className="job-responsibility">
        {jobResponsibility.responsibilities.map((resp, index) => (
          <Panel
            key={index}
            expanded={true}
            onChange={() => {}}
            title={
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={responsibilityImg}
                  alt="responsibility"
                  width="30px"
                  height="30px"
                />
                <h4
                  style={{ color: theme.text, marginLeft: "10px" }}
                  className="accordion-title"
                >
                  {resp.name}
                </h4>
              </div>
            }
            overrides={panelOverrides}
          >
            <ol style={{ color: theme.text }}>
              {resp.data.map((item, subIndex) => (
                <li
                  key={subIndex}
                  style={{ color: theme.text }}
                  className="responsibility-data"
                >
                  {item}
                </li>
              ))}
            </ol>
          </Panel>
        ))}
      </div>
    );
  }
}

export default JobResponsibilityCard;
