export default function Home() {
  const accountAddress = "0x1EC68f194251355412c2A6Ed0faaaD"; 

  return (
    <div className="container mx-auto p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600">My Wallet</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        </p>
      </header>

      <section className="account-info mb-12 text-center lg:flex lg:justify-around lg:items-center lg:text-left">
        <div className="account-address mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold text-blue-600">Account Address</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{accountAddress}</p>
        </div>
        <div className="balance-section">
          <h2 className="text-2xl font-semibold text-blue-600">Available  amount</h2>
          <p className="text-4xl font-bold">1.234 Celo</p>
          <p className="mt-2 text-sm opacity-50"> R12.24</p>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center lg:flex-row lg:space-x-8">
        <section className="send-section lg:w-1/2">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 dark:hover:border-neutral-700 dark:hover:bg-yellow-800/30">
            <h2 className="mb-3 text-2xl font-semibold text-blue-600">Send Crypto</h2>
            <form className="flex flex-col">
              <label className="mb-2 text-sm opacity-75" htmlFor="address">
                Recipient Address
              </label>
              <input
                className="input-field mb-4"
                type="text"
                id="address"
                placeholder="Enter recipient address"
              />
              <label className="mb-2 text-sm opacity-75" htmlFor="amount">
                Amount (BTC)
              </label>
              <input
                className="input-field mb-4"
                type="number"
                id="amount"
                placeholder="Enter amount"
              />
              <button
                type="submit"
                className="submit-button"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © 2024 Crypto Wallet. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
