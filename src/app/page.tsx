import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://dute.dev"
            target="_blank"
          >
            Josemy's Website
          </a>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="relative z-10 text-6xl font-bold text-center">
          <span className="text-white">Hello</span> 👋, <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-500 dark:from-sky-900 dark:to-blue-900">I'm Josemy Duarte</span>
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <p className="relative z-10 text-2xl font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-br text-white">
            Software Engineer, based on Barcelona, Spain.
          </span>
        </p>
      </div>

      <div className="mb-32 flex items-center justify-center mt-8 space-x-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <a
          href="https://www.linkedin.com/in/josemyduarte/"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>

        <a
          href="https://github.com/JosemyDuarte"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://josemyduarte.github.io/"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            x="0px" y="0px" width="100" height="100"
            viewBox="0 0 50 50">
            <path
              d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 20 11 C 15.054545 11 11 15.054545 11 20 L 11 25 L 11 30 C 11 34.945455 15.054545 39 20 39 L 30 39 C 34.945455 39 39 34.945455 39 30 L 39 24 C 39 22.35503 37.64497 21 36 21 L 35 21 C 34.43497 21 34 20.56503 34 20 C 34 15.054545 29.945455 11 25 11 L 20 11 z M 20 13 L 25 13 C 28.854545 13 32 16.145455 32 20 C 32 21.64497 33.35503 23 35 23 L 36 23 C 36.56503 23 37 23.43497 37 24 L 37 30 C 37 33.854545 33.854545 37 30 37 L 20 37 C 16.145455 37 13 33.854545 13 30 L 13 25 L 13 20 C 13 16.145455 16.145455 13 20 13 z M 20 17 C 18.354545 17 17 18.354545 17 20 C 17 21.645455 18.354545 23 20 23 L 25 23 C 26.645455 23 28 21.645455 28 20 C 28 18.354545 26.645455 17 25 17 L 20 17 z M 20 19 L 25 19 C 25.554545 19 26 19.445455 26 20 C 26 20.554545 25.554545 21 25 21 L 20 21 C 19.445455 21 19 20.554545 19 20 C 19 19.445455 19.445455 19 20 19 z M 20 27 C 18.354545 27 17 28.354545 17 30 C 17 31.645455 18.354545 33 20 33 L 30 33 C 31.645455 33 33 31.645455 33 30 C 33 28.354545 31.645455 27 30 27 L 20 27 z M 20 29 L 30 29 C 30.554545 29 31 29.445455 31 30 C 31 30.554545 30.554545 31 30 31 L 20 31 C 19.445455 31 19 30.554545 19 30 C 19 29.445455 19.445455 29 20 29 z"></path>
          </svg>
        </a>

        <a
          href="mailto:me@dute.dev"
          className="flex items-center justify-center w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>

        <a
          href="https://drive.google.com/file/d/1qbBIrs_yUJNxUeAUugD0SNAkJu2c36o3/view?usp=sharing"
          className="flex items-center justify-center w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
            fill="currentColor" stroke-width="1" stroke-linejoin="round"
            viewBox="0 0 64 64">
            <path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z" />
            <path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />
            <path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z" />
          </svg>
        </a>

      </div>

    </main>
  )
}
