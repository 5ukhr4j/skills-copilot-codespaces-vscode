function skillsMember() {
  var member = document.getElementById("member");
  if (member) {
    member.addEventListener("click", function () {
      var memberSkills = document.getElementById("memberSkills");
      memberSkills.classList.toggle("hide");
    });
  }
}
