<template>
    <div class="container-flud">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session</h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="filter">
                    <span class="filter__head">Faculty </span>
                    <span class="filter__item">Engineering</span>
                    <span class="filter__item">Biology</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Department </span>
                    <span class="filter__item">CSE</span>
                    <span class="filter__item">EST</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Program </span>
                    <span class="filter__item">BSC</span>
                    <span class="filter__item">MSC</span>
                </div>
            </div>
        </div> 

        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Department</th>
                        <th scope="col">Program</th>
                        <th scope="col">Session</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(session, k) in sessions" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{session[0]}}</td>
                            <td>{{session[1]}}</td>
                            <td>{{session[2]}}</td>
                            <td>{{session[3]}}</td>
                            <td>
                                <a href="">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sessions: []
            }
        },

        methods: {
            

            getSession(){
                this.$http.get('get/session')
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            this.sessions = data;
                        })
            }
        },
        mounted() {
            this.getSession();
        }
    }
</script>