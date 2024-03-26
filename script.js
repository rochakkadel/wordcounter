function countWords() {
   const text = document.getElementById('text').value;
   const words = text.trim().split(/\s+/);
   const wordCount = words.length;

   document.getElementById('result').innerHTML = `Word count: ${wordCount}`;
}

function clearText() {
   document.getElementById('text').value = '';
   document.getElementById('result').innerHTML = '';
}
