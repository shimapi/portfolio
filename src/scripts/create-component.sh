#!/bin/bash
# Create directory and files for a new component
component_name=$1

# Check if a component name was provided
if [ -z "$component_name" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Create the directory and files
mkdir -p components/$component_name && touch components/$component_name/$component_name.sass components/$component_name/$component_name.jsx

echo "Component structure for '$component_name' created successfully."

# Use:
# ./create-component.sh ComponentName