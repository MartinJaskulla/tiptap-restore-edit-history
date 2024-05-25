import {useState} from "react";
import Tiptap from "./Tiptap.tsx";
import SlButton from '@shoelace-style/shoelace/dist/react/button/index.js';
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog/index.js';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tiptap/>
            <SlDialog open={open} onSlAfterHide={() => setOpen(false)}>
                {/* TODO Error messages */}
                <Tiptap/>
            </SlDialog>

            <SlButton
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
                onClick={() => setOpen(true)}
            >
                Open Dialog
            </SlButton>
        </>
    )
}

export default App
