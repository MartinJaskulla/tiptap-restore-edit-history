import {EditorProvider, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './Tiptap.css'
import {persistState, restoreState} from "./persistState.ts";

const extensions = [
    StarterKit,
]


const Tiptap = () => {
    // content can be set only initially
    return (
        <EditorProvider extensions={extensions} content={{}}>
            <TiptapChild></TiptapChild>
        </EditorProvider>
    )
}

const TiptapChild = () => {
    const {editor} = useCurrentEditor()

    return (
        <>
            <button
                onClick={() => persistState(editor?.state)}>
                Persist
            </button>
            <button
                onClick={() => {
                    // History is restored. editor.state.history$ has the previous edit, but cmd+z still does not work.
                    editor?.view.updateState(restoreState())
                    // Writing 3 more characters after restoring gives out of range error
                }}
            >
                Restore
            </button>
        </>
    )

}

export default Tiptap
