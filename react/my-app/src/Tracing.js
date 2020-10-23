import React from "react"
import {unstable_trace as trace} from 'scheduler/tracing'

function Greeting() {
    const [greeting, setGreeting] = React.useState('')
    function handleSubmit(event) {
      event.preventDefault()
      const name = event.target.elements.name.value
      trace('form submitted', performance.now(), () => {
        setGreeting(`Hello ${name}`)
      })
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" />
        </form>
        <div>{greeting}</div>
      </div>
    )
  }

  export default Greeting