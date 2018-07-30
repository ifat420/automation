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
                        <select>
                            <option disabled selected value="1">Select Department..</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 
                    
                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Session..</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>
                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Hall..</option> 
                            <option v-for="(hall, k) in allHall" :key="k" :value="hall[2]">{{hall[2]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Roll Number</label>
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Registration Number</label>
                    </div>

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>First Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Last Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Father Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Mother Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone Number</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Date of Birth</label>
                    </div>
                   <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="male">Male</option> 
                            <option value="femail">Female</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Religion Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Present Address</label>
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Permanent Address</label>
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email Address</label>
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Nationality</label>
                    </div> 
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Status</label>
                    </div>
                    
                    <div class="button">
                        <button class="button__submit" type="submit">submit</button>
                        <button @click="showForm = false" class="button__submit" type="button">cancel</button>
                    </div>
                </form>    
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
                        <tr v-for="(student, k) in studentArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{student[0]}}</td>
                            <td>{{student[1]}}</td>
                            <td>{{student[2]}}</td>
                            <td>{{student[3]}}</td> 
                            <td>{{student[4]}}</td>
                            <td>{{student[5]}}</td>
                            <td>{{student[6]}}</td>
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
            showForm: false,
            studentArray: [],
            studentObject: {
                
            }
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
                    })
            }
    },
    mounted() {
        this.getAllStudents();
    }
}
</script>

<style lang="scss" scoped>

</style>
