import React from 'react';

import { Link,Outlet } from 'react-router-dom';


// Dropdown menu mechanism for 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} 

// scroll bar feature 
window.onscroll = function() {scrollBarFunction()};

  function scrollBarFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  } 

//auto scroll to the top button 
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down from the top of the document, this will show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



 const MainDashboard=(props) => {
  return(
    <div>
     <h2 >Application Home</h2>
      
      <div class="navbar">
      <Link to= "/"><a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> </Link>
        <Link to= "/SaleChatDisplay"><a href="#"><i class="fa fa-fw fa-user"></i> SaleDisplay </a></Link>
        
        <Link to= "/Dashboard"><a href="#"><i class="fa fa-fw fa-search"></i> Search </a> </Link>
        <Link to= "/Dashboard"><a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> </Link>
        <Link to= "/DeptList"><a href="#"><i class="fa fa-fw fa-folder"></i> DeptList</a></Link>
        <Link to= "/Preferences"><a href="#"><i class="fa fa-fw fa-user"></i> Preferences</a>  </Link>
        <Link to= "/Login">  <a href="#"><i class="fa fa-fw fa-user"></i> Logout user </a></Link>
      </div>
      <div class="sidenav">
      <a href="#Sales">Sales extra</a>
      <a href="#Personel">Personel</a>
      <a href="#Updates">Updates</a>
      <a href="#Session">Session</a>
      <button class="dropdown-btn">Sales Reports 
        <i class="fa fa-caret-down"></i>
      </button>

      <div class="dropdown-container">
      <a href="#">By Dept</a>
      <a href="#">By User</a>
      <a href="#">By Month</a> 
      <a href="#">By YEAR</a>
      </div>
      <a href="#contact">Search</a>

      <button class="dropdown-btn">Department Reports 
      <i class="fa fa-caret-down"></i>
      </button>

      <div class="dropdown-container">
      <a href="#">By Dept</a>
      <a href="#">By User</a>
      <a href="#">By Month</a> 
      <a href="#">By YEAR</a>
      </div>
      </div>

      
      <Outlet/>
    </div>
  );
}
export default MainDashboard