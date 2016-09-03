var OverImage = {};

(function() {
    OverImage.modPath = GDT.getRelativePath();

    // Currently, the fonts are installed over the internet; however, I will eventually make it so it is in the mod folder.

    var ready = function() {
        console.log("OverImage has succesfully loaded");
    };

    var error = function() {
        alert("Failed to load OverImage");
        console.log("OverImage has failed to load");
    };


    GDT.loadJs([
        'Code/OverImage.js',
    ], ready, error);

})();
