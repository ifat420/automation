<template>
    <div class="sidebar">
        <div class="sidebar__user">
            <div class="sidebar__user--round">
                <img src="../../assets/images/Campus Automation Logo 2 Icon2.png" alt="logo"/>
            </div>
        </div>
        <ul class="sidebar__list" ref="sidebar" id="container">
            <li class="">  
                <a data-toggle="collapse" href="#academicInfo" class="sidebar__list--item">
                    <i class="fas fa-fw fa-university"></i>
                    Academic Info
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="academicInfo" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('academicTeacher')" href="#">Teacher</a>    
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('academicStudent')" href="#">Student</a>     
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('academicStuff')" href="#">Staff</a>     
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('academicHall')" href="#">Hall</a>     
                    </li> 
                </ul>
            </li>
            <li class="">  
                <a data-toggle="collapse" href="#admins" class="sidebar__list--item">
                    <i class="fas fa-fw fa-university"></i>
                    Admins
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="admins" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('grandAdmin')" href="#">Grand</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('userAdmin')" href="#">Admin</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('sessionAdmin')" href="#">session</a>    
                    </li>  
                </ul>
            </li>
            <li class="">
                <a data-toggle="collapse" href="#users" class="sidebar__list--item">
                    <i class="fas fa-fw fa-user-shield"></i>
                    Users
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="users" class="sidebar__sub-list collapse"> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('userTeacher')" href="#">Teacher</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('userStudent')" href="#">Student</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('userStuff')" href="#">Stuff</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('sessionAdmin')" href="#">Session Admin</a>
                    </li> 
                </ul>
            </li>
            <li class="">
                <a @click.prevent="go('faculty')"  href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-building"></i>
                    Faculty
                </a> 
            </li>
            <li class="">
                <a @click.prevent="go('department')" href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-book"></i>
                    Department
                </a> 
            </li>
            <li class="">
                <a @click.prevent="go('program')"  href="" class="sidebar__list--item">
                    <i class="fas fa-fw fa-pencil-alt"></i>
                    Program
                </a> 
            </li>
            <li class="">
                <a  data-toggle="collapse" href="#session" class="sidebar__list--item">
                    <i class="fas fa-fw fa-cogs"></i>
                    Session
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="session" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('sessionNew')" href="#">Add New</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('sessionList')" href="#">Catalog</a>
                    </li>  
                </ul>
            </li>
            <li class="">
                <a data-toggle="collapse" href="#course" class="sidebar__list--item">
                    <i class="fas fa-fw fa-tasks"></i>
                    Course
                    <i class="fas fa-angle-down"></i>
                </a>
                <ul id="course" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('courseAdd')"  href="#">Add New</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('courseList')" href="#">Catalog</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('courseAssign')" href="#">Assign</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('courseRegister')" href="#">Registration</a>
                    </li> 
                </ul>
            </li>
            <li class=""> 
                <a data-toggle="collapse" href="#marks" class="sidebar__list--item">
                    <i class="fas fa-fw fa-edit"></i>
                    Marks
                    <i class="fas fa-angle-down"></i>
                </a> 
                <ul id="marks" class="sidebar__sub-list collapse">
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('marksTable')"  href="#">Table</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('thirdExaminerTable')"  href="#">Third Examiner Table</a>
                    </li> 
                    <li class="sidebar__sub-list--item">
                        <a @click.prevent="go('finalResultAllTogather')"  href="#">Result</a>
                    </li>  
                </ul>
            </li>
        </ul>
        
        
        
    </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';

export default {
    data() {
        return {

        }
    },
    methods: {
        go(name) {
            this.$router.push({
                name: name
            })
        },
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'login'
            })
        }
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
        var s = this;
        this.$nextTick().then(function(){ 
            var container = s.$refs.sidebar;  
            var options = {
                wheelSpeed: .3,
                wheelPropagation: true, 
                minScrollbarLength: null,
                swipeEasing: true,
            }
            const ps = new PerfectScrollbar(container, options); 
        })
    }
}
</script>

<style scoped> 
</style>
