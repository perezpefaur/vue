<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers');

:root {
    /* Colors */
    --white:                     #FFF;
    --primary-color:             #EE171F;
    --dark:                      #150E1B;
    --body-bg:                   rgba(203, 204, 213, .4);

    /* Tiprography */
    --font-size-base:              1rem;
    --font-family-title:           'Bangers', cursive;

    /* Fontweights */
    --font-weight-bold:             700;
    --font-weight-base:             400;

    --transition-duration:          350ms;
    --transition-function:          cubic-bezier(0.790, 0.010, 0.375, 0.995);
}

*, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.4;
  text-align: left;
  color: var(--dark);
  font-family: 'Helvetica';
  font-size: var(--font-size-base);
  background-color: var(--body-bg);
  font-weight: var(--font-weight-base);
}

h3, h4 {
  line-height: 1.5;
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
}

ul {
  margin-top: .5rem;
  padding-left: 1rem;
}

body {
  background-image: radial-gradient(ellipse farthest-corner, transparent 0%, transparent 35%, #fff 30%, #fff 40%, transparent 90%), radial-gradient(ellipse farthest-corner at 0px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), radial-gradient(ellipse farthest-corner at 8px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%), radial-gradient(ellipse farthest-corner at 0px 8px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 40%), radial-gradient(ellipse farthest-corner at 8px 0px, transparent 0%, transparent 20%, #fff 15%, #fff 20%, transparent 50%),  linear-gradient(40deg, #868281 0, #949393 30%, #beb9b7 50%, #b9aeac 70%, #a9a1a0 100%);
  background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px, 8px 8px, 100% 100%;
}

nav {
  padding: 30px;
  text-align: center;
  background-color: #b71c1c;
  display: flex;
}

nav a {
  line-height: 1.5;
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
  font-size: 40px;
  color: #f4f1f1;
  text-decoration: none;
  text-transform: uppercase;
}

nav a.router-link-exact-active {
  color: #f4f1f1;
  padding-right: 30px;
}

.input{
  width: 400px;
  border: 3px solid #fff;
  background: transparent;
  padding: 15px 30px;
  border-radius: 50px;
  outline: none;
  font-size: 18px;
  color: #fff;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #fff;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #fff;
}

.close-btn{
  top: 21px;
  right: 50px;
  cursor: pointer;
  color: #fc3a3a;
  background: #fff;
  border: 0px;
  width: 120px;
  height: 55px;
  border-radius: 50px;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: -120px;
}

.separador{
  padding-left: 20px;
}
</style>
