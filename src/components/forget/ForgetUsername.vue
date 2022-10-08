<template>
   
    <div class="container">
        <div class="box">
        <form>
    <h1>Recover your username</h1>
    <p class="description">Tell us the email address associated with your Reddit account, and we’ll send you an email with your username.</p>
    <input type="email" placeholder="Email"/> 
     
     <div class="bottomText">
        Don't have an email or need assistance logging in?  <a>Get Help </a>
    </div>
    </form>
    <div class="">
        <a>Sign Up </a>
        <span class="linkSeparator">•</span>
        <a>Log In </a>
    </div>
    </div>
    </div>
</template>

  <script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
    
  },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
   /* font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #1a1a1b;
    font-family: IBMPlexSans,sans-serif;
    position: relative;*/

}
div{
    display: block;
}
a{
    color:#0079d3;
    text-decoration: underline;
    font-family:IBMPlexSans,sans-serif;
    cursor:pointer;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
}
input
{
    background-color:#f6f7f8 ;
    padding:22px  12px 10px;
    width:100%;
    border:1px solid rgba(0,0,0,.1);
    border-radius: 100px;
    font-family: IBMPlexSans,sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    height: 46px;
    padding-left: 16px;
    padding-right: 36px;
}
.container
{
    background-color:white ;
    border: 0.1px solid #00000066 ;
    border-radius: 10px;
    min-height: 100v;
    margin: 10px auto 10px auto;
    padding:20px;
    display: flex;
    align-items: center;
    max-width: 500px;
   /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: hidden;
    min-height: 100vh;*/
}
.box
{
    padding: 24px;
    min-width: 260px;
    max-width: 440px;
}
h1 
{
    color: #1A1A1B;
    margin: 24px 0px 0px;
    font-size:20px;
    font-family:IBMPlexSans,sans-serif;
    font-weight: 500;
    line-height:24px ;
    
}

.description
{
    color: #1A1A1B;
    margin: 8px 0px 0px;
    font-size: 12px;
    font-family:Noto Sans,sans-serif;
    font-weight: 400;
    line-height:21px ;
    width:100%;
}





.linkSeparator {
    color: #0079d3;
    margin: 0 4px;
}
</style>