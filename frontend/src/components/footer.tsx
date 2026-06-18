export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-3">HarvestIQ</h3>
            <p className="text-green-100">
              Empowering farmers with AI-driven insights, crop recommendations,
              weather monitoring, and data-based decision making.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li>Home</li>
              <li>About</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <p className="text-green-100">
              Email: support@harvestiq.com
            </p>
            <p className="text-green-100">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>

        </div>

        <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-200">
          © 2026 HarvestIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}