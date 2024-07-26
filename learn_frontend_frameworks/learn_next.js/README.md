# Progress Learning Next.js using codewithmosh course
- I will be noting down important points on this `README.md` so that I can refer back when necessary.

### Setting up a project.
- To start a project use the cmd `npx create-next-app@version`

### Routing and Navigation
- Next.js uses folder routing
- When using the navigation it is best to use the `Link` tag from Next.js which is more efficient than
  the a tag.
- We can render components on the client side `(Web Browser)`  or on the server side `(Node.js Runtime)`.
- Client-side Rendering means we send the data as large bundles hence resource heavy, also no SEO and less secure but with server-side
  rendering, data can be sent as smaller bundles, resource efficient, and because rendering is done on the server and sending the actual content
  to the client search engine bots can view and index our page, also sensitive data like api keys can stay on the server.
- Server Components cannot Listen to browser events, access browser API, maintain effects, so a mixture of server components and client components
  should be used.
- We should default to server components and use client components when we absolutely need them.
- By default all components in the app folder are server components.

### Data Fetching
- There are two ways to fetch data. Client and Server data fetching.
- To fetch data whenever possible we should fetch it in server components.

### Caching
- Fetching in server components has extra advantage (caching).
- Caching involves storing data somewhere that is faster to access.
- Next.js comes with a built in data cache. Whenever we use the `fetch()` function to get some data from the server Next.js stores in that cache memory.
- You can also supply a 2nd parameter to the `fetch()` to control how often you want Next.js to get data from the server or to disable caching. This behaviour
  can only be implemented inside the fetch method third party libries like axios you can't

### Styling
- A CSS file that is scoped to a component/page.
- In Next.js in the project directory there is a file named postcss.config.js that is used to autogenerate CSS classes so that the classNames in the CSS modules
  do not clash.
