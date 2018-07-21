<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2>Faculty Name</h2>
            </div>
            <div class="col-6 text-right">
                <button class="btn btn-primary">Button </button>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="facultyName">Faculty Name:</label>
                    <input type="text" class="form-control" id="faculty" name="facultyName" placeholder="Faculty Name">
                </div>
            </div>
            <div class="col-6"></div>
        </div>

        <div class="row">
            <div class="col-12">
                
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Faculty Name</th>
                        <th scope="col"><a href="#">edit</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Engineering</td>
                        <td><a href="#">Edit</a></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {

            }
        }
    }    
</script>
