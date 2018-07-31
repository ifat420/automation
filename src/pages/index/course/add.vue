<template>
    <div class="contariner-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Add New Course</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <form> 

                    <div class="group">
                        <input v-model="courseObj.courseCode" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course Code</label>
                    </div>  
                    <div class="group">
                        <input v-model="courseObj.courseTitle" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course Title</label>
                    </div>  
                    <div class="group">
                        <input v-model="courseObj.courseCredit" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course credit</label>
                    </div>  
                      

                    <div class="group"> 
                        <select v-model="courseObj.courseType">
                            <option disabled selected value="1">Course Type..</option> 
                            <option value="theory" >Theory</option> 
                            <option value="lab">Laboratory</option> 
                            <option value="thesis/project">Thesis/Project</option> 
                            <option value="tour">Industrial Tour</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 



                    <div class="group"> 
                        <select v-model="courseObj.semisterId">
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

                    <div class="group"> 
                        <select v-model="courseObj.departmentName">
                            <option disabled selected value="1">Select Department..</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select v-model="courseObj.program">
                            <option disabled selected value="1">Select Pogram..</option> 
                            <option value="BSC">BSC</option>
                            <option value="MSC">MSC</option>
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

        

                    <div class="group"> 
                        <select v-model="courseObj.session">
                            <option disabled selected value="1">Select Session..</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option> 
                             
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    
                    
                    <div class="group">
                        <input v-model="courseObj.teacherName" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Name</label>
                    </div>  
                    <div class="button">
                        <button @click.prevent="insertCourse" class="button__submit mr-4" type="submit" value="Submit">submit</button>
                        <button class="button__submit" type="reset" value="Reset">reset</button>
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
                courseObj: {
                    departmentName: '',
                    program: '',
                    session: '',
                    courseCode: '',
                    courseTitle: '',
                    courseCredit: '',
                    courseType: '',
                    semisterId: '',
                    teacherName: ''
                }
            }
        },
        methods: {
             insertCourse(){
                this.$http.post('insert/course', this.courseObj)
                        .then(response => {
                            console.log(response.body)
                            
                        }, err => {
                            console.log(err);
                        })
                
                 this.$router.push({
                        name: 'courseList'
                    });
            }
        }
    }    
</script>