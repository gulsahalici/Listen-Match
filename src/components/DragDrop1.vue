<template>
    <div>
        <h1>Listen and Match</h1>
        <b-container>
            <b-row>
                <div
                        class="droptarget svg"
                        @drop="drop"
                        @dragover="allowDrop"
                        @click="play(audio)"
                        v-for="audio in sounds" :key=audio.id
                        :id="audio.id+20"
                >
                </div>
            </b-row>

            <b-row>
                <div
                        class="droptarget"
                        @drop="drop"
                        @dragover="allowDrop"
                        v-for="pic in pics" :key="pic.id"
                >
                    <img
                            @dragstart="dragStart"
                            draggable="true"
                            :id="pic.id"
                            :src=pic.src
                    >
                </div>
            </b-row>
            <b-row style="margin-top: 50px">
                <b-col cols="2">
                    <strong><h4>Correct : {{this.correct}}</h4></strong>
                    <strong><h4>Wrong : {{this.wrong}}</h4></strong>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    export default {
        name: "DragDrop1",
        data(){
            return{
                correct:0,
                wrong:0,
                current:{},
                player: new Audio(),
            }
        },
        methods:{

            play(clickedAudio){
                this.current=clickedAudio;
                this.player.src=this.current.src;
                this.player.play();
            },
            dragStart(event){
                event.dataTransfer.setData("data", event.target.id);
            },
            allowDrop(event) {
                event.preventDefault();
            },
            drop(event) {
                event.preventDefault();
                var dragId = event.dataTransfer.getData("data");
                const dragItem=this.pics.find(pic=>pic.id==dragId);
                dragItem.divId=event.target.id;

                if(event.target.childElementCount==0 && event.target.toString()=="[object HTMLDivElement]" )
                    event.target.appendChild(document.getElementById(dragId));

                this.check();
            },
            check() {
                this.correct=0
                this.wrong=0

                this.pics.forEach(pic=>{
                    if (pic.id+20==pic.divId)
                        this.correct++
                    else if (pic.divId!=0 && pic.divId!="" && pic.id+20!=pic.divId )
                        this.wrong++
                })

            }
        },
        computed:{
            sounds(){
                return this.$store.state.sounds;
            },
            pics(){
                return this.$store.state.pics;
            }
        }
    }
</script>

<style scoped>
    .droptarget {
        float: left;
        width: 170px;
        height: 170px;
        margin-right: 20px;
        margin-top: 50px;
        border: 1px solid #aaaaaa;
        background-color: moccasin;
    }
    .svg{
        background-image: url(../assets/sounds/audio.svg);
    }
    img{
        width: 170px;
        height: 170px;
    }
</style>