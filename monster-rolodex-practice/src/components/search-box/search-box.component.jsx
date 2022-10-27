import "./searc.styles.css";
const MonsterSearchBox = ({onChangeHanlder,placeholder,className}) => {

    return (

        <div>
            <input type='search' className={className} placeholder={placeholder} onChange={onChangeHanlder}></input>
        </div>

    );
}

export default MonsterSearchBox;