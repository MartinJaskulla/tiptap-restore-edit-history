import Tiptap from "./Tiptap.tsx";
import {Dialog, DialogTitle} from "@mui/material";

function App() {
    return (
        <Dialog open={true}>
            <DialogTitle>Set backup account</DialogTitle>
            <Tiptap/>
        </Dialog>
    )
}

export default App
