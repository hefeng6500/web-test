<template>
  <div>
    <h1>Document editor</h1>
    <!-- <ckeditor :editor="editor" v-model="editorData" @ready="onReady"></ckeditor> -->
    <div class="document-editor">
      <div class="document-editor__toolbar"></div>
      <div class="document-editor__editable-container">
        <div ref="content" class="document-editor__editable">
          <p>The initial editor data.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js";

export default {
  name: "CKEditor5",
  data() {
    return {
      editor: DecoupledEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
      html: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      DecoupledEditor.create(
        document.querySelector(".document-editor__editable"),
        {
          cloudServices: {}
        }
      )
        .then(editor => {
          const toolbarContainer = document.querySelector(
            ".document-editor__toolbar"
          );

          toolbarContainer.appendChild(editor.ui.view.toolbar.element);

          window.editor = editor;
        })
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
    save(){
      console.log(this.$refs.content.innerHTML)
      this.html = this.$refs.content.innerHTML
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.css";

</style>