import {serve} from 'bun'   // Import the serve function from the 'bun' module

serve({
     fetch(request){ // Handle the request
          const url = new URL(request.url) // Parse the URL of the request
          if (url.pathname === '/') { // Check the URL of the current request
               return new Response('Hello World\n',{status: 200}) // Return a response
          }
          else if (url.pathname === '/goodbye') { 
               return new Response('Goodbye World\n',{status: 200})
          }
          else {
               return new Response('Not Found\n',{status: 404})
          }
     },
     port: 3000 ,// Set the port
     hostname: '127.0.0.1' // Set the hostname

})