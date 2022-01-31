import React from "react";
import generateWords from "../helper/number2word";
export default function HomePage() {
  return (
    <div>
      <button onClick={console.log(generateWords("10000000"))}>Test</button>
    </div>
  );
}
