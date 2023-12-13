function LinkButtons({codeLink, hostedLink}) {
    return (
        <div className="linkButton">
            <a href={codeLink} target="blank">Code</a>
            <a href={hostedLink} target="blank">Try it</a>
        </div>
    )
}
export default LinkButtons