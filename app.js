//const heading=React.createElement("h1",{},"hello world from react");//creating react cpmponent
const parent=React.createElement("div",{"id":"parent"},
    React.createElement("div",{"id":"child"},
        [React.createElement("h1",{"id":"heading"},"this is nested h1 o1 from nested component"),
        React.createElement("h2",{"id":"mini_heading"},"this is nested h2 o1 from nested component")
        ]
       ));
const root=ReactDOM.createRoot(document.getElementById("root"));//finiding root(where to change or insert the component)
// root.render(heading);
root.render(parent);