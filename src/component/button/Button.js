


function Button({text,handler,myclass}) {

    return(
        <>
        <button type="button" className={myclass}  id={text} onClick={handler}> {text} </button>
        </>
    )
    
}
export default Button;