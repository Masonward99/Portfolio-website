function List({componentsList}) {
    return (
        <ul className="Component-List">
            {componentsList.map((Comp , key) => (
                    <li key={key}><Comp /></li>
                )
             )}
        </ul>
    )
}
export default List