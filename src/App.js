import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    circleBorder: "18px solid #F2F4F7",
    background: "#fff",
    date: "Thursday, 8. Feb 2024",
    dateColor: "#155EEF",
    heading: "Daily Stand Up",
    headingColor: "#000",

    teamMembers: {
      title: "TEAM MEMBERS",
      titleColor: "#98A2B3",
      members: [
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#155EEF" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#155EEF" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#155EEF" },
        { name: "Zp", color: "#fff", bg: "#0086C9" },
        { name: "Zp", color: "#fff", bg: "#7F56D9" },
      ],
    },

    yesterday: {
      titleContainer: {
        title: "Yesterday’S WORK",
        titleColor: "#98A2B3",
        seperatorLine: "1px solid #D0D5DD",
      },
      border: "1px solid #D0D5DD",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      lists: [
        {
          info: "Key Task Short Description ",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
      ],
    },
    today: {
      titleContainer: {
        title: "TODAY’S WORK",
        titleColor: "#98A2B3",
        seperatorLine: "1px solid #D0D5DD",
      },
      border: "1px solid #D0D5DD",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      lists: [
        {
          info: "Key Task Short Description ",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
      ],
    },
    impediments: {
      titleContainer: {
        title: "IMPEDIMENTS",
        titleColor: "#98A2B3",
        seperatorLine: "1px solid #D0D5DD",
      },
      border: "1px solid #D0D5DD",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      background: "#fff",
      lists: [
        {
          info: "Key Task Short Description ",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
        {
          info: "Key Task Short Description",
          infoColor: "#000",
          names: [
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#0086C9" },
            { name: "Zp", color: "#fff", bg: "#155EEF" },
            { name: "Zp", color: "#fff", bg: "#7F56D9" },
          ],
        },
      ],
    },
  });

  return (
    <div
      style={{
        fontFamily: allData.fontFamily,
        background: allData.background,
      }}
    >
      <MainComponent {...allData} border={allData.circleBorder} />
    </div>
  );
}

export default App;
