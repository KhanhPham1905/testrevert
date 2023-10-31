import { ConfigProvider, Form, Input, TimePicker } from "antd"
import dayjs from "dayjs"
import React, { useState } from "react"
import updateLocale from "dayjs/plugin/updateLocale"

export const HorizontalLine = ({ color }) => (
  <div
    style={{
      height: "1px",
      backgroundColor: color,
      //   margin: "0px 10px",
      width: "100%",
      marginBottom: "20px"
    }}
  ></div>
)

export const MySelectTime = ({
  name,
  label,
  info,
  time,
  handleChangeTime
}) => {
  const [selected, setSelected] = useState()
  dayjs.extend(updateLocale)

  dayjs.updateLocale("en", {
    meridiem: () => {
      // OPTIONAL, AM/PM
      return hour > 12 ? "CH" : "SA"
    }
  })
  const format = "HH:mm A"

  const cellRender = (current, info) => {
    const { originNode, type, subType } = info

    const currentHour = selected?.$H
    if (subType === "meridiem") {
      return (
        <div style={{ padding: "5px 0px" }}>
          <p>{current === 0 ? "SA" : "CH"}</p>
        </div>
      )
    } else {
      return (
        <div style={{ padding: "5px 0px" }}>
          <p>{current}</p>
        </div>
      )
    }
  }

  return (
    <Form.Item name={name} initialValue={time}>
      <p style={{ fontWeight: "500" }}>{info}</p>
      <p style={{ fontWeight: "500", marginBottom: "5px" }}>{label}</p>
      <TimePicker
        size="large"
        format={"HH:mm"}
        placeholder="Chọn thời gian"
        style={{ width: "100%" }}
        defaultValue={dayjs(time, 'HH:mm')}
        onChange={(value, dateString) => handleChangeTime && handleChangeTime(dateString, name)}
        // cellRender={cellRender}
        // renderExtraFooter={() => null}
        // defaultValue={dayjs("00:00 AM", format)}
        changeOnBlur
      />
      {/* <Input type="time" size="large" /> */}
    </Form.Item>
  )
}

export const MyTimePicker = ({
  name,
  label,
  required
}) => {
  const [selected, setSelected] = useState()
  dayjs.extend(updateLocale)

  dayjs.updateLocale("en", {
    meridiem: () => {
      // OPTIONAL, AM/PM
      return hour > 12 ? "CH" : "SA"
    }
  })
  const format = "HH:mm A"

  const cellRender = () => {
    const { originNode, type, subType } = info

    const currentHour = selected?.$H
    if (subType === "meridiem") {
      return (
        <div style={{ padding: "5px 0px" }}>
          <p>{current === 0 ? "SA" : "CH"}</p>
        </div>
      )
    } else {
      return (
        <div style={{ padding: "5px 0px" }}>
          <p>{current}</p>
        </div>
      )
    }
  }

  return (
    <Form.Item
      name={name}
      required={required}
      label={<p>{label}</p>}
      labelCol={{ span: 24 }}
    >
      <TimePicker
        size="large"
        format={format}
        placeholder="Chọn thời gian"
        style={{ width: "100%" }}
        cellRender={cellRender}
        renderExtraFooter={() => null}
        // defaultValue={dayjs("00:00 AM", format)}
        changeOnBlur
      />
    </Form.Item>
  )
}
