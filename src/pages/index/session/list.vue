<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-2" v-for="(i, j) in filter" :key="j">
                <div class="form-group filter">
                    <label for="facultyFilter">{{ i.title }}</label>
                    <select v-model="select[j]" class="form-control filter__select" id="facultyFilter">
                        <option v-for="(n, p) in i.values" :key="p" :value="n.value" >{{ n.name }}</option>
                    </select>
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
                filter: [
                {
                    title: 'Faculty',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        },
                        {
                            name: 'All',
                            value: 'all'
                        },
                        {
                            name: 'All',
                            value: 'all'
                        },
                    ]
                }
            ],
            select: ['all', 'all', 'all'],
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