// La web de ELEVALOS se publicaba en /healthcare/ y ahora está en elevalos.com.
// Redirige cualquier dirección antigua a su equivalente, conservando el idioma.
(function () {
  var prefix = "/healthcare/";
  var path = location.pathname;
  if (path.indexOf(prefix) !== 0 && path !== "/healthcare") return;
  var page = path.slice(prefix.length).replace(/^\/+/, "");
  var lang = new URLSearchParams(location.search).get("lang");
  if (!page || page === "index.html") page = lang === "en" ? "index.en.html" : "";
  var target = new URL(page, "https://elevalos.com/");
  if (lang === "es" || lang === "en") target.searchParams.set("lang", lang);
  location.replace(target.href);
})();
