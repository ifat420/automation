<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session Admins</h2>
            </div>
        </div>

        <div class="btn-group btn-group-toggle session-admin mb-3" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> Session with admin
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off"> Session with no admin
            </label> 
        </div>

        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Department</th>
                        <th scope="col">Session</th>
                        <th scope="col">Admin Id</th>
                        <th scope="col">Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, k) in 3" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>Computer Science and Engineering</td>
                            <td>2013-14</td>
                            <td>CSE-2013-14</td> 
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
    
}
</script>
