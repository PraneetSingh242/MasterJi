// Get references to the textarea and preview elements  
const markdownInput = document.getElementById('markdown');  
const previewOutput = document.getElementById('preview');  
const clearButton = document.getElementById('clear');  

// Function to update the preview  
function updatePreview() {  
    const markdownText = markdownInput.value;  
    // Use marked.js to convert markdown to HTML  
    previewOutput.innerHTML = marked.parse(markdownText);  
}  



// Event listener for input in the textarea  
markdownInput.addEventListener('input', updatePreview);  

// Event listener for the clear button  
clearButton.addEventListener('click', () => {  
    markdownInput.value = '';  
    updatePreview(); // Clear the preview as well  
});  

// Initial call to render empty preview  
updatePreview();