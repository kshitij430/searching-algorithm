import React from "react";

export default function App(props) {
  // Simulate user input from props (which is untrusted)
  return <div dangerouslySetInnerHTML={{ __html: props.userInput }} />;
}
