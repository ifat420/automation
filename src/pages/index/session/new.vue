<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h2 class="headings">Session</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <form>   
                    <div class="group"> 
                        <select v-model="sessionData.deptName">
                            <option disabled selected value="1">SELECT DEPARTMENT</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option> 
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 

                    <div class="group"> 
                        <select v-model="sessionData.progName">
                            <option disabled selected value="1">SELECT PROGRAM</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>

                    <div class="group">
                        <input v-model="sessionData.session" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Session</label>
                    </div>  
                    <div class="group">
                        <input v-model="sessionData.academicYr" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Academic Year</label>
                    </div>  
                    <div class="button">
                        <button @click.prevent="insertSession" class="button__submit mr-4" type="submit">submit</button>
                        <button class="button__submit" type="reset" value="Reset">reset</button>
                    </div>
                </form>    
            </div>    
        </div>    
    </div>
</template>

<script>
    import { commonData } from '../../../mixins/commonData.js';
export default {
    mixins: [commonData] ,
    data(){
        return {
            sessionData: {
                deptName: '1',
                progName: '1',
                session: '',
                academicYr: ''
            }
        }
    },
    
    methods: {
        insertSession(){
            this.$http.post('insert/session', this.sessionData)
                    .then(response => {
                        console.log(response.body);
                    }, err => {
                        console.log(err);
                    })
            this.sessionData.deptName = '';
            this.sessionData.progName = '';
            this.sessionData.session = '';
            this.sessionData.academicYr = '';
            this.$router.push({
                name: 'sessionList'
            });
        }
    }
}

</script>