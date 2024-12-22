export default function TabButton({children, onSelect, isSelected}) {
    // function clickHandler() {
    //     console.log("Hello World");
    // }
    
    return (
        <li>
            <button className={ isSelected? "active" : ""} onClick={onSelect}>{children}</button>
        </li>
    );
}