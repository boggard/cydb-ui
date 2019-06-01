<template>
    <div>
        <Header/>
        <v-content class="cards-check-page">
            <v-container fluid>
                <v-layout
                        row
                        wrap>
                    <v-flex xs12>
                        <v-container fluid>
                            <v-layout align-center
                                      justify-center
                                      row
                                      wrap
                            >
                                <v-form ref="form" v-if="!result" class="input-form">
                                    <v-layout justify-center align-center row>
                                        <FileSelect class="file-select"
                                                    box
                                                    label="Выберите файл"
                                                    @change="onFileSelected"
                                        />

                                        <v-btn class="check-btn"
                                               @click="sendFile"
                                        >
                                            Анализ
                                        </v-btn>
                                    </v-layout>
                                </v-form>
                                <AnalysisResult v-if="result"
                                                :result="result"
                                >

                                </AnalysisResult>
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
    import AnalysisResult from "@/components/AnalysisResult";
    import { analyze } from "@/client/analyze-client"

    export default {
        name: 'Main',
        components: {
            AnalysisResult,
            Header,
            FileSelect
        },
        data() {
            return {
                file: null,
                result: null
            }
        },
        methods: {
            onFileSelected: function (file) {
                this.file = file;
            },
            sendFile: async function () {
                const result = await analyze(this.file);
                this.result = result.data.lines;
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
