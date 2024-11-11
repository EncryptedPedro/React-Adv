import React from "react";

export default function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? `Welcome to Little Lemon` : `Using the useEffect hook`
  });  // add a 2nd parameter such as [] to run only once, or [version] to run if there's a different version from before
  
  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
