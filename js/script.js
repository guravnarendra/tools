// Main script for the Multi Tool Hub
document.addEventListener('DOMContentLoaded', function() {
    // Common functionality can be added here
    console.log('Multi Tool Hub loaded');
});

// Function to handle tool redirection (kept for backward compatibility)
function redirectToTool(toolName) {
    window.location.href = `tools/${toolName.toLowerCase().replace(' ', '-')}.html`;
}
