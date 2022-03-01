let toggle = false
var toggleText = () => {
    toggle = !toggle
    render()
}
function render() {
    let content = (
        <div>
                <button onClick = {toggleText}>toggle text</button>
                {toggle ? <p>this is text</p> : ""}
                
        </div>
    
    )
    
    ReactDOM.render(content, document.getElementById("app"));
}


render()