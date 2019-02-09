import Vue from 'vue';

export default Vue.component('progress-bar', {
    props: {
        percent: {type: Number, default: 0},
        title: {type: String}
    },

    computed: {
        backgroundColor: function () {
            if (this.percent < 70) {
                return "bg-green-dark";
            } else if (this.percent >= 70 && this.percent < 90) {
                return "bg-yellow-dark";
            } else {
                return "bg-red-600";
            }
        },
        borderColor: function () {
            if (this.percent < 70) {
                return "border-green-dark";
            } else if (this.percent >= 70 && this.percent < 90) {
                return "border-yellow-dark";
            } else {
                return "border-red-600";
            }
        }
    },

    template: `
        <div>
            <div class="text-right mb-1" v-if="title.length > 0">
                <span class="text-neutral-600 text-xs uppercase">{{ title }}</span>
            </div>
            <div class="w-full border rounded h-4" :class="borderColor">
                <div class="h-full w-1/3 text-center" :style="{ width: percent + '%' }" :class="backgroundColor">
                    <span class="mt-1 text-xs text-white leading-none">{{ percent }} %</span>
                </div>
            </div>
        </div>
    `,
});
