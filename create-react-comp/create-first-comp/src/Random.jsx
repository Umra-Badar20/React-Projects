export function Random() {
    let randomNumber = Math.random()*100
    return <p style={{color:"blue", 'background-color':"pink"}}>Random Number is :{Math.round(randomNumber)}</p>
}