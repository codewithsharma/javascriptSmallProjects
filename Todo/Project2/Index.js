window.addEventListener("mousemove", function (details) {
    var rect = this.document.querySelector("#rect")
    var X = details.clientX
    var Y = details.clientY
    var RectangleLocation = rect.getBoundingClientRect()
    console.log(RectangleLocation.height)
    var Xval = gsap.utils.mapRange(0, window.innerWidth, 100 + RectangleLocation.width / 2, window.innerWidth -(100+ RectangleLocation.width / 2), X)
    var Yval = gsap.utils.mapRange(0, window.innerHeight, 100 + RectangleLocation.height / 2, window.innerHeight -(100+ RectangleLocation.height / 2), Y)

    gsap.to("#rect", {
        left: Xval + "px",
        top: Yval +"px",
        ease: Power3

    })

})