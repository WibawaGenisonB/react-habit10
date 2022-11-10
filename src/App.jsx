import React from "react"
import boxes from "./boxes.js"
import Box from "./components/Box.jsx"
import "./style.css"

export default function App(props) {
  const [boxesArray, setBoxesArray] = React.useState(boxes)

  function toggle(id) {
    setBoxesArray(() => {
      return boxesArray.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box
      })
    })
  }

  const boxesDiv = boxesArray.map((box) => {
    return <Box key={box.id} on={box.on} toggle={() => toggle(box.id)} />
  })

  return <main>{boxesDiv}</main>
}
