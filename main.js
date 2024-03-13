document.addEventListener("DOMContentLoaded", function () {
  const foto = document.querySelector("#avatar");
  const nome = document.querySelector("#nome");
  const user = document.querySelector("#user");
  const repo = document.querySelector("#repo");
  const seguidores = document.querySelector("#follow");
  const seguindo = document.querySelector("#following");
  const link = document.querySelector("#link");

  fetch("https://api.github.com/users/Napaul4")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      foto.src = json.avatar_url;
      nome.innerHTML = json.name;
      user.innerHTML = json.login;
      repo.innerHTML = json.public_repos;
      seguidores.innerHTML = json.followers;
      seguindo.innerHTML = json.following;
      link.href = json.html_url;
    });
});
