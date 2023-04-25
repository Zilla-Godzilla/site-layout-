
document.addEventListener('DOMContentLoaded', function(){
  var ri = document.getElementById('research_icon');
  var ib = document.getElementById('forma');
  console.log(ib);
  console.log(ri);
  ri.addEventListener('click', function(){
  mish_on(ri,ib);	
  })
  ib.addEventListener('mouseout', function(){
  //mish_out(ri,ib);	
  })
})
function mish_on(ri,ib){
    ri.classList.add("no_active_research");
    ib.style.display = 'block';
    console.log(ri.classList.contains("no_active_research"));
}
function mish_out(ri,ib){
	ri.classList.remove("no_active_research");
    ib.style.display = 'none';
    console.log(ri.classList.contains("no_active_research"));
}