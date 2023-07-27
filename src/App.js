import { useState} from "react";
import "./styles.css";

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}
</button>

const App = () =>{
    const [counter, setCounter] = useState(0)

    const oneClick = () => setCounter(counter + 1)
    const zeroReset = () => setCounter(0)
    const negativeClick = () => setCounter(counter - 1)

    return (
        <div>
        <Display counter={counter}/>
        <Button handleClick={oneClick}
        text="Plus" onClick={handleSubmit} />
        <Button handleClick={negativeClick}
        text="Minus" />
        <Button handleClick={zeroReset}
        text="Zero" />
        </div>
    )
}

export default App;