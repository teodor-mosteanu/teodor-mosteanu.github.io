import React from "react"

function Footer() {
    const date = new Date(2018, 6, 31, 15)
    const hours = date.getHours()
    let pronoun="mister"
    let timeOfDay
    const styles = {
      fontSize: 30,
      display:`flex`,
      flexDirection:`row`
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }
    
    return (
      <h1 style={styles}>Good {`${timeOfDay} ${pronoun}`}!</h1>
    )
  }

export default Footer