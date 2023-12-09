function SelectionButtons({ title1, title2, state, setState }) {
    function handleClick(event){
        setState(Number(event.target.value))
    }
    return (
      <>
        <button name={title1} value={1} className={state === 1 ? "Selected-Button" : null} onClick={handleClick}>
          {title1}
        </button>
        <button name={title2} value={2} className={state === 2 ? "Selected-Button" : null} onClick={handleClick}>
          {title2}
        </button>
      </>
    );
    
 }

 export default SelectionButtons
