<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Students</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add student</button>    
                </div>
            </div>    
        </div>
        <div class="row" v-if="showForm">
            <div class="col-6">
                <form>  
                    <div class="group"> 
                        <select v-model="studentObject.departmentName">
                            <option disabled selected value="1">SELECT DEPARTMENT</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 
                    
                    <div class="group"> 
                        <select v-model="studentObject.progAbbr">
                            <option disabled selected value="1">SELECT PROGRAM</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>

                    <div class="group"> 
                        <select v-model="studentObject.session">
                            <option disabled selected value="1">SELECT SESSION</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>
                    <div class="group"> 
                        <select v-model="studentObject.hallName">
                            <option disabled selected value="1">SELECT HALL</option> 
                            <option v-for="(hall, k) in allHall" :key="k" :value="hall[2]">{{hall[2]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>

                    <div class="group">
                        <input v-model="studentObject.roll" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Roll Number</label>
                    </div>
                    <div class="group">
                        <input v-model="studentObject.reg" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Registration Number</label>
                    </div>

                    <div class="group">
                        <input v-model="studentObject.fstName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>First Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.lstName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Last Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.fatherName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Father Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.motherName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Mother Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.phoneNumber" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone Number</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.dob" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Date of Birth</label>
                    </div>
                   <div class="group"> 
                        <select v-model="studentObject.gender">
                            <option disabled selected value="1">SELECT GENDER</option> 
                            <option value="male">Male</option> 
                            <option value="femail">Female</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>
                    <div class="group">
                        <input v-model="studentObject.religion" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Religion Name</label>
                    </div>  
                    <div class="group">
                        <input v-model="studentObject.preAdd" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Present Address</label>
                    </div>
                    <div class="group">
                        <input v-model="studentObject.perAdd" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Permanent Address</label>
                    </div>
                    <div class="group">
                        <input v-model="studentObject.email" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email Address</label>
                    </div>
                    <div class="group">
                        <input v-model="studentObject.nation" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Nationality</label>
                    </div> 
                    <div class="group">
                        <input v-model="studentObject.status" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Status</label>
                    </div>
                    
                    <div class="button">
                        <button @click.prevent="insertStudent" class="button__submit" type="submit">submit</button>
                        <button @click.prevent="showForm = false" class="button__submit" type="button">cancel</button>
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th> 
                        <th scope="col">Department</th>
                        <th scope="col">Sesson</th>
                        <th scope="col">Program</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(s, k) in studentTable" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{s.firstName}}</td>
                            <td>{{s.lstName}}</td>
                            <td>{{s.studentEmail}}</td>
                            <td>{{s.studentPhone}}</td> 
                            <td>{{s.departmentName}}</td>
                            <td>{{s.session}}</td>
                            <td>{{s.progAbbr}}</td>
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
    import {commonData}  from '../../../mixins/commonData.js'
export default {
    mixins: [commonData],
    data() {
        return {
            select: ['all', 'all', 'all'],
            showForm: false,
            studentArray: [],
            studentObjectArray: [],
            studentObject: {
                departmentName: '',
                progAbbr: '',
                session: '',
                roll: '',
                reg: '',
                fstName: '',
                lstName: '',
                fatherName: '',
                motherName: '',
                phoneNumber: '',
                dob: '',
                gender: '',
                religion: '',
                preAdd: '',
                perAdd: '',
                email: '',
                nation: '',
                status: '',
                hallName: '1'

            }
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
                    title: 'Session',
                    values: this.$store.state.session
                },
                {
                    title: 'Program',
                    values: this.$store.state.program
                },
            ]
        },
        studentTable(){
                var dep = this.select[0]
                var sec = this.select[1]
                var pog = this.select[2]
                var nArray = []
                if(dep === 'all'){
                    nArray = this.studentObjectArray;
                }

                else{
                    nArray = this.studentObjectArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }

                if(sec !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.session === sec;
                    })
                }
                if(pog !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.progAbbr === pog;
                    })
                }
                
                return nArray;
        }
    },
    methods: {
        getAllStudents(){
                this.$http.get('get/student')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        this.studentArray = data;
                        data.forEach(s => {
                            this.studentObjectArray.push({
                                firstName: s[0],
                                lstName: s[1],
                                studentEmail: s[2],
                                studentPhone: s[3],
                                departmentName: s[4],
                                session: s[5],
                                progAbbr: s[6]

                            })
                        })
                    })
            },
           insertStudent(){
                this.$http.post('insert/student', this.studentObject)
                        .then(response => {
                            this.getAllStudents()
                        }, err => {
                            console.log(err);
                        })
                this.showForm = false;
                this.updateButton = false
            },
    },
    mounted() {
        this.getAllStudents();
        let departmentLen = this.$store.state.department.length;
        if(!departmentLen) {
            this.$store.dispatch('getDepartments');
        } 

       let sessionLen = this.$store.state.session.length;
       if(!sessionLen) {
           this.$store.dispatch('getSessions');
       } 

       let programLen = this.$store.state.program.length;
       if(!programLen) {
           this.$store.dispatch('getPrograms');
       }
    }
}
</script>

<style lang="scss" scoped>

</style>
