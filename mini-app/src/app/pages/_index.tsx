export default function Home() {
    return (
      <div className="container mx-auto p-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-600">My Wallet</h1>
        </header>
        <section className="account-info mb-12 text-center">
          <div className="account-address mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">Account Address</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">0x1EC68f194251355412c2A6Ed0faaaD</p>
          </div>
          <div className="balance-section">
            <h2 className="text-2xl font-semibold text-blue-600">Available Amount</h2>
            <p className="text-4xl font-bold">1.234 Celo</p>
            <p className="mt-2 text-sm opacity-50">R12.24</p>
          </div>
        </section>
      </div>
    );
  }
  