<template>
    <div>
        <Header/>
        <v-content class="cards-check-page">
            <v-container fluid>
                <v-layout class="input-form"
                          row
                          wrap>
                    <v-flex xs8 offset-xs2>
                        <v-container fluid>
                            <v-layout align-center
                                      justify-center
                                      row
                                      wrap
                            >
                                <v-form ref="form">
                                    <v-layout justify-center align-center row>
                                        <FileSelect class="file-select"
                                                    box
                                                    label="Выберите файл"
                                                    @change="onFileSelected"
                                        />

                                        <v-btn class="check-btn"
                                        >
                                            Анализ
                                        </v-btn>
                                    </v-layout>
                                </v-form>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import FileSelect from '../components/FileSelect';

    export default {
        name: 'Main',
        components: {
            Header,
            FileSelect
        },
        data() {
            return {
                file: null
            }
        },
        methods: {
            onFileSelected: function(file) {
                this.file = file;
            }
        }
    }
</script>

<style scoped>
    .v-form {
        width: 100%;
    }

    .input-form {
        margin-top: 25vh;
    }

    .file-select {
        width: 55% !important;
        height: 56px;
    }

    .check-btn {
        height: 56px;
        padding: 0 30px;
    }

    input[type=file] {
        display: none;
    }
</style>
