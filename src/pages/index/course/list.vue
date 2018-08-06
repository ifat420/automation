<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Course List</h2>
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
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Course Credit</th>
                        <th scope="col">Course Type</th>
                        <th scope="col">Department</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Session</th>
                        <th scope="col">Program</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(c, k) in courseTable" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{c.courseCode}}</td>
                            <td>{{c.courseTitle}}</td>
                            <td>{{c.courseCredit}}</td>
                            <td>{{c.courseType}}</td>
                            <td>{{c.departmentName}}</td>
                            <td>{{c.semester}}</td>
                            <td>{{c.sessionDesc}}</td>
                            <td>{{c.programAbbr}}</td>
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
            courseObjArray: []
        }
    },
    computed: {
         filter(){ 
            return [
                    {
                        title: 'Department',
                        values: this.$store.state.department
                    }, 
                    {
                        title: 'Program',
                        values: this.$store.state.program
                    }, 
                    {
                        title: 'Semester',
                        values: this.$store.state.semester
                    }

                ]
            },
        courseTable(){
                var dep = this.select[0]
                var pog = this.select[1]
                var sem = this.select[2]
                var nArray = []
                if(dep === 'all'){
                    nArray = this.courseObjArray;
                }

                else{
                    nArray = this.courseObjArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }

                if(pog !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.programAbbr === pog;
                    })
                }
                if(sem !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.semester === sem;
                    })
                }
                
                return nArray;
        }
    },


    methods: {
        getAllCourse(){
                this.$http.get('get/course')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        data.forEach(c => {
                            this.courseObjArray.push({
                                courseCode: c[0],
                                courseTitle: c[1],
                                courseCredit: c[2],
                                courseType: c[3],
                                departmentName: c[4],
                                semester: c[5],
                                sessionDesc: c[6],
                                programAbbr: c[7]

                            })
                        })
                    // console.log(data);
                    })
            },
    },
    mounted(){
        this.getAllCourse();

       let departmentLen = this.$store.state.department.length;
       if(!departmentLen) {
           this.$store.dispatch('getDepartments');
       } 
       let programLen = this.$store.state.program.length;
       if(!programLen) {
           this.$store.dispatch('getPrograms');
       }
       let sessionLen = this.$store.state.session.length;
       if(!sessionLen) {
           this.$store.dispatch('getSessions');
       } 
       let semesterLen = this.$store.state.semester.length;
       if(!semesterLen) {
           this.$store.dispatch('getSemester');
       } 
    }
}
</script>