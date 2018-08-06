<template> 
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session Admins</h2>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col showAdmin">
                <div class="custom-control custom-radio custom-control-inline">
                    <input v-model="select[2]" value="admin" type="radio" id="admin" name="showAdmin" class="custom-control-input" checked="checked">
                    <label class="custom-control-label" for="admin">Admin list</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input v-model="select[2]" value="nonAdmin" type="radio" id="nonAdmin" name="showAdmin" class="custom-control-input">
                    <label class="custom-control-label" for="nonAdmin">Non Admin list</label>
                </div> 
            </div>
        </div>

        
        <div class="row" >
            <div class="col-2" v-for="(i, j) in filter" :key="j">
                <div class="form-group filter">
                    <label for="facultyFilter">{{ i.title }}</label>
                    <select v-model="select[j]" class="form-control filter__select" id="facultyFilter">
                        <option v-for="(n, p) in i.values" :key="p" :value="n.value" >{{ n.name }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row" v-if="select[2]=='admin'">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Department</th> 
                        <th scope="col">Session</th>
                        <th scope="col">Admin Id</th>
                        <th scope="col">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, k) in 5" :key="k">
                            <th scope="row"> {{k+1}} </th> 
                            <td>Computer Science and Engineering</td>
                            <td>2013-14</td>
                            <td>CSE-2013-14</td> 
                            <td>
                                <a href="">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row" v-if="select[2]=='nonAdmin'">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col"><input type="checkbox" v-model="selectAll"></th> 
                        <th scope="col">Department</th>
                        <th scope="col">Session</th>
                        <th scope="col">Admin Id</th>
                        <th scope="col">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, k) in 5" :key="k">
                            <th scope="row"> <input type="checkbox" id="jack" :value="k" v-model="c"> </th> 
                            <td>Computer Science and Engineering</td>
                            <td>2013-14</td>
                            <td>Not yet created</td> 
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
            c: [],
            filter: [ 
                {
                    title: 'Department',
                    values: this.$store.state.department
                },
                {
                    title: 'Session',
                    values: this.$store.state.session
                }
            ],
            select: ['all', 'all', 'admin'],
            radio: ['admin', 'nonAdmin']
        }
    },
    computed: {
        selectAll: {
            get: function() {
                return false;
            },
            set: function(v) {

            }
        }
    },
    methods: {
        check() {
            console.log(this.select);
        }
    },

    mounted() {
       let departmentLen = this.$store.state.department.length;
       if(!departmentLen) {
           this.$store.dispatch('getDepartments');
       }

       let sessionLen = this.$store.state.session.length;
       if(!sessionLen) {
           this.$store.dispatch('getSessions');
       } 
    }
}
</script>
