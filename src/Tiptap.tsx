import {EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor, JSONContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import './Tiptap.css'
import {useEffect, useState} from "react";

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
            <TiptapChild content={content} addImg={() => {
                console.log(2)
                setContent({
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "asdsadasdsad"
                                }
                            ]
                        }
                    ]
                })
            }}></TiptapChild>
        </EditorProvider>
    )
}

const TiptapChild = (props: { addImg: () => void, content: JSONContent }) => {
    const {editor} = useCurrentEditor()
    console.log(1, editor?.getJSON())
    console.log(2, props.content)

    useEffect(() => {
        editor?.chain().focus().setContent(props.content).run()
    }, [props.content]);

    return (
        <>
            <BubbleMenu editor={editor}>
                <button>Bold</button>
            </BubbleMenu>
            <FloatingMenu editor={editor}>
                <button onClick={props.addImg}>Img</button>
            </FloatingMenu>
        </>
    )

}

export default Tiptap
