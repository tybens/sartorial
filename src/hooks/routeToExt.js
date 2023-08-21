export default function routeToExt(href) {
  var link = document.createElement("a");
  link.href = href;
  document.body.appendChild(link);

  link.click();
}
