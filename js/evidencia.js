Vue.component("evidencia", {
    props: ["item"],
    data() {
        return {
            filename: "",
            ifchecked: false,
        };
    },
    methods: {
        selectedFile: function (event) {
            console.log(event.target.files);
            // this.filename = event.target.files[0].name;
            let numFiles = event.target.files.length;
            numFiles > 0 ? (this.ifchecked = true) : (this.ifchecked = false);
        },
    },
    template: `<div class="msb-option">
                    <div class="msb-bg msb-bg-yellow">
                        <span class="material-icons-round">
                            add_circle_outline
                        </span>
                    </div>
                    <div class="msb-option-body">
                        <div class="msb-option-header">
                            <div class="msb-option-title">
                                <span @click="$refs.file.click()">{{item.ejercicio}}</span>
                                <input
                                    v-show="false"
                                    type="file"
                                    ref="file"
                                    name="evidencia_file"
                                    @change="selectedFile"
                                    accept=".jpg,.png"
                                />
                            </div>
                            <div class="msb-checkbox">
                                <label class="container">
                                    <input type="checkbox" :checked="ifchecked" disabled />
                                    <span class="checkmark disabled"></span>
                                </label>
                            </div>
                        </div>
                        <div class="msb-option-description">
                            {{item.descripcion}}
                            <a :href="item.link">{{item.link}}</a>
                        </div>
                        <div class="msb-option-sub">
                            Captura tu pantalla y sube la imagen formato jpg
                            o png
                        </div>
                    </div>
                </div>`,
});

var app = new Vue({
    el: "#app",
    data: {
        evidencias: [
            {
                id: 1,
                ejercicio: "Ejercicio 1",
                descripcion:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus mattis dui.",
                link: "https://www.loremupsum.com/loremre/rmuie",
            },
            {
                id: 2,
                ejercicio: "Ejercicio 2",
                descripcion:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus mattis dui.",
                link: "https://www.loremupsum.com/loremre/rmuie",
            },
            {
                id: 3,
                ejercicio: "Ejercicio 3",
                descripcion:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus mattis dui.",
                link: "https://www.loremupsum.com/loremre/rmuie",
            },
            {
                id: 4,
                ejercicio: "Ejercicio 4",
                descripcion:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus mattis dui.",
                link: "https://www.loremupsum.com/loremre/rmuie",
            },
        ],
    },
    methods: {
        finalizarCurso: function (e) {
            console.log("finalizarCurso");
        },
    },
});
