function Expansion({state, setState, Github, Hosted}) {
    return (
        <>
            <button onClick={()=>setState(!state)}>{state ? 'Collapse' :  'Expand'}</button>
            <a href={Github} target="blank">Github</a>
            <a href={Hosted} target="blank">Hosted</a>
        </>
    )
}
export default Expansion