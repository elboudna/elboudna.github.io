window.onload = function () {
    let loading = document.querySelector("#loading-template");    

        // after 8 seconds remove myoverlay
        setTimeout(function () {
            loading.remove();
        }
        , 9000);
}