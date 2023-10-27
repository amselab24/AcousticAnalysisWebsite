document.addEventListener("DOMContentLoaded", (event) => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (!darkModeToggle) {
        console.error("Dark mode button not found!");
        return;
    }

    const currentTheme = localStorage.getItem("theme");
    console.log("Current Theme:", currentTheme);

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        darkModeToggle.classList.add("dark");
    }

    darkModeToggle.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme");
        console.log("Current data-theme:", current);

        let theme = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        darkModeToggle.classList.toggle("dark");
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const carousel1 = new Siema({
        selector: "#carousel1",
        loop: true,
    });

    const carousel2 = new Siema({
        selector: "#carousel2",
        loop: true,
    });

    const resultsCarousel = new Siema({
        selector: "#resultsCarousel",
        loop: true,
    });

    // carousel autoplay duration
    setInterval(() => carousel1.next(), 7000);
    setInterval(() => carousel2.next(), 7000);
    setInterval(() => resultsCarousel.next(), 7000);

    document.querySelectorAll(".prev").forEach((button) => {
        button.addEventListener("click", () => {
            eval(button.getAttribute("data-target")).prev();
        });
    });

    document.querySelectorAll(".next").forEach((button) => {
        button.addEventListener("click", () => {
            eval(button.getAttribute("data-target")).next();
        });
    });

    var stl_viewer = new StlViewer(
        document.getElementById("stl_6_blade_even"),
        {
            auto_rotate: false,
            zoom: "180",
            models: [
                {
                    filename: "/assets/stl/6_blade_even.stl",
                    color: "#3d557a",
                    animation: {
                        delta: {
                            rotationz: 1,
                            msec: 500,
                            loop: true,
                        },
                    },
                },
            ],
        }
    );

    var stl_viewer2 = new StlViewer(
        document.getElementById("stl_3_loop_toroidal"),
        {
            auto_rotate: false,
            zoom: "180",
            models: [
                {
                    filename: "/assets/stl/3_loop_toroidal.stl",
                    color: "#3d557a",
                    animation: {
                        delta: {
                            rotationz: 1,
                            msec: 500,
                            loop: true,
                        },
                    },
                },
            ],
        }
    );

    var stl_viewer3 = new StlViewer(
        document.getElementById("stl_6_blade_uneven"),
        {
            auto_rotate: false,
            zoom: "180",
            models: [
                {
                    filename: "/assets/stl/6_blade_uneven.stl",
                    color: "#3d557a",
                    animation: {
                        delta: {
                            rotationz: 1,
                            msec: 500,
                            loop: true,
                        },
                    },
                },
            ],
        }
    );
});

document.addEventListener("DOMContentLoaded", (event) => {
    $("pre[name='pre']").each(function () {
        var html = $(this).html()
        var blankLen = (html.split('\n')[0].match(/^\s+/)[0]).length
        $(this).html($.trim(html.replace(eval("/^ {" + blankLen + "}/gm"), "")))
    });
});