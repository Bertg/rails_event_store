const app = Elm.Main.init({
  flags: JSON.parse(document.querySelector("meta[name='ruby-event-store-browser-settings']").getAttribute("content")),
});

app.ports.copyToClipboard.subscribe(function(message) {
  navigator.clipboard.writeText(message);
});

app.ports.toggleDialog.subscribe(function(id) {
  const dialog = document.querySelector(`#${id}`)
  dialog.open ? dialog.close() : dialog.showModal();
});
