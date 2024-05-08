# Job Listing App

This is a [tutorial](https://www.youtube.com/watch?v=LDB4uaJ87e0&list=PL4EX4Aw5_AFv-9yS-9lF3SNHUImZyygK7) project from [Traversy Media](https://www.youtube.com/@TraversyMedia) on YouTube. 

### Screenshot

![](./screenshot.jpg)

### Links

- [View Code](https://www.example.com)
- [Live Preview](https://www.example.com)

### Built with

- HTML
- CSS
- JavaScript
- React
- Tailwind

### What I learned

- react-icons package
- React Router - used for creating single-page apps that allow navigating without refreshing the page

```js
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom'
// other code

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
```

- &lt;Link&gt; from react-router-dom - unlike &lt;a&gt; tag, this element does not reload the whole page, creating a better user experience

```js
import { Link } from 'react-router-dom'

// other code
<Link
  to="/jobs"
  className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
>
  Browse Jobs
</Link>
// other code
```

- &lt;NavLink&gt; - adds active links to nav links - styling can be changed conditionally using isActive

```js
import { NavLink } from "react-router-dom";
// other code

<NavLink to="/jobs" className={({ isActive }) => isActive ? 'bg-black' : ''}>
  Jobs
</NavLink>
```

### Useful resources

- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite) - Setting up Tailwind CSS in a Vite project.
- [React Router tutorial](https://reactrouter.com/en/main/start/tutorial) - React Router tutorial from the docs