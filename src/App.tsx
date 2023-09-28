import { useContext } from 'react'
import { HomePageContext, IGlobalDataType } from '@/context/HomeContext'
import { NavigationMenuDemo } from '@/components/Nav'

function App() {
  const appData = useContext<IGlobalDataType>(HomePageContext)

  return (
    <main>
      <div className="bg-white text-black">
        <nav
          className="flex items-center justify-center pt-6 lg:px-8"
          aria-label="Global"
        >
          <NavigationMenuDemo buttons={appData.header_navigation} />
        </nav>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {appData.hero_banner_title}
              </h1>
              <p className="mt-6 text-lg leading-8">
                {appData.hero_banner_desc}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white border px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {appData.hero_primary_call_to_action}
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 px-3.5 py-2.5"
                >
                  {appData.hero_secondary_call_to_action}{' '}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
      <footer className="bg-white dark:bg-gray-900 w-100">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {appData.footer_navigation.links.map((c) => (
              <div key={c.title}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  {c.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {c.items.map((i) => (
                    <li key={i.title} className="mb-4">
                      <a href={i.href} className=" hover:underline">
                        {i.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 w-100">
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href={appData.footer_navigation.copyRights.href}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {appData.footer_navigation.copyRights.title}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
