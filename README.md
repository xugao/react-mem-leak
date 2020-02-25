This repository is aimed at making it easier to find Memory leaks(if any) in Fabric components.

## Description of Architecture
This repository follows an unique architecture where we render a React component inside a childWindow (new Chrome Tab).
So essentially all the Javascript is basically being run in the Main Window but the view is basically rendered in the child Window. 

## How this architecture helps in Detecting Leaks
Since we render the components in the childWindow, most existing leaks would end up holding references to the childWindow object hence leaking the entire childWindow object. Thus taking a heap-snapshot directly shows the objects or closures which might be leaky.

## How to use this repository
1. Inside `/components` directory, create a file for componnt you want to check leaks for.
2. Write logic for component.
3. Go to app.tsx and inside `ReactDom.render()` method, render your component.
