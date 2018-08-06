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
                        <tr v-for="(s, k) in sessionTable" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{s.departmentName}}</td>
                            <td>{{s.programAbbr}}</td>
                            <td>{{s.sessionDesc}}</td>
                            <td>{{s.facultyName}}</td>
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
                select: ['all', 'all', 'all'],
                sessionObjArray: []
            }
        },
        computed: {
          filter(){ 
            return [
                    {
                        title: 'Faculty',
                        values: this.$store.state.faculty
                    },
                    {
                        title: 'Department',
                        values: this.$store.state.department
                    }, 
                    {
                        title: 'Program',
                        values: this.$store.state.program
                    }, 
                ]
            },
            sessionTable(){
                var fcl = this.select[0]
                var dep = this.select[1]
                var pog = this.select[2]
                var nArray = []
                if(fcl === 'all'){
                    nArray = this.sessionObjArray;
                }else{
                    nArray = this.sessionObjArray.filter(el => {
                        return el.facultyName === fcl;
                    })
                }

                if(dep !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }

                if(pog !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.programAbbr === pog;
                    })
                }
                
                return nArray;
            }
        },

        methods: {
            getSession(){
                this.$http.get('get/session')
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            data.forEach(el => {
                                this.sessionObjArray.push({
                                    departmentName: el[0],
                                    programAbbr: el[1],
                                    sessionDesc: el[2],
                                    facultyName: el[3]
                                });
                            })
                        })
            }
        },
        mounted() {
            this.getSession();
            let FacultyLen = this.$store.state.faculty.length;
            if(!FacultyLen) {
                this.$store.dispatch('getFaculties');
            }

            let departmentLen = this.$store.state.department.length;
            if(!departmentLen) {
                this.$store.dispatch('getDepartments');
            } 
            let programLen = this.$store.state.program.length;
            if(!programLen) {
                this.$store.dispatch('getPrograms');
            }
        }
    }
</script>