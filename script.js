// Fetch the JSON data (replace with your actual GitHub repo URL)
fetch('https://raw.githubusercontent.com/your-username/your-repo/main/permissions.json')
  .then(response => response.json())
  .then(data => {
    // Populate the extensions table
    populateExtensionsTable(data.extensions);

    // Populate the permissions table
    populatePermissionsTable(data.permissions);
  })
  .catch(error => console.error("Error fetching data:", error));

// Function to populate the extensions table
function populateExtensionsTable(extensions) {
  const tableBody = document.getElementById("extensions-table").getElementsByTagName("tbody")[0];
  extensions.forEach(extension => {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell();
    const versionCell = row.insertCell();
    const enabledCell = row.insertCell();
    const allowedGroupsCell = row.insertCell();
    const bannedUsersCell = row.insertCell();
    const superUsersCell = row.insertCell();
    const canGetTradersNumbersCell = row.insertCell();
    const actionsCell = row.insertCell();

    nameCell.textContent = extension.name;
    versionCell.textContent = extension.current_version || ""; 
    enabledCell.textContent = extension.enabled ? "Yes" : "No";
    allowedGroupsCell.textContent = extension.allowed_groups.join(", ");
    bannedUsersCell.textContent = extension.banned_users.join(", ");
    superUsersCell.textContent = extension.super_users.join(", ");
    canGetTradersNumbersCell.textContent = extension.can_get_traders_numbers ? "Yes" : "No";

    // Add edit/delete buttons for actions
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    // Add event listener for editing (more on this later)
    editButton.addEventListener("click", () => {
      editExtension(extension); // Function for editing an extension (not yet implemented)
    });
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    // Add event listener for deleting (more on this later)
    deleteButton.addEventListener("click", () => {
      deleteExtension(extension); // Function for deleting an extension (not yet implemented)
    });
    actionsCell.appendChild(deleteButton);
  });
}

// Function to populate the permissions table (similar to populateExtensionsTable)
function populatePermissionsTable(permissions) {
  // ... (implementation similar to populateExtensionsTable)
}

// Event listener for "Add Extension" button (more on this later)
document.getElementById("add-extension-button").addEventListener("click", () => {
  // ... (function for adding a new extension - not yet implemented)
});

// Event listener for "Add Permission" button (more on this later)
document.getElementById("add-permission-button").addEventListener("click", () => {
  // ... (function for adding a new permission - not yet implemented)
});
