<template>
    <div class="app">
        <!-- SIDEBAR -->
        <Sidebar/>
        <WebGIS/>
    </div>
</template>

<!-- <script type="module" src="./assets/map.js"></script> -->
<script>
import Sidebar from './components/sidebar.vue'
import WebGIS from './views/WebGIS.vue'

export default {
    components: { WebGIS, Sidebar }
}

</script>


<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}


html, body {
  margin: 0;
  height: 100%;
}

.app{
    display: flex;
}

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100vw - 2rem - 32px);
  
  @media (max-width: 768px) {
        padding-left: calc(2rem - 32px);
        width: calc(100vw - 2rem + 32px);
    }
}



</style>