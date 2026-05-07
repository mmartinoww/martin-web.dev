export default function Info() {
  return (
    <section id="info" className="min-h-screen relative overflow-hidden">
      {/* Dark Header */}
      <div className="bg-gray-900 h-20 flex items-center px-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-white text-xl font-semibold">
            Bolorit<span className="underline">o</span>
          </span>
        </div>
      </div>

      {/* Hero Section with Blurred Background */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image Container with Blur Effect */}
        <div className="absolute inset-0">
          {/* Left side - Car area with blue tones */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-blue-600/30 to-blue-700/20 blur-3xl"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2/3 bg-blue-400/30 blur-2xl rounded-full"></div>
          </div>
          {/* Right side - Landscape/mountain area */}
          <div className="absolute right-0 top-0 bottom-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 via-gray-400/20 to-gray-500/10 blur-3xl"></div>
            <div className="absolute right-0 top-1/3 w-2/3 h-1/2 bg-gray-400/20 blur-2xl"></div>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 container mx-auto px-8 flex items-center h-full">
          <div className="ml-auto max-w-md">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              БОЛОРИТ
              <span className="block w-full h-1 bg-blue-500 mt-2"></span>
            </h1>

            {/* Text Lines */}
            <div className="text-white text-lg md:text-xl mb-8 space-y-2">
              <p>ПО ФАРОВЕТЕ ПОСРЕЩАТ,</p>
              <p>ПО СТОПОВЕТЕ ИЗПРАЩАТ.</p>
              <p>НИЕ ЩЕ ОПРАВИМ И ДВЕТЕ.</p>
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-black font-bold px-6 py-4 rounded-lg transition-all duration-300">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>ОБАДЕТЕ НИ СЕ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: LED Repair */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                РЕМОНТ НА LED
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                СТОПОВЕ И ОСВЕТЛЕНИЕ
              </p>
              <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                <span>Професионален ремонт</span>
              </div>
            </div>

            {/* Card 2: LED Tuning */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                LED ТУНИНГ И
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                ПЕРСОНАЛИЗАЦИЯ
              </p>
              <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                <span>Индивидуален дизайн</span>
              </div>
            </div>

            {/* Card 3: Converting */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                КОНВЕРТИРАНЕ US-
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                EU СТАНДАРТИ
              </p>
              <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                <span>Стандартизация</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
