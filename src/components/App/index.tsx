import React from "react";

export default function App({ userInput }) {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
}
