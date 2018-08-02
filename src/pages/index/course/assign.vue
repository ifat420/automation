<template>
    <div class="contariner-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Course Assign</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <form> 
                    <div class="group"> 
                        <select v-model="courseAssignObj.departmentName">
                            <option disabled selected value="1">Select Department..</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>  
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select v-model="courseAssignObj.program">
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group"> 
                        <select v-model="courseAssignObj.session">
                            <option disabled selected value="1">Select Session..</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option>
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 
                                    

                    <div class="group"> 
                        <select v-model="courseAssignObj.semisterId">
                            <option disabled selected value="1">Select Semester..</option> 
                            <option value="1.1">1.1</option> 
                            <option value="1.2">1.2</option> 
                            <option value="2.1">2.1</option> 
                            <option value="2.2">2.2</option> 
                            <option value="3.1">3.1</option> 
                            <option value="3.2">3.2</option> 
                            <option value="4.1">4.1</option> 
                            <option value="4.2">4.2</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

        
                    <div class="button">
                        <button @click.prevent="insertCourse" class="button__submit" type="submit">submit</button>
                        <button @click.prevent="reset" class="button__submit" type="reset" value="Reset">reset</button>
                    </div>
                </form>    
            </div>    
        </div>   


    </div>
</template>

<script>
    import {commonData} from '../../../mixins/commonData.js'
    export default {
        mixins: [commonData],
        data(){
            return {
                courseAssignObj: {
                    departmentName: '',
                    program: '',
                    session: '',
                    semisterId: ''

                }
            }
        },
        methods: {
            insertCourse(){
                this.$http.post('insert/courseassign', this.courseAssignObj)
                        .then(response => {
                            console.log(response.body)
                            
                        }, err => {
                            console.log(err);
                        })
            },
            reset(){
                this.courseAssignObj.departmentName = '';
                this.courseAssignObj.program = '';
                this.courseAssignObj.session = '';
                this.courseAssignObj.semisterId = '';
            }
        }
    }
</script>