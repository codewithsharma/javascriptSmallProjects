var rect =document.querySelector("#center")
rect.addEventListener("mousemove", function(details){
   var RectangleLocation = rect.getBoundingClientRect()
   var LocationX = details.clientX - RectangleLocation.left
   var LocationY = details.clientY - RectangleLocation.top
   var Transparency = gsap.utils.mapRange(0,RectangleLocation.height, 1.0, 0.0, LocationY)
    if(LocationX<RectangleLocation.width/2){
    var Redcolor =gsap.utils.mapRange(0,RectangleLocation.width/2,255,0, LocationX )
  gsap.to(rect,{
    backgroundColor:`rgba(${Redcolor},0,0,${Transparency})`,
    ease:Power4
  })
    }
    else{
        var Bluecolor =gsap.utils.mapRange(RectangleLocation.width,0,255,0, LocationX )
  gsap.to(rect,{
    backgroundColor:`rgba(0,0,${Bluecolor},${Transparency})`,
    ease:Power4
  })
    }
  
})
rect.addEventListener("mouseleave", function(){
   gsap.to(rect, {
    backgroundColor:"white"
   })
})