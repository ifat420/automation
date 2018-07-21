<template>
    <div class="sidebar">
        <div class="sidebar__user">
            <div class="circle sidebar__user--round">

            </div>
        </div>
        <ul class="sidebar__list">
            <li class="">  
                <a data-toggle="collapse" href="#academicInfo" class="sidebar__list--item">
                    <i class="fas fa-fw fa-university"></i>
                    Academic Info
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="academicInfo" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">Teacher</li> 
                    <li class="sidebar__sub-list--item">Student</li> 
                    <li class="sidebar__sub-list--item">Stuff</li> 
                    <li class="sidebar__sub-list--item">Hall</li> 
                </ul>
            </li>
            <li class="">
                <a data-toggle="collapse" href="#users" class="sidebar__list--item">
                    <i class="fas fa-fw fa-user-shield"></i>
                    Users
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="users" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">Super</li> 
                    <li class="sidebar__sub-list--item">Admin</li> 
                    <li class="sidebar__sub-list--item">Teacher</li> 
                    <li class="sidebar__sub-list--item">Student</li> 
                    <li class="sidebar__sub-list--item">Stuff</li> 
                </ul>
            </li>
            <li class="">
                <a href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-building"></i>
                    Faculty
                </a> 
            </li>
            <li class="">
                <a href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-book"></i>
                    Department
                </a> 
            </li>
            <li class="">
                <a href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-pencil-alt"></i>
                    Program
                </a> 
            </li>
            <li class="">
                <a data-toggle="collapse" href="#session" class="sidebar__list--item">
                    <i class="fas fa-fw fa-cogs"></i>
                    Session
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="session" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">Add New</li> 
                    <li class="sidebar__sub-list--item">Catalog</li>  
                </ul>
            </li>
            <li class="">
                <a data-toggle="collapse" href="#course" class="sidebar__list--item">
                    <i class="fas fa-fw fa-tasks"></i>
                    Course
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="course" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">Add New</li> 
                    <li class="sidebar__sub-list--item">Catalog</li> 
                    <li class="sidebar__sub-list--item">Assign</li> 
                    <li class="sidebar__sub-list--item">Registration</li>  
                </ul>
            </li>
            <li class=""> 
                <a href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-edit"></i>
                    Marks
                </a> 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        // reveal(event) {   
        //     return;
        //     var tg = event.target.tagName;
        //     var el = event.target;
        //     var trgt;

        //     if(tg == 'P') el = event.target.parentElement;  
            
        //     for(let i of el.childNodes) {
        //         if(i.tagName == 'UL') {
        //             trgt = i;
        //             break;
        //         } 
        //     }

        //     if(trgt && trgt.classList.contains('d-none')) trgt.classList.remove('d-none')
        //     else if(trgt) trgt.classList.add('d-none')
        // }
    },
    mounted() { 
        this.$nextTick().then(function(){
            // $("#sidebar").mCustomScrollbar({
            //     theme: "minimal"
            // });
        })
    }
}
</script>

<style scoped> 
</style>
