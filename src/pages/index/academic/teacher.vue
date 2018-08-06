<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Teachers</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Teacher</button>    
                </div>
            </div>    
        </div>
        <div class="row" v-if="showForm">
            <div class="col-6">
                <form>  
                    <div class="group"> 
                        <select v-model="teacherObj.deptName">
                            <option disabled selected value="1">SELECT DEPARTMENT</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 
                    <div class="group">
                        <input v-model="teacherObj.teacherName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="teacherObj.teacherDesc" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Designation</label>
                    </div>  
                    <div class="group">
                        <input v-model="teacherObj.teacherEmail" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                    <div class="group">
                        <input v-model="teacherObj.teacherPhone" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone Number</label>
                    </div>
                    <div class="button">
                        <button @click.prevent="insertTeacher" v-if="!updateButton" class="button__submit" type="submit">Save</button>
                        <button @click.prevent="updateTeacher" v-if="updateButton" class="button__submit" type="submit">Update</button>
                        <button @click.prevent="clear" class="button__submit" type="button">cancel</button>
                    </div>
                </form>    
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
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Department</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(t, k) in teacherTable" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{t.teacherName}}</td>
                            <td>{{t.teacherDesc}}</td>
                            <td>{{t.teacherEmail}}</td>
                            <td>{{t.teacherPhone}}</td>
                            <td>{{t.facultyName}}</td>
                            <td>{{t.departmentName}}</td>
                            <td>
                                <a @click.prevent="goEdit(k)" href="">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
    import {commonData}  from '../../../mixins/commonData.js'
export default {
    mixins: [commonData],
    data() {
        return {
            select: ['all', 'all'],
            showForm: false,
            teacherObjArray: [],
            teacherObj: {
                deptName: '',
                teacherName: '',
                teacherDesc: '',
                teacherEmail: '',
                teacherPhone: '',
                teacherId: ''
            },
            teacherId: '',
            updateButton: false 
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
            ]
        },

       teacherTable(){
            var fcl = this.select[0]
            var dep = this.select[1]
                var nArray = []
                if(fcl === 'all'){
                    nArray = this.teacherObjArray;
                }else{
                    nArray = this.teacherObjArray.filter(el => {
                        return el.facultyName === fcl;
                    })
                }

                if(dep !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }
                
                return nArray;
       }

    },
    methods: {
         getAllTeachers(){
                this.$http.get('get/teacher')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        data.forEach(t => {
                            this.teacherObjArray.push({
                                teacherName: t[0],
                                tedacherDesc: t[1],
                                teacherEmail: t[2],
                                teacherPhone: t[3],
                                facultyName: t[4],
                                departmentName: t[5],
                                teacherId: t[6]
                            })
                        })
                        // console.log(data);
                    })
            },
        insertTeacher(){
                this.$http.post('insert/teacher', this.teacherObj)
                        .then(response => {
                            this.getAllTeachers();
                            this.showForm = false;
                        }, err => {
                            console.log(err);
                        })
                
            },
            goEdit(p){
                this.showForm = true;
                this.updateButton = true;
                let t = this.teacherObjArray[p];
                this.teacherObj.deptName = t.departmentName;
                this.teacherObj.teacherName = t.teacherName;
                this.teacherObj.teacherDesc = t.teacherDesc;
                this.teacherObj.teacherEmail = t.teacherEmail;
                this.teacherObj.teacherPhone = t.teacherPhone;
                this.teacherObj.teacherPhone = t.teacherPhone;
                this.teacherObj.teacherId = t.teacherId;

                
            },
            clear(){
                this.teacherObj.deptName = '';
                this.teacherObj.teacherName = '';
                this.teacherObj.teacherDesc = '';
                this.teacherObj.teacherEmail = '';
                this.teacherObj.teacherPhone = '';

                this.showForm = false;
                this.updateButton = false;
            },
            updateTeacher(){
                this.$http.put(`update/teacher/${this.teacherObj.teacherId}`, this.teacherObj)
                        .then(response=> {
                            this.getAllTeachers();
                            this.showForm = false;
                            this.updateButton = false;
                        }, err => {
                            console.log(err);
                        })
               
            }
    },
    mounted(){
        this.getAllTeachers();
        let FacultyLen = this.$store.state.faculty.length;
        if(!FacultyLen) {
            this.$store.dispatch('getFaculties');
        }

        let departmentLen = this.$store.state.department.length;
        if(!departmentLen) {
            this.$store.dispatch('getDepartments');
        } 
    }
}
</script>

<style lang="scss" scoped>

</style>
