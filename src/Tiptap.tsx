import {EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// define your extension array
const extensions = [
    StarterKit,
]

const content = '<p>Hello World!</p>'

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
