PDFJS.getDocument('resume.pdf').then(function(pdf) {
  var pageNum = 1;
  var pageRendering = false;
  var pageNumPending = null;
  var canvas = document.getElementById('pdf-canvas');
  var ctx = canvas.getContext('2d');
  var scale = 1.5;

  function renderPage(num) {
    pageRendering = true;

    pdf.getPage(num).then(function(page) {
      var viewport = page.getViewport(scale);
      canvas.height = viewport.height;
      canvas.width = viewport.width;
    
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };