// $(function() {
//     $("#expand-collapse").click((e) => {
//         e.preventDefault();
//         $("aside").toggleClass("closed");
//     });
// });

const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const expanded = ref(false);

        function toggleExpansion() {
            console.log("clicked");
            expanded.value = !expanded.value;
        }

        return {
            expanded,
            toggleExpansion
        }
    }
});

app.mount("#root");

