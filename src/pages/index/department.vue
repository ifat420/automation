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
                            <option disabled selected value="1">SELECT FACULTY</option> 
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
                        <button class="button__submit" type="button" @click.prevent="clear">cancel</button>
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
                        <th scope="col">Name</th>
                        <th scope="col">Abbrebeation</th>
                        <th scope="col">Code</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dept, k) in departmentObjectArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{dept.departmentName}}</td>
                            <td>{{dept.departmentAbbr}}</td>
                            <td>{{dept.departmentCode}}</td>
                            <td>{{dept.facultyName}}</td>
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
                filter: [
                {
                    title: 'Faculty',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                }
            ],
            select: ['all'],
            department: {
                    facultyName: '',
                    deptName: '',
                    dAbr: '',
                    dCode: '',
                    departmentId: ''
                },
                departmentObjectArray: [],
                showForm: false,
                updateButton: false,
            }
        },

        methods: {
            clear() {
                this.showForm = false;
                this.department.facultyName = '';
                this.department.deptName = '';
                this.department.dAbr = '';
                this.department.dCode = '';

            },
            getAllDepartments(){
                this.$http.get('get/department')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        this.departmentArray = data;
                        data.forEach(dept => {
                            this.departmentObjectArray.push({
                                departmentId: dept[0],
                                departmentName: dept[1],
                                departmentAbbr:  dept[2],
                                departmentCode:  dept[3],
                                facultyName: dept[4]
                            });  
                            
                        });
                    })
            },
            gotEdit(p){
                let dept = this.departmentObjectArray[p];
                this.department.facultyName = dept.facultyName;
                this.department.deptName = dept.departmentName;
                this.department.dAbr = dept.departmentAbbr;
                this.department.dCode = dept.departmentCode;
                this.department.departmentId = dept.departmentId;
                this.showForm = true;
                this.updateButton = true;

            },
            insertDepartment(){
                this.$http.post('insert/department', this.department)
                        .then(response => {
                            this.getAllDepartments();
                        }, err => {
                            console.log(err);
                        })
                this.showForm = false;
                this.updateButton = false
            },
            updateDepartment(){
                this.$http.put(`update/department/${this.department.departmentId}`, this.department)
                        .then(response=> {
                            this.getAllDepartments();
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
