import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  date,
  dateColor,
  heading,
  headingColor,
  impediments,
  yesterday,
  today,
  teamMembers,
}) => {
  return (
    <div
      className={classes.mainContainer}
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.leftSide}>
          <div className={classes.headingContainer}>
            <p className={classes.date} style={{ "--color": dateColor }}>
              {date}
            </p>
            <h3 className={classes.heading} style={{ "--color": headingColor }}>
              {heading}
            </h3>
          </div>
          <div
            className={classes.teamMembers}
            style={{ "--color": teamMembers.titleColor }}
          >
            <h4 className={classes.title}>{teamMembers.title}</h4>
            <div className={classes.members}>
              {teamMembers.members.map((el, i) => (
                <p
                  className={classes.name}
                  key={i}
                  style={{ "--bg": el.bg, "--color": el.color }}
                >
                  {el.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <div
            className={classes.box}
            style={{
              "--border": yesterday.border,
              "--boxShadow": yesterday.boxShadow,
              "--bg": yesterday.background,
            }}
          >
            <div
              className={classes.titleContainer}
              style={{
                "--color": yesterday.titleContainer.titleColor,
                "--border": yesterday.seperatorLine,
              }}
            >
              <h4 className={classes.title}>
                {yesterday.titleContainer.title}
              </h4>
            </div>
            <div className={classes.listContainer}>
              {yesterday.lists.map((list, i) => (
                <div className={classes.list} key={i}>
                  <p
                    className={classes.info}
                    style={{ "--color": list.infoColor }}
                  >
                    {list.info}
                  </p>
                  <div className={classes.nameWrapper}>
                    {list.names.map((el, nameKey) => (
                      <p
                        className={classes.name}
                        key={nameKey}
                        style={{ "--bg": el.bg, "--color": el.color }}
                      >
                        {el.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          <div
            className={classes.box}
            style={{
              "--border": today.border,
              "--boxShadow": today.boxShadow,
              "--bg": today.background,
            }}
          >
            <div
              className={classes.titleContainer}
              style={{
                "--color": today.titleContainer.titleColor,
                "--border": today.seperatorLine,
              }}
            >
              <h4 className={classes.title}>{today.titleContainer.title}</h4>
            </div>
            <div className={classes.listContainer}>
              {today.lists.map((list, i) => (
                <div className={classes.list} key={i}>
                  <p
                    className={classes.info}
                    style={{ "--color": list.infoColor }}
                  >
                    {list.info}
                  </p>
                  <div className={classes.nameWrapper}>
                    {list.names.map((el, nameKey) => (
                      <p
                        className={classes.name}
                        key={nameKey}
                        style={{ "--bg": el.bg, "--color": el.color }}
                      >
                        {el.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          <div
            className={classes.box}
            style={{
              "--border": impediments.border,
              "--boxShadow": impediments.boxShadow,
              "--bg": impediments.background,
            }}
          >
            <div
              className={classes.titleContainer}
              style={{
                "--color": impediments.titleContainer.titleColor,
                "--border": impediments.seperatorLine,
              }}
            >
              <h4 className={classes.title}>
                {impediments.titleContainer.title}
              </h4>
            </div>
            <div className={classes.listContainer}>
              {impediments.lists.map((list, i) => (
                <div className={classes.list} key={i}>
                  <p
                    className={classes.info}
                    style={{ "--color": list.infoColor }}
                  >
                    {list.info}
                  </p>
                  <div className={classes.nameWrapper}>
                    {list.names.map((el, nameKey) => (
                      <p
                        className={classes.name}
                        key={nameKey}
                        style={{ "--bg": el.bg, "--color": el.color }}
                      >
                        {el.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
