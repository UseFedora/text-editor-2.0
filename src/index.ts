import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

const state = EditorState.create({ schema })

new EditorView(
  document.getElementById('app'),
  { state },
)
