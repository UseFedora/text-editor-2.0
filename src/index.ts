import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { keymap } from 'prosemirror-keymap'
import { baseKeymap } from 'prosemirror-commands'

const state = EditorState.create({
  schema,
  plugins: [ keymap(baseKeymap) ],
})

new EditorView(document.getElementById('app'), { state })
