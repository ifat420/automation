<template>
    <div class="contariner-fluid">
        <div class="row" v-if="!showTable">
            <div class="col-6">
                <h2 class="headings">Result Search</h2>
            </div>
        </div>

        <div class="row" v-if="!showTable">
            <div class="col-6">
                <form> 
                    <div class="group"> 
                        <select v-model="courseInputSearch.departmentName">
                            <option disabled selected value="1">Select Department..</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>  
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select v-model="courseInputSearch.program">
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group"> 
                        <select v-model="courseInputSearch.session">
                            <option disabled selected value="1">Select Session..</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option>
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 
                                    

                    <div class="group"> 
                        <select v-model="courseInputSearch.semisterId">
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
                        <button @click.prevent="submitButton" class="button__submit" type="submit">submit</button>
                        <button @click.prevent="reset" class="button__submit" type="reset" value="Reset">reset</button>
                    </div>
                </form>    
            </div>    
        </div>


        <div class="row" v-if="showTable">
            <div class="col-6">
                <h2 class="headings">Input Theory Marks</h2>
            </div>
        </div>
        {{pointMustCreditArray}}
        <div class="row" v-if="showTable">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">Fail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, k) in pointMustCreditArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{row[0]}}</td>
                            <td>{{ (row[1] / row[2]).toFixed(2) }}</td>
                            <td>{{ failSubject[0][0] === row[0] ? failSubject[0][1] : '' }}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>


        

       




        <div class="row" v-if="showTable">
            <div class="col-6">
                 <div class="button">
                    <button @click.prevent="submitButton" class="button__submit" type="submit">submit</button>
                </div>
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
                courseInputSearch: {
                    departmentName: '',
                    program: '',
                    session: '',
                    semisterId: ''

                },
                showTable: false,
                pointMustCreditArray: [],
                failSubject: [],
               
            }
        },
        methods: {
            getPointMultCredit(){
                 this.$http.post('insert/getcreditpointmult', this.courseInputSearch)
                        .then(response => {
                            this.pointMustCreditArray =  response.body.rows;
                            this.showTable = true;
                            // console.log(this.pointMustCreditArray);
                            this.getFailSubject();

                        }, err => {
                            console.log(err);
                        })   
            },
            getFailSubject(){
                 this.$http.post('insert/getfailsubjects', this.courseInputSearch)
                        .then(response => {
                            this.failSubject =  response.body.rows;
                            // console.log(this.failSubject);
                        }, err => {
                            console.log(err);
                        })   
            },

            submitButton(){
                this.getPointMultCredit();
                
            },


            

        
    }
}
</script>