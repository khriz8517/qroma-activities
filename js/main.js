Vue.component('modal', {
    // props: ['total_points'],
    methods: {
        toggleModal : function(){
            this.$emit('toggle-modal');
        }
    },
    template: `
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div @click="toggleModal" class="modal-close"><span class="material-icons">cancel</span></div>
                    <video width="100%" controls>
                        <source src="mov_bbb.mp4" type="video/mp4">
                        <source src="mov_bbb.ogg" type="video/ogg">
                        Your browser does not support HTML video.
                    </video>
                    <object data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                        <p>En caso no se visualice el PDF has click <a href="http://www.africau.edu/images/default/sample.pdf">aqui!</a></p>
                    </object>
                </div>
            </div>
        </div>`
})

var app = new Vue({
    el: '#app',
    data:{
        showModal: true,
        
        
    },
    methods: {
        toggleModal : function(){
            this.showModal = !this.showModal;
        }
    },
})