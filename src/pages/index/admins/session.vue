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
            <div v-if="c.length" class="col-2 offset-6">
                <div class="button">
                    <button  class="button__submit" type="button" @click.prevent="createAdmin" >Create Admin</button>
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
                        <tr v-for="(s, k) in sessionTable" :key="k">
                            <th scope="row"> <input type="checkbox"  :value="s.sessionId" v-model="c"> </th> 
                            <td>{{s.departmentName}}</td>
                            <td>{{s.sessionDesc}}</td>
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
            select: ['all', 'all', 'admin'],
            radio: ['admin', 'nonAdmin'],
            sessionObjArray: []
        }
    },
    computed: {
        selectAll: {
            get: function() {
                return this.c.length === this.sessionTable.length ? true : false;
            },
            set: function(v) {
                var arr = [];
                if(v){
                    this.sessionTable.forEach( el => {
                        arr.push(el.sessionId);
                    })
                }
                this.c = arr;
            }
        },

        filter(){
            return [ 
                {
                    title: 'Department',
                    values: this.$store.state.department
                },
                {
                    title: 'Session',
                    values: this.$store.state.session
                }
            ]
        },

        sessionTable(){
                var dep = this.select[0]
                var sec = this.select[1]
            
                var nArray = []
                if(dep === 'all'){
                    nArray = this.sessionObjArray;
                }
                else{
                    nArray = this.sessionObjArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }

                if(sec !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.sessionDesc === sec;
                    })
                }
                
                return nArray;
            }
    },
    methods: {
        check() {
            console.log(this.select);
        },

        createObjectArray(){
            var adminDet = [];
            this.c.forEach(el => {
                this.sessionTable.forEach(k => {
                    if(el === k.sessionId){
                        adminDet.push({
                            deptAbbr: k.departmentNameAbbr,
                            sesId: k.sessionId,
                            sesDes: k.sessionDesc
                        })
                    }
                })
            })
            return adminDet;
        },
        createAdmin(){
            var x = this.createObjectArray();
            this.insertSessionAdmin(x);
        },
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
                                    facultyName: el[3],
                                    sessionId: el[4],
                                    departmentNameAbbr: el[5]
                                });
                            })
                        })
            },

            insertSessionAdmin(x){
                 this.$http.post('insert/sessionAdmin', x)
                        .then(response => {
                            
                        }, error => {
                            console.log(error);
                        })
            }


    },

    mounted() {
       this.getSession();
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
