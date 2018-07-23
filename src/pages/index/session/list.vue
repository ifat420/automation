<template>
    <div class="container-flud">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session</h2>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col filter">
                <span class="filter__head">Faculty </span>
                <span class="filter__item">Engineering</span>
                <span class="filter__item">Biology</span>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col filter">
                <span class="filter__head">Department </span>
                <span class="filter__item">CSE</span>
                <span class="filter__item">EST</span>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col filter">
                <span class="filter__head">Program </span>
                <span class="filter__item">BSC</span>
                <span class="filter__item">MSC</span>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Department</th>
                        <th scope="col">Program</th>
                        <th scope="col">Session</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, k) in 6" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>CSE</td>
                            <td>BSc</td>
                            <td>2013-14</td>
                            <td>Engineering</td>
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