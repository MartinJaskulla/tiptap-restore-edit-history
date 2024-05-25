import {EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import './Tiptap.css'

// define your extension array
const extensions = [
    StarterKit,
    Image
]

const content = '<p>A</p><p>B</p><p>C</p><img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />'

const Tiptap = () => {
    return (
        <EditorProvider extensions={extensions} content={content}>
            <TiptapChild></TiptapChild>
        </EditorProvider>
    )
}

const TiptapChild = () => {
    const {editor} = useCurrentEditor()

    return (
        <>
            <BubbleMenu editor={editor}>
                <button>Bold</button>
            </BubbleMenu>
            <FloatingMenu editor={editor}>
                <button>H1</button>
            </FloatingMenu>
        </>
    )

}

export default Tiptap
