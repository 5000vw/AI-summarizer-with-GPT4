const Footer = () => {
  return (
    <footer className="gap-5 bg-white-200 rounded-lg shadow m-4:bg-gray-800 w-full">
      <div className="mx-[28%] gap-5  max-w-screen-xl p-4 md:flex md:items-center md:justfy-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          copyright@2023
          <a href="#" className="hover:Underline mx-1 ">
            Sumarize.
          </a>{' '}
          All Right Reserved.
        </span>
        <ul
          className="flex md:mx-2 flex-wrap items-center mt-3 text-sm
         font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
