import React from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen, Github } from 'lucide-react'
const GettingStartedSection = () => {
  return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Install React Foam and start building better React applications today.
              </p>

              <div className="bg-black/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <code className="text-white text-lg">
                      npm install react-foam
                  </code>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Documentation
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                  </Button>
              </div>
          </div>
      </section>
  )
}

export default GettingStartedSection