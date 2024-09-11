# Frappe CRM Override Example

This repository provides an example workflow on how to override components in a Frappe UI-based applications. The example demonstrates how to add a new page with a YouTube video embed and integrate it into the sidebar of Frappe CRM from a custom app.

## Features

- Demonstrates how to override Frappe UI components from custom app.
- Modifies the Frappe CRM sidebar to include a link to the custom page.

## Getting Started

### Prerequisites

- Frappe Bench with Frappe CRM Installed

### Installation

1. **Get the app code:**

   > If developing, clone the repository into app directory of your bench.
   
   ```bash
   git clone https://github.com/your-username/crm_override.git
   cd crm_override
   ```

   > To Try, get-app with bench cli.
   ```bash
   bench get-app https://github.com/esafwan/crm_override.git
   bench --site your-site-name install-app crm_override


3. **Install dependencies:**
   ```
   cd frontend
   yarn
   yarn build

   ```

5. **Run the app:**
   ```
   bench start
   ```

## File Structure

- \`src_overrides/\` - Contains overridden Vue components.
- \`vite.config.js\` - Vite configuration for building the frontend assets.
- \`package.json\` - package.json configuration calls the build script and do the overrides. 

## How it Works

- The \`src_overrides\` in the frontend folder contains the overridden sidebar and new custom page.
- The  \`custom-build.js` in the frontend folder does the overrides at build. 
