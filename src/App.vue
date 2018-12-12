<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-link to="/test">测试</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        metaInfo: {
            title: 'hello word',
            meta: [
                {                 // set meta
                    name: 'keyWords',
                    content: 'spa render'
                },{                 // set meta
                    name: 'description',
                    content: 'a sapRender vue project'
                },,{                 // set meta
                    name: 'author',
                    content: 'yyl'
                },
            ]
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
