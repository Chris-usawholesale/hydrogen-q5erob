export default function NewsletterSignup() {
  return (
    <form>
      <div className="relative block mb-8">
        <label
          htmlFor="email-address"
          className="block mb-2.5 text-black text-sm font-bold"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-4 px-3 text-sm text-gray-600 placeholder-gray-600 focus:outline-none focus:primary focus:border-primary"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center font-bold font-mono text-primary border-2 border-transparent focus:outline-none focus:border-primary"
      >
        <span className="underline mr-2 leading-none">Subscribe</span>
        <span className="leading-none">{' -->'}</span>
      </button>
    </form>
  );
}
