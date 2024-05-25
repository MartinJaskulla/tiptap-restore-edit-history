import Tiptap from "./Tiptap.tsx";
import {useState} from "react";

function App() {
    const [key, setKey] = useState(0)
    return (
        <>
            <button onClick={() => setKey(key + 1)}>New editor</button>
            <Tiptap key={key}/>
        </>
    )
}

export default App
