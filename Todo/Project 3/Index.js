   const throttleFunction=(func, delay)=>{  
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;     
          return func(...args); 
        }
      }
    }
    document.querySelector("#center").addEventListener("mousemove", throttleFunction((detail)=>{
        console.log(detail)
      var div = document.createElement("div")
      var img = document.createElement("img")
      img.setAttribute("src", "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80")
      div.appendChild(img)

      div.classList.add("imageDiv")
  
      div.style.left= detail.clientX + "px"
      div.style.top= detail.clientY + "px"
      document.body.appendChild(div)

      gsap.to(img,{
        y:"0",
        ease: Power1,
        duration:0.6
      })
      gsap.to(img,{
        y:"100%",
        delay:0.6,
        ease: Power2,
        duration:0.2
      })
      setTimeout(function(){
        div.remove()
      },1500)
    }, 200));