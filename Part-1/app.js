const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HI Iam h1 tag"),
    React.createElement("h2", {}, "HI Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HI Iam h1 tag"),
    React.createElement("h2", {}, "HI Iam h2 tag"),
  ]),
]);

console.log(parent);

// creating an h1 tag using react it takes three parameters ( tag,object,what to be displayed in tag)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );

// we create a root in dom to display the message in the id root

const root = ReactDOM.createRoot(document.getElementById("root"));

// now we render the message in the browser using the below syntax

root.render(parent);
