const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "team",
          element: <Team />,
          loader: teamLoader,
        },
      ],
    },
  ]);