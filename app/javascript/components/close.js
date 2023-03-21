const textLinkModalAbout = () => {
    const closeModalAbout = () => {
        var about = document.getElementById('about');

        setTimeout(() => {   

            const about_modal = document.getElementById('aboutModalCenter');
            // var about = document.getElementById('about');
            if (about_modal.classList.contains("show")) {
                about.innerHTML = about.innerHTML.replace("about","close");
                console.log("close");
            }
            else {
                about.innerHTML = about.innerHTML.replace("close","about");
                console.log("about");
            };
        }, 180);

    }

    var about = document.getElementById('about');
    var about_modal = document.getElementById('aboutModalCenter');;

    //IN
    about.addEventListener("click", () => {
      // Call your functions here, e.g:
      // initSelect2();
      closeModalAbout();
    });

    //OUT
    about_modal.addEventListener("click", () => {
      // Call your functions here, e.g:
      // initSelect2();
      closeModalAbout();
    });
};

export { textLinkModalAbout }

const textLinkModalIndex = () => {
    const closeModalIndex = () => {
        var index = document.getElementById('index');

        setTimeout(() => {   

            const index_modal = document.getElementById('indexModalCenter');
            // var about = document.getElementById('about');
            if (index_modal.classList.contains("show")) {
                index.innerHTML = index.innerHTML.replace("index","close");
                console.log("close");
            }
            else {
                index.innerHTML = index.innerHTML.replace("close","index");
                console.log("index");
            };
        }, 180);

    }

    var index = document.getElementById('index');
    var index_modal = document.getElementById('indexModalCenter');;

    //IN
    index.addEventListener("click", () => {
      // Call your functions here, e.g:
      // initSelect2();
      closeModalIndex();
    });

    //OUT
    index_modal.addEventListener("click", () => {
      // Call your functions here, e.g:
      // initSelect2();
      closeModalIndex();
    });
};

export { textLinkModalIndex }