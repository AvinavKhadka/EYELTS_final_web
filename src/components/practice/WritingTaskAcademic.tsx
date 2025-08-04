import { ArrowLeft, LineChart, Download, Timer, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { useState } from 'react'

export const WritingTaskAcademic = () => {
  const [answer, setAnswer] = useState('')
  const sampleChart = `https://takeielts.britishcouncil.org/sites/default/files/styles/bc-landscape-800x450/public/academic_writing_sample_task_1.png`

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
      <header className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg shadow-purple-900/20">
        <div className="container mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Logo />
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-purple-100 hover:text-white transition-all rounded-lg hover:bg-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 bg-clip-text text-transparent">
              Writing Task 1: Academic
            </h1>
            <div className="flex items-center gap-2 text-purple-900 font-medium">
              <Timer className="w-5 h-5" />
              <span>20 minutes</span>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">Task Instructions</h2>
              <p className="text-gray-700 mb-4">
                You should spend about 20 minutes on this task.
              </p>
              <p className="text-gray-700 mb-6">
                The graph below shows the number of international students studying in different faculties 
                at a university in Canada in 2019 and 2020.
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
              </p>
              <p className="text-gray-700 mb-4">
                Write at least 150 words.
              </p>
            </div>
          </div>

          {/* Sample Chart Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-900">Task Chart</h3>
              <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download Chart</span>
              </button>
            </div>
            <img 
              src={sampleChart} 
              alt="Sample academic chart" 
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Answer Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Your Response</h3>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-64 p-4 rounded-lg border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
              placeholder="Write your answer here..."
            />
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">
                Word count: {answer.split(/\s+/).filter(word => word.length > 0).length} / 150 minimum
              </div>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Answer</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}