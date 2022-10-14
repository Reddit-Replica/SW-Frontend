<template>
  <nav>
  <div class="basecontainer">
  <ul>
    <li class="active"><a class="link-active" href="">Overview</a></li>
    <li><a href="">posts</a></li>
    <li><a href="">comments</a></li>
    <li><a href="">history</a></li>
    <li><a href="">saved</a></li>
    <li><a href="">hidden</a></li>
    <li><a href="">upvoted</a></li>
    <li><a href="">downvoted</a></li>
    <li><a href="">awards recieved</a></li>
    <li><a href="">awards given</a></li>
  </ul>
</div>
</nav>
</template>

<script>
export default {
}
</script>


<style scoped>
a {
  text-decoration: none;
  text-decoration: none;
  display: inline-block;
 
  color: #1A1A1B;
  text-transform: uppercase;
}
nav {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  height: 39px;
  border-bottom: 1px solid #EDEFF1;
  border-top: 1px solid #EDEFF1;
}
nav ul {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size:12px;
  list-style: none;
}
nav ul li {
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  align-items: center;
  display: flex;
  margin: 0 5px;
  padding: 0 5px;
  height: 100%;

}
nav ul li:hover a{
 color: #0079D3;
 /* box-shadow: inset 0 -2px 0 0 #0079D3; */
}
li.active {
  box-shadow: inset 0 -2px 0 0 #0079D3;
  /* border-bottom: 2px solid #0079D3; */
}
a.link-active { color: #0079D3;}
.basecontainer {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 24px;
}
</style>