import {EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import './Tiptap.css'
import {useState} from "react";

// define your extension array
const extensions = [
    StarterKit,
    Image
]


const Tiptap = () => {
    const [content, setContent] = useState({})
    console.log(content)
    return (
        <EditorProvider extensions={extensions} content={content}>
            <TiptapChild addImg={() => {
                console.log(2)
                setContent({
                    "type": "doc",
                    "content": [
                        {
                            "type": "image",
                            "attrs": {
                                "src": "https://source.unsplash.com/8xznAGy4HcY/800x400",
                                "alt": null,
                                "title": null
                            }
                        }
                    ]
                })
            }}></TiptapChild>
        </EditorProvider>
    )
}

const TiptapChild = (props: {addImg: () => void}) => {
    const {editor} = useCurrentEditor()
    console.log(editor?.getJSON())

    return (
        <>
            <BubbleMenu editor={editor}>
                <button>Bold</button>
            </BubbleMenu>
            <FloatingMenu editor={editor}>
                <button onClick={props.addImg}>Img</button>
                <button onClick={() => {
                    // TODO Test redo/undo saving editor.state again, then try portals
                    // TODO Undo/redo cannot work like this, because we just set the content.
                    // TODO Undo/redo actually works, just that editor has to have focus.
                    // TODO Is this the issue I have in the real project? The focus? No
                    editor?.chain().setContent({
                        "type": "doc",
                        "content": [
                            {
                                "type": "image",
                                "attrs": {
                                    "src": "https://source.unsplash.com/8xznAGy4HcY/800x400",
                                    "alt": null,
                                    "title": null
                                }
                            }
                        ]
                    }).run()
                }}>Img2</button>
            </FloatingMenu>
        </>
    )

}

export default Tiptap
