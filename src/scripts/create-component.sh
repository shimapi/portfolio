#!/bin/bash
# Create directory and files for a new component
component_name=$1

# Check if a component name was provided
if [ -z "$component_name" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Create the directory and files
mkdir -p components/$component_name && touch components/$component_name/$component_name.scss components/$component_name/$component_name.jsx

echo "Component structure for '$component_name' created successfully."

# Use:

# 1. giving permissions: 
# chmod +x scripts/create-component.sh

# 2. run the script
# ./scripts/create-component.sh ComponentName