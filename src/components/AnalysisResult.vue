<template>
    <v-content>
        <v-flex xs12 class="statistic">
            <v-badge right color="red" class="item">
                <template v-slot:badge>
                    <span>{{ result.vulnerableCount }}</span>
                </template>
                <v-icon>mdi-lock-open</v-icon>
            </v-badge>
            <v-badge right color="red" class="item">
                <template v-slot:badge>
                    <span>{{ result.bugsCount }}</span>
                </template>
                <v-icon>mdi-bug</v-icon>
            </v-badge>
            <v-badge right color="red" class="item">
                <template v-slot:badge>
                    <span>{{ result.smellsCount }}</span>
                </template>
                <v-icon>mdi-radioactive</v-icon>
            </v-badge>
        </v-flex>
        <v-card id="result-card">
            <v-list>
                <v-list-group
                        v-for="line in result.lines"
                        :key="line.number"
                        :append-icon="line.errors ? $vuetify.icons.expand : null"
                        no-action
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title
                                        v-bind:class="{ 'error-line': line.errors }"
                                >{{ line.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                            v-for="(error, index) in line.errors"
                            :key="line.number + index"
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ error.ruleId }}: {{ error.message }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-card>
    </v-content>
</template>

<script>
    export default {
        name: 'AnalysisResult',
        props: {
            result: null
        }
    }
</script>

<style>
    #result-card {
        width: 100%;
    }

    #result-card .v-list__tile {
        height: 30px !important;
    }

    #result-card .error-line {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: red;
    }

    .statistic {
        text-align: center;
    }

    .statistic i {
        font-size: 50px;
    }

    .statistic .item {
        margin-left: 50px;
        margin-right: 50px;
    }
</style>
