import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export function ContactContent() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jmspinuela2020@gmail.com',
      href: 'mailto:jmspinuela2020@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/poohbears123',
      href: 'https://github.com/poohbears123',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      href: 'https://www.linkedin.com/in/pinuela-james-mezack-3680aa317/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@johndoe',
      href: 'https://twitter.com',
      color: 'from-sky-500 to-sky-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+63) 9460030607',
      href: 'tel:+(63) 9460030607',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Roxas City, Philippines',
      href: 'https://maps.app.goo.gl/z4K2EnYJWKuSTW4b8',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-gray-800">Get In Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                >
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{method.label}</p>
                  <p className="text-gray-800 dark:text-gray-100 text-sm truncate">{method.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <h3 className="text-gray-800 mb-3">Send a Message</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white dark:bg-gray-700 dark:text-gray-100"
                rows={4}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
