<template>
    <table>
        <thead>
            <tr>
                <th class="text-left">Date</th>
                <th class="text-left">TempC</th>
                <th class="text-left">TempF</th>
                <th class="text-left">Summary</th>
                <th colspan="2"></th>
        </thead>
        <tbody>
            <tr v-for="(wf,index) in wfs" :key="index">
                <td>{{(new Date(wf.date.substr(0,10))).toLocaleString('fr-FR', {timeZone:'UTC'}) }}</td>
                <td>{{wf.temperatureC}}</td>
                <td>{{wf.temperatureF}}</td>
                <td>{{wf.summary}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {HTTP} from "./http/ApiClient";
    export default {
        name: 'WfList',
        components: {},
        data() {
            return {
                wfs: []
            };
        },
        created: function () {
            HTTP.get('weatherforecast').then(response => {
                console.log(response);
                this.wfs = response.data;
            }).catch(console.log);
        }
    }
</script>

<style scoped lang="scss">
</style>