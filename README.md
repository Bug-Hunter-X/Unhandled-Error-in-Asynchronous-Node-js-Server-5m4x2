# Unhandled Error in Asynchronous Node.js Server

This repository demonstrates a common error in asynchronous Node.js applications: unhandled errors within asynchronous callbacks.  The server randomly returns either a 200 OK or a 500 Internal Server Error.  The problem lies in the absence of proper error handling, making the application vulnerable to unexpected crashes and failures.

## Bug

The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation.  The operation randomly succeeds or fails, but the failure case lacks a proper mechanism to handle the error. This could lead to the server crashing or behaving unexpectedly. 

## Solution

The `bugSolution.js` demonstrates the correct way to handle errors in asynchronous Node.js code, improving its robustness.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Make multiple requests to `http://localhost:3000/`.
5. Observe the inconsistent responses (200 or 500).

## How to Fix

Refer to the solution file (`bugSolution.js`) which demonstrates proper error handling within the asynchronous callback, making the application more reliable.