import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="logo">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>TechFlow</h2>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600'}`}>Features</a>
              <a href="#testimonials" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600'}`}>Testimonials</a>
              <a href="#pricing" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600'}`}>Pricing</a>
              <a href="#contact" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600'}`}>Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                onClick={toggleTheme}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Transform Your Workflow with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TechFlow
                </span>
              </h1>
              <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The ultimate SaaS solution that streamlines your business operations, boosts productivity, and drives growth with intelligent automation and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-lg">Start Free Trial</button>
                <button className="px-8 py-4 bg-gray-100 text-gray-800 border border-gray-300 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:-translate-y-0.5 text-lg">Watch Demo</button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>10K+</div>
                  <div className={`text-sm uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active Users</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>99.9%</div>
                  <div className={`text-sm uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Uptime</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>24/7</div>
                  <div className={`text-sm uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96">
                <div className={`absolute top-10 left-10 p-4 rounded-xl shadow-2xl animate-float ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold mb-1">Analytics</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time insights</p>
                </div>
                <div className={`absolute top-32 right-10 p-4 rounded-xl shadow-2xl animate-float ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`} style={{animationDelay: '2s'}}>
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold mb-1">Automation</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Smart workflows</p>
                </div>
                <div className={`absolute bottom-20 left-20 p-4 rounded-xl shadow-2xl animate-float ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`} style={{animationDelay: '4s'}}>
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold mb-1">Security</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Enterprise-grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Powerful Features</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Everything you need to scale your business efficiently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Lightning Fast', desc: 'Built with cutting-edge technology for optimal performance and speed.' },
              { icon: '📱', title: 'Mobile First', desc: 'Responsive design that works perfectly on all devices and screen sizes.' },
              { icon: '🔧', title: 'Easy Integration', desc: 'Seamlessly integrate with your existing tools and workflows.' },
              { icon: '📈', title: 'Advanced Analytics', desc: 'Get deep insights into your business performance with detailed reports.' },
              { icon: '🛡️', title: 'Enterprise Security', desc: 'Bank-level security with encryption and compliance standards.' },
              { icon: '🌐', title: 'Global CDN', desc: 'Lightning-fast loading times worldwide with our global content delivery network.' }
            ].map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'}`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What Our Customers Say</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Join thousands of satisfied customers worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                quote: "TechFlow has completely transformed how we manage our projects. The automation features save us hours every week!",
                avatar: "👩‍💼",
                name: "Sarah Johnson",
                title: "Product Manager, TechCorp"
              },
              { 
                quote: "The analytics dashboard gives us insights we never had before. Our decision-making process is now data-driven.",
                avatar: "👨‍💻",
                name: "Mike Chen",
                title: "CTO, StartupXYZ"
              },
              { 
                quote: "Customer support is exceptional. They helped us implement the solution in record time.",
                avatar: "👩‍🔬",
                name: "Emily Rodriguez",
                title: "Operations Director, InnovateLab"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
                <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Simple, Transparent Pricing</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Choose the plan that fits your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "29",
                features: ["Up to 5 team members", "Basic analytics", "Email support", "10GB storage"],
                featured: false,
                buttonText: "Get Started"
              },
              {
                name: "Professional",
                price: "79",
                features: ["Up to 25 team members", "Advanced analytics", "Priority support", "100GB storage", "Custom integrations"],
                featured: true,
                buttonText: "Get Started"
              },
              {
                name: "Enterprise",
                price: "199",
                features: ["Unlimited team members", "Custom analytics", "24/7 phone support", "Unlimited storage", "White-label solution", "Dedicated account manager"],
                featured: false,
                buttonText: "Contact Sales"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 ${plan.featured ? 'scale-105' : ''} ${isDarkMode ? 'bg-gray-700 border-2 border-blue-500' : 'bg-white border-2 border-gray-200'} ${plan.featured && !isDarkMode ? 'border-blue-500' : ''}`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-2xl text-gray-500">$</span>
                    <span className={`text-5xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                                 <button className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' : 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                   {plan.buttonText}
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using TechFlow to streamline their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                             <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg text-lg transition-all duration-300">
                 Start Free Trial
               </button>
               <button className="px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 hover:-translate-y-0.5 text-lg transition-all duration-300">
                 Schedule Demo
               </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-800 border-t border-gray-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-400'}`}>TechFlow</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                Empowering businesses with intelligent automation and analytics solutions.
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'API', 'Documentation'].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className={`transition-colors duration-300 hover:text-blue-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className={`transition-colors duration-300 hover:text-blue-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'Community', 'Status', 'Security'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className={`transition-colors duration-300 hover:text-blue-400 ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App