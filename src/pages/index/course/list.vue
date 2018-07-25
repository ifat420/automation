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
                        <tr v-for="(i, k) in 6" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>CSE 1101</td>
                            <td>Computer Fundamental</td>
                            <td>3.0</td>
                            <td>Theory</td>
                            <td>CSE</td>
                            <td>1.1</td>
                            <td>2013-14</td>
                            <td>BSC</td>
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
    
</script>