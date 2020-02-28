import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export  const store=new Vuex.Store({
    state: {
        sounds: [
            {
                id: 1,
                picId:0,
                src: require('@/assets/sounds/audio1.mp3')
            },
            {
                id: 2,
                picId:0,
                src: require('@/assets/sounds/audio2.mp3')
            },
            {
                id: 3,
                picId:0,
                src: require('@/assets/sounds/audio3.mp3')
            },
            {
                id: 4,
                picId:0,
                src: require('@/assets/sounds/audio4.mp3')
            },
            {
                id: 5,
                picId:0,
                src: require('@/assets/sounds/audio5.mp3')
            },
            {
                id: 6,
                picId:0,
                src: require('@/assets/sounds/audio6.mp3')
            }
        ],
        pics:[
            {
                id: 3,
                divId:0,
                src: require('@/assets/pics/pic1.jpg')
            },
            {
                id: 2,
                divId:0,
                src: require('@/assets/pics/pic2.jpg')
            },
            {
                id: 1,
                divId:0,
                src: require('@/assets/pics/pic3.jpg')
            },
            {
                id: 4,
                divId:0,
                src: require('@/assets/pics/pic4.jpg')
            },
            {
                id: 6,
                divId:0,
                src: require('@/assets/pics/pic5.jpg')
            },
            {
                id: 5,
                divId:0,
                src: require('@/assets/pics/pic6.jpg')
            }
        ]
    }
})
