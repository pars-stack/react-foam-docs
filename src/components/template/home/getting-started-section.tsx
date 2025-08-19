import React from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen, Github } from 'lucide-react'
const GettingStartedSection = () => {
  return (
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Install React Foam and start building better React applications today.
              </p>

              <div className="bg-black/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <code className="text-white text-lg">npm install react-foam</code>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Documentation
                  </Button>
                  <Button
                      size="lg"
                      variant="outline"
                      className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                  </Button>
              </div>
          </div>
      </section>
  )
}

export default GettingStartedSection