<template>
    <div class="file-select">
        <v-text-field :prepend-icon="icon"
                      :box="box"
                      :solo="solo"
                      :solo-inverted="soloInverted"
                      :outline="outline"
                      v-model="fileName"
                      :label="label"
                      :readonly="true"
                      single-line
                      persistent-hint
                      @click.native="selectFile"/>
        <input ref="fileInput"
               type="file"
               @change="onFileSelected">
    </div>
</template>

<script>
    export default {
        name: 'FileSelect',
        props: {
            label: null,
            hideIcon: null,
            box: null,
            solo: null,
            soloInverted: null,
            outline: null,

        },
        data() {
            return {
                fileName: '',
                fileSelectionActivated: false,

            }
        },
        computed: {
          icon() {
              return this.hideIcon ? null : 'attach_file';
          }
        },
        methods: {
            selectFile: function() {
                if (this.fileSelectionActivated) {
                    return;
                }
                this.fileSelectionActivated = true;
                this.$refs.fileInput.click();
                setTimeout(() => {
                    this.fileSelectionActivated = false;
                }, 1000);
            },
            onFileSelected: function(event) {
                const target = event.target;
                if (target.files && target.files.length > 0) {

                    const file = target.files[0];

                    this.setFile(file);
                }
            },
            clearFile: function() {
                this.fileName = '';
                this.$emit('change', null);
            },
            setFile: function(file) {
                this.fileName = file.name;
                this.$emit('change', file);
            }
        }
    }
</script>

<style scoped>
    input[type=file] {
        display: none;
    }
</style>
