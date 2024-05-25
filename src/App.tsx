import Tiptap from "./Tiptap.tsx";
import {Modal, Button} from "antd";
import {useState} from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{height: '120vh'}}>
            <Button type="primary" onClick={showModal} style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Tiptap/>
            </Modal>
        </div>
    )
}

export default App
