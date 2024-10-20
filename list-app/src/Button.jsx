function Button(){
    const clickManager = () =>{
        alert("This button has been clicked")
    }

    return(
        <div>
            <button onClick={clickManager}>Click To Learn About Events</button>
        </div>
    )
}

export default Button


