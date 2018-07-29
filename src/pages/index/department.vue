<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Department</h2>
            </div>
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Department</button>    
                </div>
            </div>
        </div>

        <div class="row" v-if="showForm">
            <div class="col-6">
                <form>
                    
                     <div class="group"> 
                        <select v-model="department.facultyName">
                            <option disabled selected value="1">Select Faculty..</option> 
                            <option v-for="(fac, i) in allFaculty" :key="i" :value="fac[1]"  >{{fac[1]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group">
                        <input type="text" v-model="department.deptName" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Name</label>
                    </div>  

                    <div class="group">
                        <input type="text" v-model="department.dAbr" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Abbreviation</label>
                    </div>  

                    <div class="group">
                        <input type="text" v-model="department.dCode" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Code</label>
                    </div>  

                    <div class="button">
                        <button v-if="!updateButton" @click.prevent="insertDepartment" class="button__submit" type="submit">Save</button>
                        <button v-if="updateButton" class="button__submit" @click.prevent="updateDepartment" type="submit">Update</button>
                        <button class="button__submit" type="button" @click.prevent="showForm = false">cancel</button>
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
            </div>
        </div>

         <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Abbrebeation</th>
                        <th scope="col">Code</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(departmentDetails, k) in departmentArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{departmentDetails[1]}}</td>
                            <td>{{departmentDetails[2]}}</td>
                            <td>{{departmentDetails[3]}}</td>
                            <td>{{departmentDetails[4]}}</td>
                            <td>
                                <a href="" @click.prevent="gotEdit(k)">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
     import { commonData } from '../../mixins/commonData.js';

    export default {
        mixins: [commonData],
        data(){
            return{
                department: {
                    facultyName: '',
                    deptName: '',
                    dAbr: '',
                    dCode: ''
                },
                departmentArray: [],
                showForm: false,
                updateButton: false,
                departmentId: ''
            }
        },

        methods: {
            getAllDepartments(){
                this.$http.get('get/department')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        this.departmentArray = data;
                        
                    })
            },
            gotEdit(p){
                let dept = this.departmentArray[p];
                this.department.facultyName = dept[4];
                this.department.deptName = dept[1];
                this.department.dAbr = dept[2];
                this.department.dCode = dept[3];
                this.departmentId = dept[0];
                this.showForm = true;
                this.updateButton = true;

            },
            insertDepartment(){
                this.$http.post('insert/department', this.department)
                        .then(response => {
                            console.log(response.body);
                        }, err => {
                            console.log(err);
                        })
                this.showForm = false;
                this.updateButton = false
            },
            updateDepartment(){
                this.$http.put(`update/department/${this.departmentId}`, this.department)
                        .then(response=> {
                            console.log(response.body);
                        }, err => {
                            console.log(err);
                        })
                this.showForm = false;
                this.updateButton = false;
            }
        },

        mounted() {
             this.getAllDepartments()
        }
    }
</script>
