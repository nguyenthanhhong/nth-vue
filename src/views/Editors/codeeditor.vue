<template>
    <el-card class="box-card" style="text-align: left; ">
        <editor v-model="content" @init="editorInit" lang="html" theme="chrome" width="100%" height="400"></editor>
    </el-card>
</template>
<script>
export default {
    components: {
        editor: require('vue2-ace-editor'),
    },
    data() {
      return {
          content: "/*  ————————————————————————————————————————————————————————————————————————————\n    HTML\n\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js\"><\/script>\n    <script src=\"//cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js\"><\/script>\n\n    <div id=\"app\">\n\n        <vue-ace-editor \n            v-model:value =\"editorcontent\" \n            v-bind:options=\"editoroptions\" \n            id=\"editor\">\n        </vue-ace-editor>\n\n    </div>\n    ———————————————————————————————————————————————————————————————————————————— */\n\n//  Component\nconst VueAceEditor = {\n    //  simplified model handling using `value` prop and `input` event for $emit \n    props:['value','id','options'],\n\n    //  add dynmic class and id (if not set) based on component tag\n    template:`\n        <div :id=\"id ? id: $options._componentTag +'-'+ _uid\" \n             :class=\"$options._componentTag\">\n            <slot></slot>\n        </div>\n    `,\n\n    watch:{\n        value() { \n            //  two way binding – emit changes to parent\n            this.$emit('input', this.value);\n            \n            //  update value on external model changes\n            if(this.oldValue !== this.value){ \n                this.editor.setValue(this.value, 1); \n            }\n        }\n    },\n   \n    mounted(){\n        //  editor\n        this.editor = window.ace.edit(this.$el.id);\n        \n        //  deprecation fix\n        this.editor.$blockScrolling = Infinity;        \n\n        //  ignore doctype warnings\n        const session = this.editor.getSession();\n        session.on(\"changeAnnotation\", () => {\n            const a = session.getAnnotations();\n            const b = a.slice(0).filter( (item) => item.text.indexOf('DOC') == -1 );\n            if(a.length > b.length) session.setAnnotations(b);\n        });\n\n        //  editor options \n        //  https://github.com/ajaxorg/ace/wiki/Configuring-Ace\n        this.options = this.options || {};\n        \n        //  opinionated option defaults\n        this.options.maxLines = this.options.maxLines || Infinity;\n        this.options.printMargin = this.options.printMargin || false;      \n        this.options.highlightActiveLine = this.options.highlightActiveLine || false;\n\n        //  hide cursor \n        if(this.options.cursor === 'none' || this.options.cursor === false){\n            this.editor.renderer.$cursorLayer.element.style.display = 'none';\n            delete this.options.cursor; \n        }\n\n        //  add missing mode and theme paths \n        if(this.options.mode && this.options.mode.indexOf('ace/mode/')===-1) {\n            this.options.mode = `ace/mode/${this.options.mode}`;\n        }\n        if(this.options.theme && this.options.theme.indexOf('ace/theme/')===-1) {\n            this.options.theme = `ace/theme/${this.options.theme}`;\n        }\n        this.editor.setOptions(this.options);\n        \n        \n        //  set model value \n        //  if no model value found – use slot content\n        if(!this.value || this.value === ''){\n            this.$emit('input', this.editor.getValue());\n        } else {\n            this.editor.setValue(this.value, -1);\n        }        \n        \n        //  editor value changes   \n        this.editor.on('change', () => {\n            //  oldValue set to prevent internal updates\n             this.value = this.oldValue = this.editor.getValue();\n        });\n        \n\n    },\n    methods:{ editor(){ return this.editor } }\n};\n\n\n\n//  Implementation\nnew Vue({\n    el: '#app',\n    components:{ 'vue-ace-editor': VueAceEditor },\n    data:{\n        //  content string\n        editorcontent: '',\n        \n        //  options object\n        //  https://github.com/ajaxorg/ace/wiki/Configuring-Ace\n        editoroptions: {\n            mode:'javascript',\n            theme: 'tomorrow',\n            fontSize: 11,\n            fontFamily: 'monospace',\n            highlightActiveLine: false,\n            highlightGutterLine: false                \n        }\n    }\n});"
      }
    },
    methods: {
        editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')                
            require('brace/mode/javascript')    //language
            require('brace/mode/less')
            require('brace/theme/chrome')
            require('brace/snippets/javascript') //snippet
        }
    },
}
</script>