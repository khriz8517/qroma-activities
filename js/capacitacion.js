var app = new Vue({
    el: "#app",
    data: {
        capacitado: false,
        ifchecked: false,
    },
    methods: {
        selectedFile: function (event) {
            let numFiles = event.target.files.length;
            numFiles > 0 ? (this.ifchecked = true) : (this.ifchecked = false);
        },
    },
});
