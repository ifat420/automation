<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Course List</h2>
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
            filter: [
                {
                    title: 'Departmetn',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                },
                {
                    title: 'Program',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                },
                {
                    title: 'Session',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                },
                {
                    title: 'Semester',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                }
            ],
            select: ['all', 'all', 'all', 'all'],
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