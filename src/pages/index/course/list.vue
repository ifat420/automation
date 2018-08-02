<template>
    <div class="container-flud">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Course List</h2>
            </div>
        </div>


        <div class="row">
            <div class="col">
                <div class="filter">
                    <span class="filter__head">Department </span>
                    <span class="filter__item">CSE</span>
                    <span class="filter__item">EST</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Program </span>
                    <span class="filter__item">BSC</span>
                    <span class="filter__item">MSC</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Session </span>
                    <span class="filter__item">2013-14</span>
                    <span class="filter__item">2014-15</span>
                    <span class="filter__item">2015-16</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Semester </span>
                    <span class="filter__item">1.1</span>
                    <span class="filter__item">1.2</span>
                    <span class="filter__item">2.1</span>
                    <span class="filter__item">2.2</span>
                    <span class="filter__item">3.1</span>
                    <span class="filter__item">3.2</span>
                    <span class="filter__item">4.1</span>
                    <span class="filter__item">4.2</span>
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
                        <tr v-for="(course, k) in courseArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{course[0]}}</td>
                            <td>{{course[1]}}</td>
                            <td>{{course[2]}}</td>
                            <td>{{course[3]}}</td>
                            <td>{{course[4]}}</td>
                            <td>{{course[5]}}</td>
                            <td>{{course[6]}}</td>
                            <td>{{course[7]}}</td>
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
            courseArray: []
        }
    },
    methods: {
        getAllCourse(){
                this.$http.get('get/course')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.courseArray = data;
                    console.log(data);
                    })
            },
    },
    mounted(){
        this.getAllCourse();
    }
}
</script>