let navlinks=$(".navbar-nav .nav-link")

navlinks.click((ev)=>{

    let componetUrl=`/components/${$(ev.target).attr("data-component")}.html`
    
    $("#content").load(componetUrl)

})

