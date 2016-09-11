# Thoughts on how to layout a React/Redux project

I've seen quite a few different stuctures already while learning React/Redux. Here is the structure I see most often:

## src
1. Actions - The actions for the reducers to take against the state
2. Components - Primarily dumb components that don't handle their own state - get state through props
3. Constants - Actual text constants to pass as the messages
4. Containers - Views that hold components - typically smart and handle their own state and pass state to components
5. MiddleWare - Broad array of responsibilities
6. Reducers - Handle messages sent by actions and routed through the store router
7. Store - Handling actual changes in state

(I would like to see some sort of framework for React as well - with tools like DataTables, Forms, CTA, Login systems ready to plug into a redux app like this)